import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi";

export const AmountList = ({ type }: { type: string }) => {

    const data = [
      { id: 1, code: "Abc123", lastAmount: 1000000, amount: 80000 },
      { id: 2, code: "Abc123", lastAmount: 200000, amount: 70000 },
      { id: 3, code: "Abc123", lastAmount: 2000053, amount: 90000 },
    ];
  
    return (
      <div className="p-4 border rounded-md shadow-md">
        <div className="grid grid-cols-6 font-bold border-b pb-2">
          <span>{type}</span>
          <span>No</span>
          <span>Code</span>
          <span>Last Amount</span>
          <span>Amount</span>
          <span>Actions</span>
        </div>
        <div>
          {data.map((item, index) => (
            <div
              key={item.id}
              className="grid grid-cols-6 items-center border-b py-2"
            >
              <span></span>
              <span>{index + 1}</span>
              <span>{item.code}</span>
              <span>{item.lastAmount}</span>
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
  