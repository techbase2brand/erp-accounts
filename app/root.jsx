import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import Menu from "./routes/menu";
import root from './root.css'

export const links = () => [{ rel: "stylesheet", href: root }];

export default function App() {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div className="app-os">
          <div className="left-col-os">
            <Menu />
          </div>
          <div className="right-col-os">
            <Outlet />
          </div>
        </div>
        <ScrollRestoration />
        <LiveReload />
        <Scripts />
      </body>
    </html>
  );
}
