import { createBrowserRouter, Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import { Home } from "./components/Home";
import { EarbudDetails } from "./components/EarbudDetails";
import { Ranking } from "./components/Ranking";
import { Marcas } from "./components/Marcas";
import { GuiasPage } from "./components/Guias";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);
  return <Outlet />;
}

export const router = createBrowserRouter([
  {
    Component: ScrollToTop,
    children: [
      { path: "/", Component: Home },
      { path: "/earbud/:id", Component: EarbudDetails },
      { path: "/ranking", Component: Ranking },
      { path: "/marcas", Component: Marcas },
      { path: "/guias", Component: GuiasPage },
    ],
  },
]);

