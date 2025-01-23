import { useNavigate } from "react-router-dom"
import { toast, Notification } from "@/components/ui";
import { BasicSlabForm } from "../BasicSlabForm";

const NewBasicSlab = ()=>{

    const navigate =useNavigate();

    const handleDiscard = () => {
        navigate('/basicslab')
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
            navigate("/basicslab");
        }
    };

    return <>
        <BasicSlabForm
            type="new"
            onFormSubmit={()=>{ifSuccess(true)}}
            onDiscard={handleDiscard}
        />
    </>
}

export default NewBasicSlab