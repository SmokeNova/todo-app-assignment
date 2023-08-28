import { useState, useEffect } from "react";
import { useGetLocationQuery } from "../features/api/api";
import Location, {LocationProps as LocationT} from "./Location";

export default function LocationPage() {
  const [coords, setCoords] = useState({ lat: 0, lon: 0 });
  const { data, isError, isLoading } = useGetLocationQuery(coords);
  
  const previousLocations: LocationT[] = (() => {
    const previous: LocationT[] = JSON.parse(localStorage.getItem('locations') ?? '[]')
    return previous.reverse()
  })();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCoords({
          lat: parseFloat(position.coords.latitude.toFixed(3)),
          lon: parseFloat(position.coords.longitude.toFixed(3)),
        });
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);

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
            {data?.address.country ? (
              <Location coords={coords} {...data.address} />
            ) : (
              "Fetching your location"
            )}
          </div>
        </div>

        <div>
          <h2 className="text-lg md:text-xl font-[700] tracking-wide mb-4">Previous Locations</h2>
          <div className="flex flex-col gap-2">
            {previousLocations.map((location, idx) => (
              <Location {...location} key={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
