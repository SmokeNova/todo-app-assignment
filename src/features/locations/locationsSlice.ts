import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Location, TLocationLocal } from "../../vite-env";
import { getLocationCoords, getPreviousLocations } from "../../utils";

const url = "https://us1.locationiq.com/v1/reverse";

export const getLocation = createAsyncThunk("locations/getCurrentLocation", async (isFirst: boolean, thunkAPI) => {
    const coords: { lat: number; lon: number } = {lat: 0, lon: 0};
    await new Promise(resolve => getLocationCoords(coords, resolve as () => void));
    
    try {
      if (coords.lat === 0 && coords.lon === 0) throw new Error();
      const res = await fetch(`${url}?key=${import.meta.env.VITE_API_KEY}&lat=${coords.lat}&lon=${coords.lon}&format=json`);
      return {data: (await res.json()) as Location, isFirst};
    } catch (error) {
      return thunkAPI.rejectWithValue("Something went wrong");
    }
  }
);

type InitialStateType = {
  previousLocations: TLocationLocal[];
  currentLocation: TLocationLocal | {};
  isLoading: boolean;
  hasError: boolean;
};

const initialState: InitialStateType = {
  previousLocations: getPreviousLocations(),
  currentLocation: {},
  isLoading: true,
  hasError: false
};

export const locationsSlice = createSlice({
  name: "locations",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getLocation.pending, (state) => {
        state.isLoading = true
    }),
    builder.addCase(getLocation.fulfilled, (state, {payload}) => {
      const {data, isFirst} = payload
      const currentLocation = {
        county: data.address.county,
        state: data.address.state,
        country: data.address.country,
        coords: {lat: parseFloat(parseFloat(data.lat).toFixed(3)), lon: parseFloat(parseFloat(data.lon).toFixed(3))}
      }
      state.currentLocation = currentLocation
      if (isFirst) {
        let newStored = [...state.previousLocations];
        newStored.reverse();
        newStored.push(currentLocation)
        newStored = newStored.length > 6 ? newStored.slice(1) : newStored
        localStorage.setItem('locations', JSON.stringify(newStored))
      }
      state.isLoading = false
    })
    builder.addCase(getLocation.rejected, (state) => {
      state.hasError = true;
    })
  }
});

export default locationsSlice.reducer
