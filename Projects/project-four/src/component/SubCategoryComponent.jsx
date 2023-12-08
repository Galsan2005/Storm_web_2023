import { Link } from "react-router-dom";

export default function SubCategoryComponent({ title, link }) {
  return (
    <div className="flex w-[250px] py-[8px] px-[16px] items-start rounded-[4px] bg-[#fff]  ">
      <Link to={link} className="text-[14px] font-normal leading-[21px]">
        {title}
      </Link>
    </div>
  );
}