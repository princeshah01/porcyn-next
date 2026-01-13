"use client";

import { AuthForms } from "~/components/forms";
import { SignUpSchema } from "~/lib/validators";

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
      onSubmit={(data) => Promise.resolve({ success: true })}
    />
  );
}
