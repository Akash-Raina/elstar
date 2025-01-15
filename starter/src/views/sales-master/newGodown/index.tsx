
import { useNavigate } from "react-router-dom"
import { toast, Notification } from "@/components/ui";
import { GodownForm } from "../godownForm";

const NewMolassesLocal = ()=>{

    const navigate =useNavigate();

    const handleDiscard = () => {
        navigate('/godown')
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
            navigate("/godown");
        }
    };

    return <>
        <GodownForm
            type="new"
            onFormSubmit={()=>{ifSuccess(true)}}
            onDiscard={handleDiscard}
        />
    </>
}

export default NewMolassesLocal