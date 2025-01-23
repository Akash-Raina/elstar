import { useNavigate } from "react-router-dom"
import { toast, Notification } from "@/components/ui";
import { CastMasterForm } from "../castMasterForm";

const NewCastMaster = ()=>{

    const navigate =useNavigate();

    const handleDiscard = () => {
        navigate('/castmaster')
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
            navigate("/castmaster");
        }
    };

    return <>
        <CastMasterForm
            type="new"
            onFormSubmit={()=>{ifSuccess(true)}}
            onDiscard={handleDiscard}
        />
    </>
}

export default NewCastMaster