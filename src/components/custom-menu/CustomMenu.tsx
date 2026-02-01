import { IoMdArrowDropdown } from "react-icons/io";
import CustomButton from "../custom-button/CustomButton";
import type { CustomMenuProps } from "./types/customMenuTypes";

const CustomMenu = ({
  title,
  menuOptions,
  onMenuClick,
  type,
}: CustomMenuProps) => {
  return (
    <span className="relative group">
      <CustomButton
        name={title}
        className=" rounded-none text-white font-medium text-sm bg-[#171819]! mt-2"
        endIcon={
          menuOptions!?.length > 0 ? (
            <IoMdArrowDropdown fontSize={"20px"} color="white" />
          ) : (
            <></>
          )
        }
      />

      {menuOptions!?.length > 0 && (
        <div className="absolute z-10 right-full bottom-0 hidden group-hover:block">
          <ul
            aria-labelledby="dropdownDefaultButton"
            className="absolute z-10 min-w-40 overflow-auto rounded-lg border text-white! capitalize bg-secondary p-1.5 shadow-lg  focus:outline-none text-left"
          >
            {menuOptions?.map((item) => (
              <li
                role="menuitem"
                key={item}
                className={`${type === item ? "bg-slate-100 text-secondary" : ""} cursor-pointerflex w-full text-sm items-center rounded-md p-2 transition-all hover:bg-gray-400 focus:bg-gray-400 active:bg-gray-400 hover:text-secondary`}
                onClick={() => {
                  if (onMenuClick) onMenuClick(item, title);
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </span>
  );
};

export default CustomMenu;
