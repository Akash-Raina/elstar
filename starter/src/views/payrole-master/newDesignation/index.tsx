
import { useNavigate } from "react-router-dom"
import { toast, Notification } from "@/components/ui";
import { DesignationForm } from "../designationForm";

const NewDesignation = ()=>{

    const navigate =useNavigate();

    const handleDiscard = () => {
        navigate('/designation')
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
            navigate("/designation");
        }
    };

    return <>
        <DesignationForm
            type="new"
            onFormSubmit={()=>{ifSuccess(true)}}
            onDiscard={handleDiscard}
        />
    </>
}

export default NewDesignation