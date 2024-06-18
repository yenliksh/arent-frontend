import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { useClientSize } from 'hooks';
import { FC, useCallback, useRef, useState } from 'react';
import styled from 'styled-components';
import { BreakpointsEnum } from 'types';
import { Coords } from 'types/advert';
import { IconButton } from 'ui';

import SvgAdd from '../../../../../public/svg/components/Add';
import SvgMapPin from '../../../../../public/svg/components/MapPin';
import SvgMinus from '../../../../../public/svg/components/Minus';

type MapTypes = {
  currentMarker: Coords;
  center: Coords;
  onChangeCoordsToDrag: (address: Coords) => void;
  setCenter: (center: Coords) => void;
  setCurrentMarker: (center: Coords | null) => void;
  isMarkerLoading: boolean;
};

const DEFAULT_ZOOM = 12;

const Map: FC<MapTypes> = ({
  setCenter,
  currentMarker,
  center,
  onChangeCoordsToDrag,
  setCurrentMarker,
  isMarkerLoading,
}) => {
  // eslint-disable-next-line no-undef
  const mapRef = useRef<google.maps.Map | null>(null);
  const [zoom, setZoom] = useState(DEFAULT_ZOOM);
  const [showMarkerOnDrag, setShowMarkerOnDrag] = useState(false);
  const { getIsBreakpoint } = useClientSize();

  // eslint-disable-next-line no-undef
  const onLoad = useCallback((map: google.maps.Map) => {
    map.setZoom(zoom);
    mapRef.current = map;
  }, []);

  const handleCenterChange = useCallback(() => {
    const lat = mapRef?.current?.getCenter()?.lat();
    const lng = mapRef?.current?.getCenter()?.lng();
    if (!lat || !lng) return;
    setCenter({ lat, lng });
    onChangeCoordsToDrag({ lat, lng });
    setCurrentMarker({ lat, lng });
    setTimeout(() => {
      setShowMarkerOnDrag(false);
    }, 1000);
  }, []);

  const handleZoomChanged = useCallback(() => {
    onDragStart();
    if (mapRef?.current?.getZoom()) {
      setZoom(mapRef?.current?.getZoom()!);
    }
  }, []);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.GOOGLE_API_KEY!,
  });

  const isWidthSm = getIsBreakpoint('sm');

  const onDragStart = () => {
    setShowMarkerOnDrag(true);
    setCurrentMarker(null);
  };

  return (
    <MapContainer>
      {isLoaded && (
        <GoogleMap
          zoom={zoom}
          onLoad={onLoad}
          onDragEnd={handleCenterChange}
          onZoomChanged={handleZoomChanged}
          mapContainerStyle={isWidthSm ? mapResponsiveStyles : mapStyles}
          onDragStart={onDragStart}
          options={{
            fullscreenControl: false,
            panControl: true,
            mapTypeControl: false,
            disableDefaultUI: true,
            zoomControl: false,
            scrollwheel: true,
            gestureHandling: 'greedy',
            streetViewControl: false,
          }}
          center={{ ...center }}>
          <>
            {currentMarker && !isMarkerLoading && (
              <Marker draggable={false} icon="/svg/origin/map-pin.svg" position={{ ...currentMarker }} />
            )}
          </>
        </GoogleMap>
      )}
      <MapsMarkerContainer>{showMarkerOnDrag && !isMarkerLoading && <SvgMapPin />}</MapsMarkerContainer>

      <MapsButtonsContainer>
        <IconButton type="button" IconComponent={SvgAdd} onClick={() => setZoom(zoom + 1)} />
        <IconButton type="button" IconComponent={SvgMinus} onClick={() => setZoom(zoom - 1)} />
      </MapsButtonsContainer>
    </MapContainer>
  );
};

export default Map;

const mapStyles = { maxWidth: '739px', height: '344px', width: '100%' };
const mapResponsiveStyles = { maxWidth: '739px', height: '432px', width: '100%' };

const MapContainer = styled.div`
  width: 100%;
  height: 344px;
  max-width: 739px;
  border-radius: 12px;
  margin-top: 24px;
  overflow: hidden;
  position: relative;

  @media (max-width: ${BreakpointsEnum.sm}px) {
    height: 432px;
  }
`;

const MapsButtonsContainer = styled.div`
  position: absolute;
  right: 16px;
  gap: 8px;
  display: flex;
  flex-direction: column;
  bottom: 16px;
`;

const MapsMarkerContainer = styled.div`
  position: absolute;
  top: calc(50% - 36px);
  left: calc(50% - 18px);
`;
