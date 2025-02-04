import { useNavigate } from "react-router-dom"
import { toast, Notification } from "@/components/ui";
import { AllowanceAndDeductionForm } from "../allowanceAndDeductionForm";

const NewAllowanceAndDeduction = ()=>{

    const navigate =useNavigate();

    const handleDiscard = () => {
        navigate('/allowance')
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
            navigate("/allowance");
        }
    };

    return <>
        <AllowanceAndDeductionForm
            type="new"
            onFormSubmit={()=>{ifSuccess(true)}}
            onDiscard={handleDiscard}
        />
    </>
}

export default NewAllowanceAndDeduction