import { useNavigate } from "react-router-dom"
import { toast, Notification } from "@/components/ui";
import { DeliveryChallanForm } from "../DeliveryChallanForm";

const NewDistrict = ()=>{

    const navigate =useNavigate();

    const handleDiscard = () => {
        navigate('/challantype')
    }

    const ifSuccess = (success: any) => {
        if (success) {
            toast.push(
                <Notification
                    title="Successfully added"
                    type="success"
                    duration={2500}
                >
                    District successfully added
                </Notification>,
                {
                    placement: "top-center",
                }
            );
            navigate("/challantype");
        }
    };

    return <>
        <DeliveryChallanForm
            type="new"
            onFormSubmit={()=>{ifSuccess(true)}}
            onDiscard={handleDiscard}
        />
    </>
}

export default NewDistrict