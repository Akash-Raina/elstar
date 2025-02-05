import { useNavigate } from "react-router-dom"
import { toast, Notification } from "@/components/ui";
import { OpeningLeaveBalanceForm } from "../openingLeaveBalanceForm";
import { OtherIncomeForm } from "../otherincomeform";

const NewOtherIncome = ()=>{

    const navigate =useNavigate();

    const handleDiscard = () => {
        navigate('/otherincome')
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
            navigate("/otherincome");
        }
    };

    return <>
        <OtherIncomeForm
            type="new"
            onFormSubmit={()=>{ifSuccess(true)}}
            onDiscard={handleDiscard}
        />
    </>
}

export default NewOtherIncome