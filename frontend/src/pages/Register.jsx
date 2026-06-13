import AuthLayout from "../components/auth/AuthLayout";
import RegisterForm from "../components/auth/RegisterForm";

export default function Register() {
  return (
    <AuthLayout
      title="Create"
      highlight="Account"
      subtitle="Start creating beautiful wishes today."
    >
      <RegisterForm />
    </AuthLayout>
  );
}