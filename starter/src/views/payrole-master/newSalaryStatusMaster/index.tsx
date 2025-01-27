import { useNavigate } from "react-router-dom"
import { toast, Notification } from "@/components/ui";
import { SalaryHeadForm } from "../salaryheadForm";
import { SalaryStatusMasterForm } from "../salaryStatusMasterForm";

const NewSalaryStatusMaster = ()=>{

    const navigate =useNavigate();

    const handleDiscard = () => {
        navigate('/salarystatus')
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
            navigate("/salarystatus");
        }
    };

    return <>
        <SalaryStatusMasterForm
            type="new"
            onFormSubmit={()=>{ifSuccess(true)}}
            onDiscard={handleDiscard}
        />
    </>
}

export default NewSalaryStatusMaster