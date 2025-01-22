import { useNavigate } from "react-router-dom"
import { toast, Notification } from "@/components/ui";
import { DepartmentForm } from "../departmentForm";

const NewDepartment = ()=>{

    const navigate =useNavigate();

    const handleDiscard = () => {
        navigate('/department')
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
            navigate("/department");
        }
    };

    return <>
        <DepartmentForm
            type="new"
            onFormSubmit={()=>{ifSuccess(true)}}
            onDiscard={handleDiscard}
        />
    </>
}

export default NewDepartment