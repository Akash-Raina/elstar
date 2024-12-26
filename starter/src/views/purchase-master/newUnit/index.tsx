import { useNavigate } from "react-router-dom"
import { toast, Notification } from "@/components/ui";
import { UnitForm } from "../measuringForm";

const NewUnit = ()=>{

    const navigate =useNavigate();

    const handleDiscard = () => {
        navigate('/measure')
    }

    const ifSuccess = (success: any) => {
        if (success) {
            toast.push(
                <Notification
                    title="Successfully added"
                    type="success"
                    duration={2500}
                >
                    Unit Group successfully added
                </Notification>,
                {
                    placement: "top-center",
                }
            );
            navigate("/measure");
        }
    };

    return <>
        <UnitForm
            type="new"
            onFormSubmit={()=>{ifSuccess(true)}}
            onDiscard={handleDiscard}
        />
    </>
}

export default NewUnit