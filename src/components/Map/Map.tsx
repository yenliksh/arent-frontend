import { GoogleMap, OverlayView, useJsApiLoader } from '@react-google-maps/api';
import useClientSize from 'hooks/useClientSize';
import useCurrentLocation from 'hooks/useCurrentLocation';
import { useDisableScrollBody } from 'hooks/useDisableScroll';
import useWindowScroll from 'hooks/useWindowScroll';
import { useRouter } from 'next/router';
import { FC, useCallback, useRef, useState } from 'react';
import styled from 'styled-components';
import { colors } from 'styles/themes/default/colors';
import { BreakpointsEnum } from 'types';
import { Coords } from 'types/advert';
import { IconButton } from 'ui/IconButton';
import { handleDivisionOnCategories } from 'utils';
import { mapSizeCalculation } from 'utils/map';

import { Coordinate, CurrentLocation } from '../../../public/svg/components';
import SvgAdd from '../../../public/svg/components/Add';
import SvgMinus from '../../../public/svg/components/Minus';
import { ApartmentAdViewModel, ApartmentRentPeriodType } from '../../__generated__/types';
import { useToggle } from '../../hooks';
import { Marker } from './components';
import SliderMapApartments from './components/SliderMapApartments/SliderMapApartments';

export const BASE_COORDINATE = { lat: 43.2567, lng: 76.9286 };

interface ResponsiveCardInSearchProps extends Partial<Omit<ApartmentAdViewModel, 'address'>> {
  rentType?: string;
  guestsNum?: string;
  id: string;
  pictureSrc: string;
  address: string;
  title: string;
  photo?: string;
  price: string;
  cost?: string;
  lat?: number;
  lng?: number;
  isFocus?: boolean;
  type?: ApartmentRentPeriodType;
  slug?: string;
}

type MapProps = {
  markers: Array<ResponsiveCardInSearchProps>;
  center: Coords;
  setCenter: (center: Coords) => void;
  isLoading?: boolean;
  isFullWidth?: boolean;
};

const DEFAULT_ZOOM = 11;

