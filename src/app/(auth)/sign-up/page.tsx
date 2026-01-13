"use client";

import { AuthForms } from "~/components/forms";
import { SignUpSchema } from "~/lib/validators";

export default function SignupPage() {
  return (
    <AuthForms
      formType="SIGN_UP"
      schema={SignUpSchema}
      defaultValues={{
        email: "",
        password: "",
        username: "",
        name: "",
        confirmPassword: "",
      }}
      onSubmit={(data) => Promise.resolve({ success: true })}
    />
  );
}
