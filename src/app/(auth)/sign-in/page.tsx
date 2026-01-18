"use client";

import { AuthForms, SignInSchema } from "~/features/auth";

export default function SigninPage() {
  return (
    <AuthForms
      formType="SIGN_IN"
      schema={SignInSchema}
      defaultValues={{ email: "", password: "" }}
      onSubmit={(_) => Promise.resolve({ success: true })}
    />
  );
}
