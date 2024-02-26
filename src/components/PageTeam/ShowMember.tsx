import React from "react";

import { teamMember as team } from "@/constants/menuList";
type teamMember = (typeof team)[number]["id"];

interface Props {
  selected: teamMember;
  isVisible: boolean;
}
export default function ShowMember({ selected, isVisible }: Props) {
  return (
    <div
      className={`flex w-full flex-col text-center transition-all duration-[800ms] ${selected === "" ? "gap-1" : "gap-16"}`}
    >
      <a
        className={`leading-none transition-all duration-[800ms] ${isVisible ? "opacity-100" : "-translate-x-10 opacity-0"} ${selected === "" ? "text-[160px]" : `text-[60px] text-[${team.find((member) => member.id === selected)?.color}]`}`}
      >
        7
      </a>
      <div className="flex w-full flex-col items-center justify-center gap-[25px]">
        <div
          className={`flex items-center justify-center rounded-[50%] transition-all duration-[800ms] ${isVisible ? "opacity-100" : "translate-x-10 opacity-0"}
      ${selected === "" ? "h-[121px] w-[121px] border-[8px] border-black" : `h-[270px] w-[270px] border-4 border-[${team.find((member) => member.id === selected)?.color}]`}`}
        >
          <div
            className={`flex items-center justify-center rounded-[50%] transition-all duration-[800ms]
        ${selected === "" ? "h-[10px] w-[10px]" : `h-[230px] w-[230px] border-4 border-white bg-[${team.find((member) => member.id === selected)?.color}]`}`}
          >
            <a
              className={`pt-8 align-bottom leading-none transition-all delay-150 duration-[800ms] ${selected === "" ? "text-[60px] opacity-0" : "text-[150px] opacity-100"}`}
            >
              {team.find((member) => member.id === selected)?.name.slice(0, 2)}
            </a>
          </div>
        </div>
        <div
          className={`flex w-full items-center justify-center py-3 text-lg font-bold transition-all duration-[800ms] ${isVisible ? "opacity-100" : "-translate-x-10 opacity-0"}
      ${selected === "" ? "h-[121px] w-[121px] rounded-[50%] border-[8px] border-black" : `h-[60px] w-[240px] rounded-[65px] border-4 border-[${team.find((member) => member.id === selected)?.color}]`}`}
        >
          {team.find((member) => member.id === selected)?.name.slice(3)}
        </div>
      </div>
      <a
        className={`pt-5 leading-none transition-all duration-[800ms] ${isVisible ? "opacity-100" : "translate-x-10 opacity-0"} ${selected === "" ? "text-[160px]" : `text-[60px] text-[${team.find((member) => member.id === selected)?.color}]`}`}
      >
        7
      </a>
    </div>
  );
}
// border-[#FF974C]
// hover:border-[#FF974C]
// hover:bg-[#FF974C]
// bg-[#FF974C]
// text-[#FF974C]
// border-[#FFF]
// hover:border-[#FFF]
// hover:bg-[#FFF]
// bg-[#FFF]
// text-[#FFF]
// border-[#8550F6]
// hover:border-[#8550F6]
// hover:bg-[#8550F6]
// bg-[#8550F6]
// text-[#8550F6]
// border-[#2B8BFC]
// hover:border-[#2B8BFC]
// hover:bg-[#2B8BFC]
// bg-[#2B8BFC]
// text-[#2B8BFC]
// border-[#F97ACE]
// hover:border-[#F97ACE]
// hover:bg-[#F97ACE]
// bg-[#F97ACE]
// text-[#F97ACE]
// border-[#0FE5F2]
// hover:border-[#0FE5F2]
// hover:bg-[#0FE5F2]
// bg-[#0FE5F2]
// text-[#0FE5F2]
// border-[#83F04F]
// hover:border-[#83F04F]
// hover:bg-[#83F04F]
// bg-[#83F04F]
// text-[#83F04F]
