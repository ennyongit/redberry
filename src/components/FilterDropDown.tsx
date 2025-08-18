import { useEffect, useState } from "react";
import { Region } from "../interfaces/geo";

interface FilterDropDownProps {
  active: string | null;
  regions?: Region[];
}

{
  /**active - მომხმარებლის მიერ არჩეული dropDownItem */
}
const FilterDropDown = ({ active, regions }: FilterDropDownProps) => {
  const [selectedRegions, setSelectedRegions] = useState<number[]>([]);

  useEffect(() => {
    console.log("არჩეული რეგიონები:", selectedRegions);
  }, [selectedRegions]); // ← ეს ნიშნავს: როცა selectedRegions შეიცვლება, მაშინ გაეშვი


  {/** selectRegions - მასივი სადაც ინახება მონიშნული რეგიონების id */}
  const handleCheckboxChange = (regionId: number, checked: boolean) => {
    setSelectedRegions((prev) => {
      if (prev.includes(regionId)) {
        return prev.filter((id) => id !== regionId);
      }
      return [...prev, regionId];
    });
  };

  const handleChooseRegion = () => {
    
  }


  return (
    <div className="absolute top-full shadow-lg mt-1 w-full">
      {active === "რეგიონი" && regions ? (
        <div className="bg-white">
          <ul className="border border-gray-200  rounded-lg">
            {regions.map((region) => (
              <li
                key={region.id}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex align-center gap-2"
              >
                <input
                  onChange={(e) =>
                    handleCheckboxChange(region.id, e.target.checked)
                  }
                  className="w-5"
                  type="checkbox"
                />
                {region.name}
              </li>
            ))}
          </ul>
          <button onClick={handleChooseRegion} className="border border-gray-400 p-2 m-2 rounded-lg cursor-pointer">
            არჩევა
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default FilterDropDown;
