import { useNavigate } from "react-router-dom"
import { toast, Notification } from "@/components/ui";
import { HolidayMasterForm } from "../holidayMasterForm";

const NewHolidayMaster = ()=>{

    const navigate =useNavigate();

    const handleDiscard = () => {
        navigate('/holidaymaster')
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
            navigate("/holidaymaster");
        }
    };

    return <>
        <HolidayMasterForm
            type="new"
            onFormSubmit={()=>{ifSuccess(true)}}
            onDiscard={handleDiscard}
        />
    </>
}

export default NewHolidayMaster