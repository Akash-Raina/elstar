import { useNavigate } from "react-router-dom"
import { toast, Notification } from "@/components/ui";
import { GradeForm } from "../gradeForm";
import { OtherIncomeHeadForm } from "../otherIncomeHeadForm";
import { OutDutyForm } from "../outdutyform";

const NewOutDuty = ()=>{

    const navigate =useNavigate();

    const handleDiscard = () => {
        navigate('/outduty')
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
            navigate("/outduty");
        }
    };

    return <>
        <OutDutyForm
            type="new"
            onFormSubmit={()=>{ifSuccess(true)}}
            onDiscard={handleDiscard}
        />
    </>
}

export default NewOutDuty