const Map: FC<MapProps> = ({ markers, center, setCenter, isFullWidth }) => {
  // eslint-disable-next-line no-undef
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [zoom, setZoom] = useState(DEFAULT_ZOOM);
  const router = useRouter();
  const { getIsBreakpoint } = useClientSize();
  const isWidthSm = getIsBreakpoint('sm');
  const ref = useRef<HTMLDivElement>(null);
  const [isMapFullWidth] = useState(isFullWidth || false);
  useDisableScrollBody(isMapFullWidth);
  const { scrollY } = useWindowScroll();
  const { isOpened: isSliderOpened, close, open } = useToggle(false);
  const [clickedItem, setClickedItem] = useState<string>();
  const [currentMarker, setCurrentMarker] = useState<Coords | null>(null);
  const [isMarkerLoading, setIsMarkerLoading] = useState(true);

  const onClickPrice = useCallback(
    (id: string | undefined) => {
      if (!id) {
        close();
        return false;
      }

      if (id !== clickedItem && !isSliderOpened) {
        open();
        setClickedItem(id);
      } else {
        close();
      }
    },
    [clickedItem],
  );

  const handleCenterChange = useCallback(() => {
    if (map?.getCenter()?.lat()) {
      router.push({
        pathname: router.pathname,
        query: { ...router.query, lat: map?.getCenter()?.lat()!, lng: map?.getCenter()?.lng()! },
      });
      setCenter({
        lat: map?.getCenter()?.lat()!,
        lng: map?.getCenter()?.lng()!,
      });
    }
  }, [map, router]);

  // eslint-disable-next-line no-undef
  const onLoad = useCallback(
    // eslint-disable-next-line no-undef
    async (map: google.maps.Map) => {
      map.setZoom(zoom);
      setMap(map);
    },
    [],
  );

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.GOOGLE_API_KEY!,
  });

  const calculateRadius = () => {
    const sw = map?.getBounds()?.getSouthWest();
    const ne = map?.getBounds()?.getNorthEast();
    const bounds = map?.getBounds();

    const areaBounds = {
      north: bounds?.getNorthEast().lat(),
      south: bounds?.getSouthWest().lat(),
      east: bounds?.getNorthEast().lng(),
      west: bounds?.getSouthWest().lng(),
    };

    const points = [
      { lat: areaBounds.south!, lng: areaBounds.west! },
      { lat: areaBounds.north!, lng: areaBounds.west! },
    ];
    const halfRadius =
      mapSizeCalculation({ lat: sw?.lat() || 0, lng: sw?.lng() || 0 }, { lat: ne?.lat() || 0, lng: ne?.lng() || 0 }) /
      2;
    const halfSide = mapSizeCalculation(points[0], points[1]) / 2;

    const resultSquare = halfRadius * halfRadius - halfSide * halfSide;

    const result = Math.sqrt(resultSquare);

    if (result !== 0 && result) {
      router.push(
        {
          pathname: router.pathname,
          query: {
            ...router.query,
            radius: result,
          },
        },
        undefined,
        {
          shallow: true,
        },
      );
    }
  };

  const handleZoomChanged = useCallback(() => {
    if (map?.getCenter()?.lat()) {
      setCenter({
        lat: map?.getCenter()?.lat()!,
        lng: map?.getCenter()?.lng()!,
      });
    }

    calculateRadius();

    if (map?.getZoom()) {
      setZoom(map?.getZoom()!);
    }
  }, [map, router]);

  // const handleMapFolding = () => {
  //   const mapPosition = isMapFullWidth ? 'sticky' : 'fixed';

  //   ref!.current!.style.position = mapPosition;
  //   setIsMapFullWidth((prev) => !prev);
  // };

  const isScroll = scrollY > 0;

  const showCurrentLocation = () => {
    useCurrentLocation(setCurrentMarker, setCenter, setIsMarkerLoading);
  };

  return (
    <Root $isFullWidth={isMapFullWidth} $isScroll={isScroll} ref={ref} id="map">
      {isLoaded && (
        <GoogleMap
          zoom={zoom}
          onLoad={onLoad}
          clickableIcons={false}
          onDragEnd={handleCenterChange}
          onZoomChanged={handleZoomChanged}
          mapContainerStyle={mapStyles}
          options={{
            fullscreenControl: false,
            panControl: false,
            mapTypeControl: false,
            disableDefaultUI: true,
            keyboardShortcuts: false,
            zoomControl: false,
          }}
          onClick={close}
          center={{ ...center }}>
          <>
            {markers?.map((mark, index) => (
              <OverlayView
                key={index}
                mapPaneName="overlayMouseTarget"
                position={{ lat: mark?.lat || 0, lng: mark?.lng || 0 }}>
                <Marker
                  apartmentType={mark?.apartmentType!}
                  isFocus={mark.isFocus!}
                  imageUrl={mark?.photo || ''}
                  title={mark?.title}
                  price={handleDivisionOnCategories(String(mark?.cost || ''))}
                  id={mark.id}
                  isMobile={isWidthSm}
                  type={mark.type}
                  slug={mark.slug}
                  onClickPrice={onClickPrice}
                />
              </OverlayView>
            ))}
            {!isMarkerLoading && currentMarker && (
              <OverlayView
                mapPaneName="overlayMouseTarget"
                position={{ lat: currentMarker?.lat || 0, lng: currentMarker.lng || 0 }}>
                <CurrentLocation />
              </OverlayView>
            )}
          </>
        </GoogleMap>
      )}
      {isWidthSm && isSliderOpened && (
        <SliderMapApartments
          markers={markers}
          selectedMarker={clickedItem}
          handleDivisionOnCategories={handleDivisionOnCategories}
        />
      )}
      {!isWidthSm && (
        <MapsButtonsContainer>
          <IconButton type="button" IconComponent={SvgAdd} onClick={() => setZoom(zoom + 1)} />
          <IconButton type="button" IconComponent={SvgMinus} onClick={() => setZoom(zoom - 1)} />
          <IconButton
            type="button"
            color={currentMarker ? colors.greyScale[50] : colors.purpleScale[100]}
            IconComponent={Coordinate}
            onClick={showCurrentLocation}
          />
        </MapsButtonsContainer>
      )}
    </Root>
  );
};

export default Map;

const mapStyles = { maxWidth: '100%', height: '100%', width: '100%' };

const Root = styled.div<{ $isScroll: boolean; $isFullWidth?: boolean }>`
  --headerHeight: 179px;
  --listWidth: 624px;

  && {
    position: sticky;
    top: var(--headerHeight);
    right: 0;
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 1;
    background: ${({ theme: { colors } }) => colors.greyScale[50]};
    width: ${({ $isFullWidth }) => ($isFullWidth ? '100%' : 'calc(100% - (var(--listWidth) + 16px))')};
    height: calc(100vh - var(--headerHeight));
    height: calc(var(--100vh) - var(--headerHeight));

    @media (max-width: ${BreakpointsEnum.lgm}px) {
      --headerHeight: 207px;
      --listWidth: 324px;
    }

    @media (max-width: ${BreakpointsEnum.sm}px) {
      width: 100%;
    }

    @media (max-width: ${BreakpointsEnum.s}px) {
      --headerHeight: 187px;
    }
  }
`;

const MapsButtonsContainer = styled.div`
  position: absolute;
  right: 24px;
  gap: 16px;
  display: flex;
  flex-direction: column;
  top: 24px;
`;
