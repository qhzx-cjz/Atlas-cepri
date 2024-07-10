import {
  Form,
  Links,
  Meta,
  Scripts,
  Outlet,
  Link,
  ScrollRestoration,
} from "@remix-run/react";

import Navbar from './routes/Navbar';
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <Meta />
        <Links />
      </head>
      <body>
        <Navbar />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
