import AuthLayout from "../components/auth/AuthLayout";
import LoginForm from "../components/auth/LoginForm";

export default function Login() {
  return (
    <AuthLayout
      title="Welcome"
      highlight="Back"
      subtitle="Continue creating beautiful wishes and memories."
    >
      <LoginForm />
    </AuthLayout>
  );
}