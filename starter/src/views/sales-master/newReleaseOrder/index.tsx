import { useNavigate } from "react-router-dom"
import { toast, Notification } from "@/components/ui";
import { ReleaseOrderForm } from "../releaseOrderForm";

const NewReleaseOrder = ()=>{

    const navigate =useNavigate();

    const handleDiscard = () => {
        navigate('/releaseorder')
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
            navigate("/releaseorder");
        }
    };

    return <>
        <ReleaseOrderForm
            type="new"
            onFormSubmit={()=>{ifSuccess(true)}}
            onDiscard={handleDiscard}
        />
    </>
}

export default NewReleaseOrder