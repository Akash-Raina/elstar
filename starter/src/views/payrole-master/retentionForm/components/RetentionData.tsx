import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi";

export const RetentionData = () => {

    const data = [
      {id: 1, employeename: 'Akash',  startdate : '7/8/25', enddate: '7/8/25'},
      {id: 2, employeename: 'Aniket', startdate : '11/12/25', enddate: '11/12/25'},
      {id: 3, employeename: 'Aryan', startdate : '9/5/25', enddate: '9/5/25'},
    ];
  
    return (
      <div className="p-4 border rounded-md shadow-md">
        <div className="grid grid-cols-4 font-bold border-b pb-2">
          <span>Employee name</span>
          <span>Start date</span>
          <span>End date</span>
        </div>
        <div>
          {data.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-4 items-center border-b py-2"
            >
              <span>{item.employeename}</span>
              <span>{item.startdate}</span>
              <span>{item.enddate}</span>
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
  