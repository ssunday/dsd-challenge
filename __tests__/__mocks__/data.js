export const fakeLocation = {
  pathname: "/",
  search: "",
  state: "",
  hash: "",
};

export const fakeHistory = {
  length: 0,
  action: "PUSH",
  location: {},
};

export const fakeMatch = {
  path: "/",
  url: "https://dreamseedo.test",
  params: {},
  isExact: true,
};

export const fakeRouterProps = {
  location: fakeLocation,
  match: fakeMatch,
  history: fakeHistory,
};
