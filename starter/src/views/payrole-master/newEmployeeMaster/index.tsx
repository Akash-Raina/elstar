import { useNavigate } from "react-router-dom"
import { toast, Notification } from "@/components/ui";
import { EmployeeForm } from "../EmployeeMasterForm";

const NewEmployeeMaster = ()=>{

    const navigate =useNavigate();

    const handleDiscard = () => {
        navigate('/employeemaster')
    }

    const ifSuccess = (success: any) => {
        if (success) {
            toast.push(
                <Notification
                    title="Successfully added"
                    type="success"
                    duration={2500}
                >
                    Supplier successfully added
                </Notification>,
                {
                    placement: "top-center",
                }
            );
            navigate("/employeemaster");
        }
    };

    return <>
        <EmployeeForm
            type="new"
            onFormSubmit={()=>{ifSuccess(true)}}
            onDiscard={handleDiscard}
        />
    </>
}

export default NewEmployeeMaster