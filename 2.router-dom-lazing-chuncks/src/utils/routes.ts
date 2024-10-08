import { lazy, LazyExoticComponent } from "react";
import NoLayoutLazy from "../01-lazyload/layouts/NoLayoutLazy";

type JSXElement = () => JSX.Element;

interface Route {
  id: string;
  href: string;
  path: string;
  appearance: string;
  Component: LazyExoticComponent<JSXElement> | JSXElement;
}

/* 
To rename chunck in wepack this looks
*/
/*webpackChunkName: "nameToIdentifyIt" */
/* In vite package is not necesary the name is the same to component */

const lazy1 = lazy(() => import("../01-lazyload/pages/Lazyload1"));
const lazy2 = lazy(() => import("../01-lazyload/pages/Lazyload2"));
const lazy3 = lazy(() => import("../01-lazyload/pages/Lazyload3"));

const lazyLoadLayout = lazy(() => import("../01-lazyload/layouts/LayoutLazy"));

export const ROUTES: Route[] = [
  {
    id: "root.home",
    href: "/",
    path: "home",
    appearance: "Home",
    Component: lazy1,
  },
  {
    id: "root.about-us",
    href: "/about",
    path: "about",
    appearance: "About us",
    Component: lazy2,
  },
  {
    id: "root.users",
    href: "/users",
    path: "users",
    appearance: "Users",
    Component: lazy3,
  },
  {
    id: "root.lazyloadLayout",
    href: "/lazyloadLayout/*",
    path: "lazyloadLayout",
    appearance: "Lazyload Layout",
    Component: lazyLoadLayout,
  },
  {
    id: "root.notLayout",
    href: "/notLayout",
    path: "notLayout",
    appearance: "Not lazy layout",
    Component: NoLayoutLazy,
  },
];
