import { createBrowserRouter } from "react-router";
import { Home } from "./components/Home";
import { EarbudDetails } from "./components/EarbudDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/earbud/:id",
    Component: EarbudDetails,
  },
]);
