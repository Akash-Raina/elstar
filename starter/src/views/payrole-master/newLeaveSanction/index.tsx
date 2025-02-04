import { useNavigate } from "react-router-dom"
import { toast, Notification } from "@/components/ui";
import { HolidayMasterForm } from "../holidayMasterForm";
import { LeaveSanctionAdditionalForm } from "../leaveSanctionAdditionalForm";

const NewLeaveSanction = ()=>{

    const navigate =useNavigate();

    const handleDiscard = () => {
        navigate('/leavesanction')
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
            navigate("/leavesanction");
        }
    };

    return <>
        <LeaveSanctionAdditionalForm
            type="new"
            onFormSubmit={()=>{ifSuccess(true)}}
            onDiscard={handleDiscard}
        />
    </>
}

export default NewLeaveSanction