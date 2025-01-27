import { useNavigate } from "react-router-dom"
import { toast, Notification } from "@/components/ui";
import { OpeningLeaveBalanceForm } from "../openingLeaveBalanceForm";

const NewOpeningLeaveBalance = ()=>{

    const navigate =useNavigate();

    const handleDiscard = () => {
        navigate('/openingleavebalance')
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
            navigate("/openingleavebalance");
        }
    };

    return <>
        <OpeningLeaveBalanceForm
            type="new"
            onFormSubmit={()=>{ifSuccess(true)}}
            onDiscard={handleDiscard}
        />
    </>
}

export default NewOpeningLeaveBalance