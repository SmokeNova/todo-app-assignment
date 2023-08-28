import { useState, useEffect } from "react";
import { useGetLocationQuery } from "../features/api/api";
import Location from "./Location";

export default function LocationPage() {
  const [coords, setCoords] = useState({ lat: 0, lon: 0 });
  const { data, isError, isLoading } = useGetLocationQuery(coords);
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCoords({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);

  console.log(data);
  console.log(coords);
  localStorage.setItem("coords", "{lat: 0, lon: 0}");

  if (isError) return <h1>Something went wrong... Please reload the page.</h1>;

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <section className="grow max-sm:px-3 md:pt-14 md:p-7 max-h-[100vh] !overflow-y-scroll">
      <div className="inline-flex gap-8 flex-col">
        <button
          type="button"
          className="text-xl font-[700] tracking-normal text-start"
          onClick={() => {}}
        >
          + Check In
        </button>
        <div>
          <h2 className="text-lg md:text-xl font-[700] tracking-wide mb-4">
            Current Location
          </h2>
          <div className="flex flex-col gap-4">
            {data?.address ? <Location coords={coords} {...data.address}  /> : ''}
          </div>
        </div>
      </div>
    </section>
  );
}
