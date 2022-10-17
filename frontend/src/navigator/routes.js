import { ModifyUserPage, UserPage,HomePage } from "../pages";

const routes = {
  home: {
    title: "Home",
    path: "/",
    Component: HomePage,
  },
  user: {
    title: "User",
    path: "/user",
    Component: UserPage,
  },
  modifyUser: {
    title: "User",
    path: ["/user/:modify", "/user/:modify/:id"],
    Component: ModifyUserPage,
  },
};

export { routes };
