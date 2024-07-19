import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import Link from "next/link";

export const metadata = {
  title: "Fadhil Abdulla",
  description: "Fadhil Abdulla Portfolio",
  // icons: [
  //   {
  //     rel: 'icon',
  //     type: 'image/png',
  //     sizes: '32x32',
  //     url: '/icon32.png',
  //   },
  //   {
  //     rel: 'icon',
  //     type: 'image/png',
  //     sizes: '16x16',
  //     url: '/icon16.png',
  //   },
  //   {
  //     rel: 'apple-touch-icon',
  //     sizes: '96x96',
  //     url: '/icon96.png',
  //   },
  // ],
};
const navItems = {
  "/": {
    name: "Home",
  },
  "/project": {
    name: "Projects",
  },
};
const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={cx(
        "text-black bg-white dark:text-white dark:bg-[#111010]",
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <head>
      <link rel="icon" href="/icon32.png" />
      </head>
      <body className="antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <aside className="-ml-[8px] mb-16 tracking-tight">
            <div className="lg:sticky lg:top-20">
              <nav
                className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
                id="nav"
              >
                <div className="flex flex-row space-x-0 pr-10">
                  {Object.entries(navItems).map(([path, { name }]) => {
                    return (
                      <Link
                        key={path}
                        href={path}
                        className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2"
                      >
                        {name}
                      </Link>
                    );
                  })}
                </div>
              </nav>
            </div>
          </aside>
          {children}
        </main>
      </body>
    </html>
  );
}
