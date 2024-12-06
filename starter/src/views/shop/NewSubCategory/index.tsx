import { StickyFooter } from "@/components/shared";
import { FormContainer, toast, Notification } from "@/components/ui";
import Button from "@/components/ui/Button";
import { Form, Formik } from "formik";
import { AiOutlineSave } from "react-icons/ai";
import BasicInformationFields from "./components/BasicInformationFields";
import Organization from "./components/Organization";
import {apiCreateShopSubCategory } from "@/services/ShopService";
import { useNavigate } from "react-router-dom";
import { AxiosResponse } from "axios";

type InitialData = {
    sub_category_name: string; 
    category?: { label: string; value: number } | null;
};

type FormModel = InitialData;

type SetSubmitting = (isSubmitting: boolean) => void;

const NewSubCategory = () => {
    const navigate = useNavigate();

    const ifSuccess = (success:any) => {
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

    const onSubmit = async (values: FormModel, { setSubmitting }: { setSubmitting: SetSubmitting }) => {
        try {
            const payload = {
                sub_category_name: values.sub_category_name,
                category_id: values.category?.value,
            };

            const success = await apiCreateShopSubCategory(payload);
            console.log("success", success)
            setSubmitting(false);

            ifSuccess(success); // Handle success
        } catch (error) {
            console.error("Error submitting form:", error);
            toast.push(
                <Notification
                    title="Submission failed"
                    type="danger"
                    duration={2500}
                >
                    Unable to add sub-category
                </Notification>,
                {
                    placement: "top-center",
                }
            );
            setSubmitting(false);
        }
    };

    return (
        <Formik
            initialValues={{
                sub_category_name: "",
                category: null,
            }}
            onSubmit={onSubmit} // Attach the submit handler
        >
            {({ values, touched, errors, isSubmitting }) => (
                <Form>
                    <FormContainer>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <div className="lg:col-span-2">
                                {/* Fields for entering data */}
                                <BasicInformationFields touched={touched} errors={errors} />
                                <Organization touched={touched} errors={errors} values={values} />
                            </div>
                        </div>
                        {/* Footer with buttons */}
                        <StickyFooter
                            className="-mx-8 px-8 flex items-center justify-between py-4"
                            stickyClass="border-t bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                        >
                            <div className="md:flex items-center">
                                <Button
                                    size="sm"
                                    className="ltr:mr-3 rtl:ml-3"
                                    type="button"
                                    onClick={() => navigate("/subcategory/1")} // Navigate to a different page on discard
                                >
                                    Discard
                                </Button>
                                <Button
                                    size="sm"
                                    icon={<AiOutlineSave />}
                                    variant="solid"
                                    type="submit"
                                    disabled={isSubmitting} // Disable button during submission
                                >
                                    {isSubmitting ? "Saving..." : "Save"}
                                </Button>
                            </div>
                        </StickyFooter>
                    </FormContainer>
                </Form>
            )}
        </Formik>
    );
};

export default NewSubCategory;
