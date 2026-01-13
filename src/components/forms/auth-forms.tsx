import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import {
  DefaultValues,
  FieldValues,
  SubmitHandler,
  useForm,
  Path,
} from "react-hook-form";
import { z, type ZodType } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Button,
  Input,
} from "~/components/ui/";

interface AuthFormsProps<T extends FieldValues> {
  schema: ZodType<T>;
  formType: "SIGN_IN" | "SIGN_UP";
  defaultValues: T;
  onSubmit: (data: T) => Promise<{ success: boolean }>;
}
const AuthForms = <T extends FieldValues>({
  formType,
  schema,
  defaultValues,
  onSubmit,
}: AuthFormsProps<T>) => {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as DefaultValues<T>,
  });

  const handleSubmit: SubmitHandler<T> = async (data) => {
    await onSubmit(data);
  };
  const formFieldConfig = {
    username: {
      placeholder: "Enter your username",
      label: "Username",
    },
    name: {
      placeholder: "Enter your full name",
      label: "Full Name",
    },
    email: {
      placeholder: "Enter your email address",
      label: "Email Address",
    },
    password: {
      placeholder: "Enter your password",
      label: "Password",
    },
    confirmPassword: {
      placeholder: "Confirm your password",
      label: "Confirm Password",
    },
  };

  const buttonText = formType === "SIGN_IN" ? "Sign In" : "Sign Up";

  const navlinkWithText = {
    SIGN_IN: {
      text: "Don't have an account? ",
      linkText: "Sign Up",
      linkHref: "/sign-up",
    },
    SIGN_UP: {
      text: "Already have an account? ",
      linkText: "Sign In",
      linkHref: "/sign-in",
    },
  };

  return (
    <Form {...form}>
      <form
        className="w-full space-y-4"
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        {Object.keys(defaultValues).map((field) => (
          <FormField
            control={form.control}
            key={field}
            name={field as Path<T>}
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  {
                    formFieldConfig[field.name as keyof typeof formFieldConfig]
                      .label
                  }
                </FormLabel>
                <FormControl>
                  <Input
                    required
                    type={
                      ["password", "confirmPassword"].includes(field.name)
                        ? "password"
                        : "text"
                    }
                    {...field}
                    placeholder={
                      formFieldConfig[
                        field.name as keyof typeof formFieldConfig
                      ].placeholder
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        <Button className="w-full rounded-xl text-sm" type="submit">
          {buttonText}
        </Button>
        <p className="text-muted-foreground text-sm">
          {navlinkWithText[formType].text}
          <Link
            href={navlinkWithText[formType].linkHref}
            className="text-primary hover:underline"
          >
            {navlinkWithText[formType].linkText}
          </Link>
        </p>
      </form>
    </Form>
  );
};

export { AuthForms };
