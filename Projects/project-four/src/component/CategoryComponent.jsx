import { useState } from "react";
import SubCategoryComponent from "./SubCategoryComponent";

export default function CategoryComponent({ title, children }) {
  const [categories, setCategories] = useState(children);
  const [showChildren, setShowChildren] = useState(false);
  
  
  return (
    <div className="flex flex-col justify-center items-start gap-3">
      <div
        className="flex w-[250px] justify-between items-center"
        onClick={() => {
          setShowChildren(!showChildren);
        }}
      >
        <span className="text-[14px] font-semibold">{title}</span>
        {showChildren ? <img src="Frame.svg" alt="icon" /> : <img src="Frame (1).svg" alt="icon" />}
      </div>
      <div className="flex flex-col justify-center items-start gap-2">
        {showChildren &&
          categories.map((c, index) => {
            return (
              <SubCategoryComponent key={index} title={c.title} link={c.link} />
            );
          })}
      </div>
    </div>
  );
}
