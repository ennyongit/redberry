import { Region } from "../interfaces/geo";

interface FilterDropDownProps {
  active: string | null;
  regions?: Region[];
}

{/**active - მომხმარებლის მიერ არჩეული dropDownItem */}
const FilterDropDown = ({active, regions }: FilterDropDownProps) => {
  return (
    <div className="absolute top-full shadow-lg mt-1 w-full">
      {active === "რეგიონი" && regions ? (
        <ul className="border border-gray-200  rounded-lg">
          {regions.map((region) => (
            <li
              key={region.id}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {region.name}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default FilterDropDown;
