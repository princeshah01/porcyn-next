const ROUTES = {
  HOME: "/",
  SIGN_IN: "/sign-in",
  SIGN_UP: "/sign-up",
  FEED: "/feed",
  COMMUNITY: "/community",
  TAGS: "/tags",
  JOBS: "/jobs",
  COLLECTION: "/collection",
  ASK: "/ask",
  PROFILE: (username: string) => `/profile/${username}`,
  QUESTION: (id: string) => `/questions/${id}`,
  TAG: (name: string) => `/tags/${name}`,
  SETTINGS: "/settings",
};

export { ROUTES };
