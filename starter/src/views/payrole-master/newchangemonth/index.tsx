import { useNavigate } from "react-router-dom"
import { toast, Notification } from "@/components/ui";
import { CastMasterForm } from "../castMasterForm";
import { ChangeMonthForm } from "../changeMonthForm";

const NewChangeMonth = ()=>{

    const navigate =useNavigate();

    const handleDiscard = () => {
        navigate('/changemonth')
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
            navigate("/changemonth");
        }
    };

    return <>
        <ChangeMonthForm
            type="new"
            onFormSubmit={()=>{ifSuccess(true)}}
            onDiscard={handleDiscard}
        />
    </>
}

export default NewChangeMonth