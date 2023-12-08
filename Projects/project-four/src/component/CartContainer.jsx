import Card from "./Card";

export default function CartContainer({ title, children }) {
  return (
    <section className="flex flex-col relative items-start gap-4">
      <div className="flex w-[982px] items-start gap-[18.204px] ">
        <div className="flex w-[982px] justify-between items-center shrink-0 ">
          <div className="flex px-[18.204px] py-10.922px justify-center items-center gap-[9.102px]">
            <span className="text-[#151411] text-[18px] font-bold leading-[23.4px] uppercase ">
              {title}
            </span>
          </div>
          <div className="flex w-[116.504px] h-[47.33px] px-[13.653px] py-0 justify-end items-center gap-[10.922px] shrink-0 rounded-[10.922px] ">
            <span className="text-[#546371] text-center text-[16px] font-medium leading-[28.8px]">
              Бүгд
            </span>
            <img src="u_angle-right-b.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="flex pb-0 justify-end items-center">
        <div className="flex items-start gap-[22px]">
          {children.map((c, index) => (
            <Card
              key={index}
              imgSrc={c.postImageUrl}
              title={c.title}
              profileImgSrc={c.profileImage}
              date={c.cardDate}
              likeCount={c.likes}
            />
          ))}

          <div className="flex w-[53px] h-[53px] justify-end items-center gap-4 absolute right-0 bottom-[100px] ">
            <div className="flex w-[52px] h-[52px] p-[10px] justify-center items-center gap-[10px] shrink-0 rounded-[50px] bg-[#FFF] shadow-xl">
              <img
                className="flex w-[24px] h-[24px] justify-center items-center shrink-0 "
                src="right-arrow.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
