import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi";

export const ChangeMonthData = () => {

    const data = [
      {id: 1, number: 156,  month : 'September', status: 'Open', remark: 'Open month'},
      {id: 2, number: 156, month : 'December', status: 'Open', remark: 'Open month'},
      {id: 3, number: 156, month : 'March', status: 'Open', remark: 'Open month'},
    ];
  
    return (
      <div className="p-4 border rounded-md shadow-md">
        <div className="grid grid-cols-5 font-bold border-b pb-2">
          <span>Number</span>
          <span>Month</span>
          <span>Status</span>
          <span>Remark</span>
        </div>
        <div>
          {data.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-5 items-center border-b py-2"
            >
              <span>{item.number}</span>
              <span>{item.month}</span>
              <span>{item.status}</span>
              <span>{item.remark}</span>
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
  