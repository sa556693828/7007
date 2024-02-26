import React from "react";
import { teamMember as team } from "@/constants/menuList";
type teamMember = (typeof team)[number]["id"];

interface Props {
  selected: teamMember;
  isVisible: boolean;
  setSelect: React.Dispatch<React.SetStateAction<teamMember>>;
}

export default function Selector({ selected, setSelect, isVisible }: Props) {
  return (
    <div
      className={`flex flex-col gap-[15px] transition-all duration-[800ms] lg:max-w-2xl lg:flex-row lg:flex-wrap ${isVisible ? "opacity-100" : "translate-x-10 opacity-0"}`}
    >
      {team.map((member) => (
        <button
          className={`w-fit rounded-[30px] border-2 px-7 py-2 border-[${member.color}] ${
            selected === member.id
              ? `bg-[${team.find((member) => member.id === selected)?.color}] text-black`
              : `bg-black text-[${member.color}]`
          } transition-all duration-700 hover:bg-[${member.color}] hover:text-black hover:border-[${member.color}]`}
          key={member.id}
          onClick={() => setSelect(member.id)}
        >
          <a className="text-[20px] font-bold">{member.name}</a>
        </button>
      ))}
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
// border-[#E02B31]
// hover:border-[#E02B31]
// hover:bg-[#E02B31]
// bg-[#E02B31]
// text-[#E02B31]
