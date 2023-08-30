/// <reference types="vite/client" />

export type Location = {
  place_id: string;
  licence: string;
  osm_type: string;
  osm_id: string;
  lat: string;
  lon: string;
  display_name: string;
  address: AddressT;
  boundingbox: [string, string, string, string];
};

type AddressT = {
  residential: string,
  subdistrict: string,
  county: string,
  state: string,
  postcode: string,
  country: string,
  country_code: string,
  monitoring_station?: string,
};


export type TLocationLocal = {
  county: string;
  state: string;
  country: string;
  coords: { lat: number; lon: number };
};

export type Todo = {
  id: string;
  title: string;
  description?: string;
  dueDate: string;
  isCompleted: boolean;
};

export type TodoInput = {
  title: string;
  description?: string;
  dueDate: string;
};
