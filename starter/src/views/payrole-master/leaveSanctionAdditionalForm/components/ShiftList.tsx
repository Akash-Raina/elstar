import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi";

export const ShiftList = () => {

    const data = [
      { id: 1, date: '10/12/24', shift: "Abc123", pay_fac: 1000000, hours: 9, coff: 80000, ot_type: 'Abc123', emp_name: 'Akash' },
      { id: 2, date: '10/12/24', shift: "Abc123", pay_fac: 200000, hours: 9, coff: 70000, ot_type: 'Abc123', emp_name: 'Aniket'},
      { id: 3, date: '10/12/24', shift: "Abc123", pay_fac: 2000053, hours: 9, coff: 90000, ot_type: 'Abc123', emp_name: 'Aryan'},
    ];
  
    return (
      <div className="p-4 border rounded-md shadow-md">
        <div className="grid grid-cols-8 font-bold border-b pb-2">
          <span>Date</span>
          <span>Shift</span>
          <span>Pay fac</span>
          <span>Hours</span>
          <span>Coff</span>
          <span>Ot Type</span>
          <span>Emp name</span>
        </div>
        <div>
          {data.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-8 items-center border-b py-2"
            >
              <span>{item.date}</span>
              <span>{item.shift}</span>
              <span>{item.pay_fac}</span>
              <span>{item.hours}</span>
              <span>{item.coff}</span>
              <span>{item.ot_type}</span>
              <span>{item.emp_name}</span>
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
  