import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi";

export const OutDutyData = () => {

    const data = [
      {id: 1, period: '123',  startdate : '7/8/25', enddate: '7/8/25', leavereason: '-'},
      {id: 2, period: '123', startdate : '11/12/25', enddate: '11/12/25', leavereason: '-'},
      {id: 3, period: '123', startdate : '9/5/25', enddate: '9/5/25', leavereason: '-'},
    ];
  
    return (
      <div className="p-4 border rounded-md shadow-md">
        <div className="grid grid-cols-5 font-bold border-b pb-2">
          <span>Period</span>
          <span>Start date</span>
          <span>End date</span>
          <span>Leaves reason</span>
        </div>
        <div>
          {data.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-5 items-center border-b py-2"
            >
              <span>{item.period}</span>
              <span>{item.startdate}</span>
              <span>{item.enddate}</span>
              <span>{item.leavereason}</span>
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
  