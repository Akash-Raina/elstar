import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi";

export const OtherIncomeType = () => {

    const data = [
      {id: 1, otherincometype: "Abc123", amountremark: 'Akash' },
      {id: 2, otherincometype: "Abc123", amountremark: 'Aniket'},
      {id: 3, otherincometype: "Abc123", amountremark: 'Aryan'},
    ];
  
    return (
      <div className="p-4 border rounded-md shadow-md">
        <div className="grid grid-cols-3 font-bold border-b pb-2">
          <span>Other income type</span>
          <span>Amount remark</span>
        </div>
        <div>
          {data.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-3 items-center border-b py-2"
            >
              <span>{item.otherincometype}</span>
              <span>{item.amountremark}</span>
              <div className="flex space-x-2">
                <button className=" text-black px-2 py-1 rounded">
                  <HiOutlinePencil size={16}/>
                </button>
                <button className=" text-black px-2 py-1 rounded">
                  <HiOutlineTrash size={16}/>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  