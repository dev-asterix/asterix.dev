import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from "./tailwind.css"
import appStyle from "./styles/app.css"

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "asterix.dev portfolio",
  viewport: "width=device-width,initial-scale=1",
});

export function links() {
  return [{ rel: "stylesheet", href: styles }, { rel: "stylesheet", href: appStyle }];
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <LiveReload />
        <Scripts />
      </body>
    </html>
  );
}
