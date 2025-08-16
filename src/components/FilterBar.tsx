import { IoIosAdd, IoIosArrowDown } from "react-icons/io";


const FilterBar = () => {
  return (
    <div className="flex justify-between px-5 py-7 flex-wrap">
    <div className="flex px-2 py-2 border rounded-lg border-gray-300">
      <ul className="flex gap-5">
        <li className="cursor-pointer">
          <button className="flex items-center gap-1">
            <label>რეგიონი</label>
            <IoIosArrowDown className="relative top-[2px]"/>
          </button>
        </li>
        <li className="cursor-pointer">
          <button className="flex items-center gap-1">
            <label>საფასო კატეგორია</label>
            <IoIosArrowDown className="relative top-[2px]" />
          </button>
        </li>
        <li className="cursor-pointer">
          <button className="flex items-center gap-1">
            <label>ფართობი</label>
            <IoIosArrowDown className="relative top-[2px]" />
          </button>
        </li>
        <li className="cursor-pointer">
          <button className="flex items-center gap-1">
            <label>საძინებლების რაოდენობა</label>
            <IoIosArrowDown className="relative top-[2px]" />
          </button>
        </li>
      </ul>
    </div>
    <div className="flex gap-4">
        <button className="flex items-center bg-[#F93B1D] text-white px-4 py-2 rounded-lg cursor-pointer">
             <IoIosAdd className="text-[20px] relative top-[2px]"/>
             <span>ლისტინგის დამატება</span>   
            </button>
        <button className="flex items-center border border-[#F93B1D] px-4 py-2 rounded-lg text-[#F93B1D] cursor-pointer">
             <IoIosAdd className="text-[20px]"/>
             <span>აგენტის დამატება</span>
        </button>
    </div>
    </div>
  );
}

export default FilterBar;
