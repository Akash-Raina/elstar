
import { useNavigate } from "react-router-dom"
import { toast, Notification } from "@/components/ui";
import { EmployeeTypeForm } from "../employeetypeForm";

const NewEmployeeType = ()=>{

    const navigate =useNavigate();

    const handleDiscard = () => {
        navigate('/employeetype')
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
            navigate("/employeetype");
        }
    };

    return <>
        <EmployeeTypeForm
            type="new"
            onFormSubmit={()=>{ifSuccess(true)}}
            onDiscard={handleDiscard}
        />
    </>
}

export default NewEmployeeType