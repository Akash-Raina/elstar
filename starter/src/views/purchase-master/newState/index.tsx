import { useNavigate } from "react-router-dom"
import { toast, Notification } from "@/components/ui";
import { StateFrom } from "../stateForm";

const NewCountry = ()=>{

    const navigate =useNavigate();

    const handleDiscard = () => {
        navigate('/statelist')
    }

    const ifSuccess = (success: any) => {
        if (success) {
            toast.push(
                <Notification
                    title="Successfully added"
                    type="success"
                    duration={2500}
                >
                    State successfully added
                </Notification>,
                {
                    placement: "top-center",
                }
            );
            navigate("/statelist");
        }
    };

    return <>
        <StateFrom
            type="new"
            onFormSubmit={()=>{ifSuccess(true)}}
            onDiscard={handleDiscard}
        />
    </>
}

export default NewCountry