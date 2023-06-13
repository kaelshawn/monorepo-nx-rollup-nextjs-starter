import Link from "next/link";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import { Header, Logo } from "../lib";
import "../styles/globals.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header
          logoContent={
            <Link href="#" className="-m-1.5 p-1.5" passHref>
              <span className="sr-only">Your Company</span>
              <Logo></Logo>
            </Link>
          }
          rightContent={
            <Link
              passHref
              href="/login"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              登录 <span aria-hidden="true">&rarr;</span>
            </Link>
          }
          navigation={
            <>
              <Link
                className="text-sm font-semibold leading-6 text-gray-900"
                href="/"
              >
                Product
              </Link>
            </>
          }
        />
        <div className="overflow-hidden bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">{children}</div>
        </div>
      </body>
    </html>
  );
}
