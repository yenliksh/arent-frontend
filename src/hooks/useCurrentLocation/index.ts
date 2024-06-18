import { Coords } from 'types/advert';

const useCurrentLocation = (
  setCurrentMarker: (center: Coords) => void,
  setCenter: (center: Coords) => void,
  setIsMarkerLoading: (loaded: boolean) => void,
) => {
  const { geolocation } = navigator;

  geolocation.getCurrentPosition(
    (position) => {
      setIsMarkerLoading(false);
      if (!position.coords) return;
      setCurrentMarker({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
      setCenter({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    },
    (error) => {
      if (error.code === error.PERMISSION_DENIED) setIsMarkerLoading(false);
    },
  );
};

export default useCurrentLocation;
