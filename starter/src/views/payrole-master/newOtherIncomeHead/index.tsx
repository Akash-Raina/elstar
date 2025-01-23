import { useNavigate } from "react-router-dom"
import { toast, Notification } from "@/components/ui";
import { GradeForm } from "../gradeForm";
import { OtherIncomeHeadForm } from "../otherIncomeHeadForm";

const NewOtherIncomeHead = ()=>{

    const navigate =useNavigate();

    const handleDiscard = () => {
        navigate('/otherincomehead')
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
            navigate("/otherincomehead");
        }
    };

    return <>
        <OtherIncomeHeadForm
            type="new"
            onFormSubmit={()=>{ifSuccess(true)}}
            onDiscard={handleDiscard}
        />
    </>
}

export default NewOtherIncomeHead