import { useNavigate } from "react-router-dom"
import { toast, Notification } from "@/components/ui";
import { SalaryHeadForm } from "../salaryheadForm";

const NewSalaryHead = ()=>{

    const navigate =useNavigate();

    const handleDiscard = () => {
        navigate('/salaryhead')
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
            navigate("/salaryhead");
        }
    };

    return <>
        <SalaryHeadForm
            type="new"
            onFormSubmit={()=>{ifSuccess(true)}}
            onDiscard={handleDiscard}
        />
    </>
}

export default NewSalaryHead