import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import type { AppDispatch } from "../../app/store";
import InputField from "../../components/forms/InputField";
import PasswordField from "../../components/forms/PasswordField";
import FormWrapper from "../../components/FormWrapper";
import { loginUser } from "../../features/auth/authSlice";
import { loginValidationSchema } from "../../validators/loginValidationSchema";

export default function LoginPage() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  async function onSubmit(data: { email: string; password: string }) {
    const resultAction = await dispatch(loginUser(data));
    // console.log(resultAction);
    if (loginUser.fulfilled.match(resultAction)) {
      navigate("/dashboard");
    }
  }
  return (
    <Container fluid className="">
      <div className="login-box">
        <h3 className="mb-3">Login</h3>
        <FormWrapper
          onSubmit={onSubmit}
          schema={loginValidationSchema}
          defaultValues={{ email: "dwabuluka@gmail.com", password: "12345" }}
        >
          <InputField
            name="email"
            label="Email"
            control={undefined!}
            placeholder="Enter email"
          />
          <PasswordField
            name="password"
            label="Password"
            control={undefined!}
            placeholder="Enter password"
          />
        </FormWrapper>
      </div>
    </Container>
  );
}
