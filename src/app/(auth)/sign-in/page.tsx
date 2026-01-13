"use client";

import { AuthForms } from "~/components/forms";
import { SignInSchema } from "~/lib/validators";

export default function SigninPage() {
  return (
    <AuthForms
      formType="SIGN_IN"
      schema={SignInSchema}
      defaultValues={{ email: "", password: "" }}
      onSubmit={(data) => Promise.resolve({ success: true })}
    />
  );
}
