import { useState } from "react";
import { cards } from "../data/cards";
import CartContainer from "./CartContainer";

export default function MainContent() {
  const [content, setContent] = useState(cards);
  return (
    <div className=" ml-[65px] mt-[64px] inline-flex flex-col items-start gap-4 ">
      {content.map((c, index) => (
        <CartContainer key={index} title={c.title} children={c.children} />
      ))}
      <div className="mt-[39.3px] ml-[485px] inline-flex px-5 py-3 justify-center items-center gap-3 rounded-[10px] border-[1px] border-[solid] border-[#99999a] ">
        <span className="text-[#535357] text-[16px] font-normal leading-[24px] ">
          Цааш үзэх
        </span>
      </div>
    </div>
  );
}
