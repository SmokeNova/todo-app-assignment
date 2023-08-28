/// <reference types="vite/client" />

export type Location = {
    place_id: string;
    licence: string;
    osm_type: string;
    osm_id: string;
    lat: string;
    lon: string;
    display_name: string;
    address: {
      residential: string;
      subdistrict: string;
      county: string;
      state: string;
      postcode: string;
      country: string;
      country_code: string;
    };
    boundingbox: [string, string, string, string];
  };
  
