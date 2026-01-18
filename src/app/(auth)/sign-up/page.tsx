"use client";

import { AuthForms, SignUpSchema } from "~/features/auth";

export default function SignupPage() {
  return (
    <AuthForms
      formType="SIGN_UP"
      schema={SignUpSchema}
      defaultValues={{
        name: "",
        username: "",
        email: "",
        password: "",
      }}
      onSubmit={(_) => Promise.resolve({ success: true })}
    />
  );
}
