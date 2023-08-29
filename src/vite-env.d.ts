/// <reference types="vite/client" />

export type Location = {
    place_id: string;
    licence: string;
    osm_type: string;
    osm_id: string;
    lat: string;
    lon: string;
    display_name: string;
    address: AddressT
    boundingbox: [string, string, string, string];
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
  
