import { GoogleIcon, GithubIcon } from "~/assets/svg";

const SOCIAL_AUTH_PROVIDERS = [
  {
    name: "github",
    icon: <GithubIcon className="size-5 rounded-lg" />,
    label: "Login with GitHub",
  },
  {
    name: "google",
    icon: <GoogleIcon className="size-5 rounded-lg" />,
    label: "Login with Google",
  },
];

export { SOCIAL_AUTH_PROVIDERS };
