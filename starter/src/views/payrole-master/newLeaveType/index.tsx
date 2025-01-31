import { useNavigate } from "react-router-dom"
import { toast, Notification } from "@/components/ui";
import { LeaveTypeForm } from "../leaveTypeForm";

const NewLeaveType = ()=>{

    const navigate =useNavigate();

    const handleDiscard = () => {
        navigate('/leavetype')
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
            navigate("/leavetype");
        }
    };

    return <>
        <LeaveTypeForm
            type="new"
            onFormSubmit={()=>{ifSuccess(true)}}
            onDiscard={handleDiscard}
        />
    </>
}

export default NewLeaveType