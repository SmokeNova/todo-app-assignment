import { useState, useEffect } from "react";
import { useGetLocationQuery } from "../features/api/api";
import Location from "./Location";
import { getLocation } from "../utils";

export default function LocationPage() {
  const [coords, setCoords] = useState({ lat: 0, lon: 0 });
  const { data, isError, isLoading } = useGetLocationQuery(coords);

  function setCoordinates(newCoords: { lat: number; lon: number }) {
    setCoords(newCoords);
  }

  useEffect(() => {
    getLocation(setCoordinates);
  }, []);

  if (isError) return <h1>Something went wrong... Please reload the page.</h1>;
  if (isLoading) return <h1>Loading...</h1>;

  return (
    <section className="grow max-sm:px-3 md:pt-14 md:p-7 max-h-[100vh] !overflow-y-scroll">
      <div className="inline-flex gap-8 flex-col">
        <button
          type="button"
          className="text-xl font-[700] tracking-normal text-start"
          onClick={() => getLocation(setCoordinates)}
        >
          + Check In
        </button>

        <div>
          <h2 className="text-lg md:text-xl font-[700] tracking-wide mb-4">
            Current Location
          </h2>
          <div className="flex flex-col gap-4">
            {data?.address.country ? (
              <Location coords={coords} {...data.address} />
            ) : (
              "Fetching your location. If this takes too long, enable allow access to your location."
            )}
          </div>
        </div>

        <div>
          <h2 className="text-lg md:text-xl font-[700] tracking-wide mb-4">
            Previous Locations
          </h2>
          <div className="flex flex-col gap-4"></div>
        </div>
      </div>
    </section>
  );
}
