import { useNavigate } from "react-router-dom"
import { toast, Notification } from "@/components/ui";
import { GradeForm } from "../gradeForm";

const NewGrade = ()=>{

    const navigate =useNavigate();

    const handleDiscard = () => {
        navigate('/grade')
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
            navigate("/grade");
        }
    };

    return <>
        <GradeForm
            type="new"
            onFormSubmit={()=>{ifSuccess(true)}}
            onDiscard={handleDiscard}
        />
    </>
}

export default NewGrade