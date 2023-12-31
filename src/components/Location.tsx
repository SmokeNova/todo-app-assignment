import { PinIcon } from "../icons";

export type LocationProps = {
    county: string;
    state: string;
    country: string;
    coords: {lat: number, lon: number}
}

export default function Location({county, state, country, coords}: LocationProps) {
  return (
    <div className="flex gap-2 items-center">
      <div>
        <PinIcon />
      </div>

      <div>
        <p className={`font-[500] text-lg tracking-normal`}>{county}, {state}, {country}</p>
        <p className="text-slate-400 text-sm font-[500]">Latitude:-{coords.lat}, Longitude:-{coords.lon}</p>
      </div>
    </div>
  );
}
