import { useNavigate } from "react-router-dom"
import { toast, Notification } from "@/components/ui";
import { SectionForm } from "../sectionForm";

const NewSection = ()=>{

    const navigate =useNavigate();

    const handleDiscard = () => {
        navigate('/section')
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
            navigate("/section");
        }
    };

    return <>
        <SectionForm
            type="new"
            onFormSubmit={()=>{ifSuccess(true)}}
            onDiscard={handleDiscard}
        />
    </>
}

export default NewSection