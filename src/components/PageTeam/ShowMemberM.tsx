import React from "react";
import { teamMember as team } from "@/constants/menuList";
type teamMember = (typeof team)[number]["id"];

interface Props {
  selected: teamMember;
}

export default function ShowMemberM({ selected }: Props) {
  return (
    <div className="mb-[100px] mt-[52px] flex w-full flex-col items-center justify-center gap-[25px] lg:hidden">
      {/* <div
        className={`flex h-[270px] w-[270px] items-center justify-center border-4 border-[${
          team.find((member) => member.id === selected)?.color
        }] rounded-[50%]`}
      >
        <div
          className={`flex h-[230px] w-[230px] bg-[${
            team.find((member) => member.id === selected)?.color
          }] items-center justify-center rounded-[50%] border-4 border-white`}
        >
          <a className="pt-8 align-bottom text-[150px] leading-none">
            {team.find((member) => member.id === selected)?.name.slice(0, 2)}
          </a>
        </div>
      </div>
      <div
        className={`flex w-full items-center justify-center border-4 text-lg font-bold border-[${
          team.find((member) => member.id === selected)?.color
        }] rounded-[65px] py-3`}
      >
        {team.find((member) => member.id === selected)?.name.slice(3)}
      </div> */}
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
