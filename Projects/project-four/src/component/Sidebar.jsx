import { useState } from "react";
import { menu } from "../data/menu";
import CategoryComponent from "./CategoryComponent";

const Sidebar = () => {
  const [categories, setCategories] = useState(menu);

  return (
    <div className="w-[348px] inline-block  py-[40px] px[49px] flex-col items-start gap-[10px] shrink-0 bg-[#fff] px-[49px] ">
      <div className="flex flex-col items-start gap-[45px]  ">
        <div className="w-[91.617px] h-[46px] flex">
          <img src="Group (1).svg" alt="zurag" />
          <a href="/" className="w-[70px] h-[46px] shrink-0 ">
            <span className="text-[#F77268] text-[30px] font-normal">
              i
              <span className="text-[#FC9419] text-[30px] font-normal ">
                blog
              </span>
            </span>
          </a>
        </div>
        <div className="flex w-[250px]  flex-col items-start gap-8" >
          {categories.map((m, index) => (
            <CategoryComponent
              key={index}
              title={m.title}
              children={m.children}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
