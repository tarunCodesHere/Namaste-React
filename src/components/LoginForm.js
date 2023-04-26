import { Formik, Form, Field } from "formik";

const LoginForm = () => {
  const defaultValue = {
    name: "",
    email: "",
    password: "",
  };
  return (
    <>
      <div className="form-valid">
        <h1>Login</h1>

        <Formik>
          <Form>
            <div className="form-field-div">
              <Field
                className="form-control"
                type="text"
                name="name"
                placeholder="enter your name"
              ></Field>
            </div>
            <div className="form-field-div">
              <Field
                className="form-control"
                type="text"
                name="email"
                placeholder="enter your email"
              ></Field>
            </div>
            <div className="form-field-div">
              <Field
                className="form-control"
                type="type"
                name="password"
                placeholder="enter your password"
              ></Field>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
};
export default LoginForm;
