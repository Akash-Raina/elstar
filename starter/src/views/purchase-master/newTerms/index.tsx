import { useNavigate } from "react-router-dom"
import { toast, Notification } from "@/components/ui";
import { TermsFrom } from "../termsForm";

const NewTerms = ()=>{

    const navigate =useNavigate();

    const handleDiscard = () => {
        navigate('/termslist')
    }

    const ifSuccess = (success: any) => {
        if (success) {
            toast.push(
                <Notification
                    title="Successfully added"
                    type="success"
                    duration={2500}
                >
                    Sub Group successfully added
                </Notification>,
                {
                    placement: "top-center",
                }
            );
            navigate("/termslist");
        }
    };

    return <>
        <TermsFrom
            type="new"
            onFormSubmit={()=>{ifSuccess(true)}}
            onDiscard={handleDiscard}
        />
    </>
}

export default NewTerms