import { IoIosAdd, IoIosArrowDown } from "react-icons/io";
import { useEffect, useState } from "react";
import { getRegions } from "../services/geoApi";
import { Region } from "../interfaces/geo";
import FilterDropDown from "./FilterDropDown";

const FilterBar = () => {
  // regions API 
  const [regions, setRegions] = useState<Region[]>();
  const [dropDownItem, setDropDownItem] = useState<string | null>(null);

  useEffect(() => {

    getRegions()
      .then((data) => {
        console.log("API Response:", data);
        setRegions(data);
      })
      .catch((err) => console.error(err));

  }, []);

  const dropDownMenu = [
    "რეგიონი",
    "საფასო კატეგორია",
    "ფართობი",
    "საძინებლების რაოდენობა",
  ];

  const handleDropDownBtn = (item: string) => {
    setDropDownItem((dropDownItem) => (dropDownItem === item ? null : item));

    console.log(item);
  };

  return (
    <>
      <div className="flex justify-between px-5 py-7 flex-wrap">
        <div className="relative flex px-2 py-2 border rounded-lg border-gray-300">

          {/**dropdwon navigation */}
          <ul className="flex gap-5">
            {dropDownMenu.map((item, index) => {
              return (
                <li key={index}>
                  <button
                    className="cursor-pointer flex items-center gap-1"
                    onClick={() => handleDropDownBtn(item)}
                  >
                    <span>{item}</span>
                    <IoIosArrowDown className="translate-y-[2px]" />
                  </button>
                </li>
              );
            })}

          </ul>
          <FilterDropDown active={dropDownItem} regions={regions} />
        </div>
        <div className="flex gap-4">
          <button className="flex items-center bg-[#F93B1D] text-white px-4 py-2 rounded-lg cursor-pointer">
            <IoIosAdd className="text-[20px] translate-y-[2px]" />
            <span>ლისტინგის დამატება</span>
          </button>
          <button className="flex items-center border border-[#F93B1D] px-4 py-2 rounded-lg text-[#F93B1D] cursor-pointer">
            <IoIosAdd className="text-[20px] translate-y-[2px]" />
            <span>აგენტის დამატება</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default FilterBar;