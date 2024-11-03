import { Button, Checkbox, FormContainer, FormItem, Input } from "@/components/ui"
import { Field, Form, Formik } from "formik"


export const TryFormik = ()=>{

    return <>
        <Formik
            initialValues={{
                email: '',
                userName: '',
                password: '',
                rememberMe: false,
            }}
            onSubmit={()=>{console.log("testing")}}
        >
            {({values}) =>(
                <Form>
                    <FormContainer>
                        <FormItem
                            label="Email"
                            invalid = {values.email === ''}
                            errorMessage={values.email === '' ? "*Email Required": ""}
                            >
                            <Field
                             type = "email"
                             autoComplete = "off"
                             name = "email"
                             placeholder = "Email"
                             component = {Input}
                            />
                        </FormItem>

                        <FormItem
                            label="User Name"
                            invalid = {values.userName === ''}
                            errorMessage={values.userName === '' ? "*Username Required" : ""}
                        >
                            <Field
                                type= "user"
                                placeholder = "User Name"
                                name = "userName"
                                component = {Input}
                            />
                        </FormItem>

                        <FormItem
                            label="Password"
                            invalid={values.password === ''}
                            errorMessage={values.password === '' ? "*Password Required": ""}
                        >
                            <Field
                                name= "password"
                                type = "password"
                                placeholder = "Password"
                                component = {Input}
                            />
                        </FormItem>

                        <FormItem>
                            <Field name= "rememberMe" component = {Checkbox}> Remember Me </Field>
                        </FormItem>

                        <FormItem>
                            <Button type="reset" className="ltr:mr-2 rtl:ml-2">Reset</Button>
                            <Button variant="solid" type="submit">Submit</Button>
                        </FormItem>
                    </FormContainer>
                </Form>
            )}
        </Formik>
    </>
}