import { useNavigate } from "react-router-dom"
import { toast, Notification } from "@/components/ui";
import { TarrifForm } from "../tarrifForm";

const NewTarrif = ()=>{

    const navigate =useNavigate();

    const handleDiscard = () => {
        navigate('/tarrifheading')
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
            navigate("/tarrifheading");
        }
    };

    return <>
        <TarrifForm
            type="new"
            onFormSubmit={()=>{ifSuccess(true)}}
            onDiscard={handleDiscard}
        />
    </>
}

export default NewTarrif