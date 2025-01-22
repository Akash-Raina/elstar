import { useNavigate } from "react-router-dom"
import { toast, Notification } from "@/components/ui";
import { BankBranchMasterForm } from "../bankbranchForm";

const NewBankBranchMaster = ()=>{

    const navigate =useNavigate();

    const handleDiscard = () => {
        navigate('/bankbranchmaster')
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
            navigate("/bankbranchmaster");
        }
    };

    return <>
        <BankBranchMasterForm
            type="new"
            onFormSubmit={()=>{ifSuccess(true)}}
            onDiscard={handleDiscard}
        />
    </>
}

export default NewBankBranchMaster