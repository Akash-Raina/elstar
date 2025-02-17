import { useNavigate } from "react-router-dom"
import { toast, Notification } from "@/components/ui";
import { DepartmentForm } from "../departmentForm";
import { DeductionHeadandslapForm } from "../DeductionHeadandslapForm";

const NewDeductionHeadandSlap = ()=>{

    const navigate =useNavigate();

    const handleDiscard = () => {
        navigate('/deductionheadandslab')
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
            navigate("/deductionheadandslab");
        }
    };

    return <>
        <DeductionHeadandslapForm
            type="new"
            onFormSubmit={()=>{ifSuccess(true)}}
            onDiscard={handleDiscard}
        />
    </>
}

export default NewDeductionHeadandSlap