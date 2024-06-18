import httpClient from './http';
import systemHttpClient from './systemHttp';

class GoogleMaps {
  getPlaces = async (address: string): Promise<{ label: string; value: string }[]> => {
    try {
      const places = await httpClient.get(`google/places?address=${address}`);
      return places.data.map((place: { description: string; placeId: string }) => {
        return {
          label: place.description,
          value: place.placeId,
        };
      });
    } catch (e) {
      console.log(e, 'google-map-error');
      return [];
    }
  };

  getPlacesDetails = async (placeId: string) => {
    try {
      const { data } = await httpClient.get(`google/placeDetails?placeId=${placeId}`);
      return data;
    } catch (e) {
      console.log(e, 'google-map-error');
    }
  };

  getPlacesBySystem = async (address: string): Promise<{ label: string; value: string }[]> => {
    try {
      const places = await systemHttpClient.get(`google/places?address=${address}`);
      return places.data.map((place: { description: string; placeId: string }) => {
        return {
          label: place.description,
          value: place.placeId,
        };
      });
    } catch (e) {
      console.log(e, 'google-map-error');
      return [];
    }
  };

  getPlacesDetailsBySystem = async (placeId: string) => {
    try {
      const { data } = await systemHttpClient.get(`google/placeDetails?placeId=${placeId}`);
      return data;
    } catch (e) {
      console.log(e, 'google-map-error');
    }
  };
}

export default new GoogleMaps();
