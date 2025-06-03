import { Container } from "react-bootstrap";
import FormWrapper from "../../components/FormWrapper";
import InputField from "../../components/forms/InputField";
import PasswordField from "../../components/forms/PasswordField";
import { useRegisterHook } from "../../hooks/useRegisterHook";

export default function RegisterPage() {
  const { mutate } = useRegisterHook();
  function onSubmit(data: any) {
    mutate(data);
  }
  return (
    <Container fluid className="d-flex ">
      <div className="login-box">
        <h3 className="mb-3">Register</h3>
        <FormWrapper
          onSubmit={onSubmit}
          defaultValues={{
            name: "",
            email: "",
            password: "",
          }}
          submitLabel="Register"
        >
          <InputField
            name="name"
            label="Name"
            control={undefined!}
            placeholder="Enter name"
          />
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
