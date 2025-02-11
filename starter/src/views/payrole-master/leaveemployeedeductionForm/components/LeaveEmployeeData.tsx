import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi";

export const LeaveEmployeeDeductionData = () => {

    const data = [
      {id: 1, code: 156, description : 'description', lastamount: '-', amount: '-'},
      {id: 2, code: 156, description : 'description', lastamount: '-', amount: '-'},
      {id: 3, code: 156, description : 'description', lastamount: '-', amount: '-'},
    ];
  
    return (
      <div className="p-4 border rounded-md shadow-md">
        <div className="grid grid-cols-5 font-bold border-b pb-2">
          <span>Code</span>
          <span>Description</span>
          <span>Last Amount</span>
          <span>Amount</span>
        </div>
        <div>
          {data.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-5 items-center border-b py-2"
            >
              <span>{item.code}</span>
              <span>{item.description}</span>
              <span>{item.lastamount}</span>
              <span>{item.amount}</span>
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
  