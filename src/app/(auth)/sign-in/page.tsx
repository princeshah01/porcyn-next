"use client";

import { AuthForms } from "~/components/forms";
import { SignInSchema } from "~/lib/validators";

export default function SigninPage() {
  return (
    <AuthForms
      formType="SIGN_IN"
      schema={SignInSchema}
      defaultValues={{ email: "", password: "" }}
      // here _ is a placeholder since onSubmit expects data but we are not using it for now
      onSubmit={(_) => Promise.resolve({ success: true })}
    />
  );
}
