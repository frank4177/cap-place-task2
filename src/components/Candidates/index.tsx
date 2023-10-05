import { useState } from "react";
import { pad2, play } from "../icons";
import { data } from "../../utils/constants";

interface props{
  filteredData?: UserData[]
}


function Candidates({filteredData}: props) {
  const [selectAll, setSelectAll] = useState(false);
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  console.log(filteredData)

  const toggleSelectAll = () => {
    setSelectAll(!selectAll);
    const selectedIds = selectAll ? [] : data.map((item) => item.id);
    setSelectedRows(selectedIds);
  };

  const toggleRow = (id: number) => {
    const isSelected = selectedRows.includes(id);
    let newSelectedRows: number[];

    if (isSelected) {
      newSelectedRows = selectedRows.filter((rowId) => rowId !== id);
    } else {
      newSelectedRows = [...selectedRows, id];
    }

    setSelectedRows(newSelectedRows);
  };

  return (
    <>
      <div className="p-4">
        {/* head */}
        <div className="flex flex-row items-center justify-between h-[50px]">
          <div className="flex flex-row gap-5 items-center ">
            <input
              type="checkbox"
              checked={selectAll}
              onChange={toggleSelectAll}
              className="h-5 w-5"
            />
            <p className="font-bold text-[17px] text-[#1D4ED8]">
              27 Candidates
            </p>
          </div>

          <div className="flex flex-row items-center gap-5">
            <div className="flex flex-row items-center gap-3">
              <p className="text-[#1D4ED8] font-[500] text-[17px]">Qualified</p>
            </div>

            <div className="flex flex-row items-center gap-3">
              <p>Task</p>
              <p className="w-7 h-6 flex flex-row justify-center items-center bg-cPurple rounded-[50%]">
                23
              </p>
            </div>

            <div className="flex flex-row items-center gap-3">
              <p>Disqualified</p>
              <p className="w-7 h-6 flex flex-row justify-center items-center bg-cPurple rounded-[50%]">
                23
              </p>
            </div>
          </div>
        </div>

        <div className="">
          {filteredData?.map((item: UserData) => (
            <div
              key={item.id}
              className="flex flex-row items-center gap-5 border-t-[2px] min-h-[200px]"
            >
              {/* CHECKBOX */}

              <input
                type="checkbox"
                checked={selectedRows?.includes(item.id)}
                onChange={() => toggleRow(item.id)}
                className="h-5 w-5"
              />

              {/*  AVATAR */}
              <div className="bg-cPurple h-[100px] w-[100px] flex flex-row justify-center items-center rounded-[50%]">
                <p className="font-bold text-[#D2E2FF] text-[30px]">AS</p>
              </div>

              {/* DETAILS */}
              <div className="flex flex-row justify-between">
                <div className="flex flex-col gap-3">
                  <p className="font-bold text-[17px]">{item.name}</p>
                  <p className="text-[14px] font-bold">{item.location}</p>
                  <p className="text-[14px]">{item.school}</p>

                  <div className="flex flex-row gap-3 items-center">
                    {item.hashTag?.map((tg) => (
                      <div
                        className="flex flex-row gap-3 items-center"
                        key={tg.id}
                      >
                        <span className="text-[#1D4ED8] text-[13px]">
                          {tg.tag}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-row gap-3 items-center">
                    {item.interest?.map((int) => (
                      <span className="px-2  bg-cGreenOpacity" key={int.id}>
                        <p className="font-bold text-cGreenSolid text-[13px]">
                          {int.like}
                        </p>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              {/* PLAYS AND PROGRAMS */}
              {item.plays !== "" && item.programs !== ""? <div className="ml-auto self-start mt-6  flex flex-row items-center gap-3">
                {/* PLAYS */}
                <div className="flex flex-row bg-[#D1DDFF]  items-center justify-between gap-1 px-3 py-1 rounded-[10px]">
                  <img src={play} alt="play" className="w-3 h-3" />
                  <span className="text-[13px] text-[#1D4ED8] font-[400]">
                    {item.plays}
                  </span>
                </div>
                {/* PROGRAMS */}
                <div className="flex flex-row bg-[#D1DDFF]  items-center justify-between gap-1 px-2 py-1 rounded-[10px]">
                  <img src={pad2} alt="play" className="w-5 h-5" />
                  <span className="text-[13px] text-[#1D4ED8] font-[400]">
                    {item.programs}
                  </span>
                </div>
              </div> : null}
            </div>
          ))}
          {filteredData?.length == 0 ?<div className="text-center text-[19px]">No results found</div>: null}
        </div>
      </div>
    </>
  );
}

export default Candidates;
