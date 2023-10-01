import { useState } from "react";

function Candidates() {
  const [selectAll, setSelectAll] = useState(false);
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  const data: UserData[] = [
    {
      id: 1,
      name: "Aaliyah Sanderson",
      location: "Riyadh, Saudi Arabia",
      school: "Bachelor - Cambridge University (2023 - 2023)",
      hashTag: [
        { tag: "#top_candidate", id: "1" },
        { tag: "#topcandidate", id: "2" },
      ],
      interest: [
        { like: "Newyork", id: "2" },
        { like: "Marketing", id: "4" },
      ],
    },
    {
      id: 2,
      name: "Joe Jhon",
      location: "Riyadh, Saudi Arabia",
      school: "Bachelor - Cambridge University (2023 - 2023)",
      hashTag: [
        { tag: "#top_candidate", id: "1" },
        { tag: "#topcandidate", id: "2" },
      ],
      interest: [
        { like: "Newyork", id: "2" },
        { like: "Marketing", id: "4" },
      ],
    },
    {
        id: 3,
        name: "Thomas Matt",
        location: "Riyadh, Saudi Arabia",
        school: "Bachelor - Cambridge University (2023 - 2023)",
        hashTag: [
          { tag: "#top_candidate", id: "1" },
          { tag: "#topcandidate", id: "2" },
        ],
        interest: [
          { like: "Newyork", id: "2" },
          { like: "Marketing", id: "4" },
        ],
      },
      {
        id: 4,
        name: "Kamilia Smith",
        location: "Riyadh, Saudi Arabia",
        school: "Bachelor - Cambridge University (2023 - 2023)",
        hashTag: [
          { tag: "#top_candidate", id: "1" },
          { tag: "#topcandidate", id: "2" },
        ],
        interest: [
          { like: "Newyork", id: "2" },
          { like: "Marketing", id: "4" },
        ],
      },
  ];

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
          {data.map((item) => (
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
              <div className="flex flex-col gap-3">
                <p className="font-bold text-[20px]">{item.name}</p>
                <p className="text-[15px] font-bold">{item.location}</p>
                <p className="text-[15px]">{item.school}</p>

                <div className="flex flex-row gap-3 items-center">
                  {item.hashTag?.map((tg) => (
                    <div
                      className="flex flex-row gap-3 items-center"
                      key={tg.id}
                    >
                      <span className="text-[#1D4ED8]">{tg.tag}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-row gap-3 items-center">
                  {item.interest?.map((int) => (
                    <span className="px-2  bg-cGreenOpacity" key={int.id}>
                      <p className="font-bold text-cGreenSolid text-[14px]">
                        {int.like}
                      </p>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Candidates;
