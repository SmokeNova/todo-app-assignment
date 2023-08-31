import { useEffect } from "react";
import Location from "./Location";
import { RootState, useAppDispatch } from "../store";
import { useSelector } from "react-redux";
import { getLocation } from "../features/locations/locationsSlice";
import { TLocationLocal } from "../vite-env";


export default function LocationPage({isFirst, changeIsFirst}: {isFirst: boolean, changeIsFirst: () => void}) {
  const dispatch = useAppDispatch();
  const {currentLocation, hasError, isLoading, previousLocations} = useSelector((store: RootState) => store.locations)

  useEffect(() => {
    dispatch(getLocation(isFirst))
    isFirst && changeIsFirst();
  }, [])

  console.log(currentLocation)

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
            {!isLoading && !hasError ? (
              <Location {...(currentLocation as TLocationLocal)} />
            ) : (
              "Fetching your location. If this takes too long, enable allow access to your location."
            )}
          </div>
        </div>

        <div>
          <h2 className="text-lg md:text-xl font-[700] tracking-wide mb-4">
            Previous Locations
          </h2>
          <div className="flex flex-col gap-4">
            {previousLocations.map((location, idx) => (
              <Location key={idx} {...location} />

            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
