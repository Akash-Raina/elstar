
import { StickyFooter } from "@/components/shared"
import { FormContainer, toast, Notification } from "@/components/ui"
import Button from "@/components/ui/Button"
import { Form, Formik } from "formik"
import { AiOutlineSave } from "react-icons/ai"
import InformationFields from "./components/InformationFields"
import { apiCreateShopCategory } from "@/services/ShopService"
import { useNavigate } from "react-router-dom"

type InitialData = {
    category_name: string; 

};

type FormModel = InitialData;

type SetSubmitting = (isSubmitting: boolean) => void;

const NewCategory = ()=>{

    const navigate = useNavigate();

    const ifSuccess = (success: any) => {
        if (success) {
            toast.push(
                <Notification
                    title="Successfully added"
                    type="success"
                    duration={2500}
                >
                    Sub-category successfully added
                </Notification>,
                {
                    placement: "top-center",
                }
            );
            navigate("/app/subcategory"); // Navigate to another page after submission
        }
    };
    
    const onSubmit = async(values: FormModel, {setSubmitting}: { setSubmitting: SetSubmitting })=>{
        const payload = {category_name: values.category_name}

        const success = await apiCreateShopCategory(payload);
        setSubmitting(false);

        ifSuccess(success)
    }

    return <>
        <Formik
            initialValues={{
                category_name: ""
            }}
            onSubmit={onSubmit}
        >
            {({touched, errors})=>(
                <Form>
                    <FormContainer>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <div className="lg:col-span-2">
                                <InformationFields touched={touched} errors={errors}/>
                            </div>
                        </div>
                        <StickyFooter
                                    className="-mx-8 px-8 flex items-center justify-between py-4"
                                    stickyClass="border-t bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                                >
                                    <div className="md:flex items-center">
                                        <Button
                                            size="sm"
                                            className="ltr:mr-3 rtl:ml-3"
                                            type="button"
                                            onClick={()=>navigate('/category')}
                                        >
                                            Discard
                                        </Button>
                                        <Button
                                            size="sm"
                                            icon={<AiOutlineSave />}
                                            variant="solid"
                                            type="submit"
                                        >
                                            Save
                                        </Button>
                                    </div>
                        </StickyFooter>
                    </FormContainer>
                </Form>
            )}
        </Formik>

    </>
}


export default NewCategory