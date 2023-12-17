import { useEffect, useRef } from "react";

export default function Header() {
  const links = ["Futures", "Team", "SignIn"];
  const headerRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        //    headerRef?.current?.style='red',
        (headerRef.current as HTMLElement).style.background = "rgb(12,21,36)";
        (headerRef.current as HTMLElement).style.padding = "15px 0";
      } else {
        (headerRef.current as HTMLElement).style.background = "transparent";
        (headerRef.current as HTMLElement).style.padding = "30px 0";
      }
    });
  });
  return (
    <header
      ref={headerRef}
      className="py-[30px] fixed w-full transition-all duration-300 z-50">
      <div className="container flex justify-between items-center mx-auto flex-col gap-[20px] sm:gap-0 sm:flex-row">
        <div>
          <a href="/">
            <img src="../../public/images/logo.svg" alt="" />
          </a>
        </div>
        <nav>
          <ul className="flex gap-3 items-center">
            {links.map((link, index) => {
              return (
                <li key={index}>
                  <a
                    href={`/${link.toLocaleLowerCase()}`}
                    className="text-white opacity-90 hover:opacity-100 hover:underline transition-opacity duration-300">
                    {link}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
