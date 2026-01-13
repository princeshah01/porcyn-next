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
      // here _ is a placeholder since onSubmit expects data but we are not using it for now
      onSubmit={(_) => Promise.resolve({ success: true })}
    />
  );
}
