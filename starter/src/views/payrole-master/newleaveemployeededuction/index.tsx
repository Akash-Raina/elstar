import { useNavigate } from "react-router-dom"
import { toast, Notification } from "@/components/ui";
import { LeaveEmployeeDeductionForm } from "../leaveemployeedeductionForm";

const NewLeaveEmployeeDeduction = ()=>{

    const navigate =useNavigate();

    const handleDiscard = () => {
        navigate('/leaveemployeededuction')
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
            navigate("/leaveemployeededuction");
        }
    };

    return <>
        <LeaveEmployeeDeductionForm
            type="new"
            onFormSubmit={()=>{ifSuccess(true)}}
            onDiscard={handleDiscard}
        />
    </>
}

export default NewLeaveEmployeeDeduction