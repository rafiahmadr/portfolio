import { useEffect, useRef, useState } from "react";
import { motion as Motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const links = [
  { label: "Projects", path: "/" },
  { label: "About", path: "/about" },
];

export default function Navbar() {
  const location = useLocation();
  const lastScrollY = useRef(0);
  const [hideNav, setHideNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setHideNav(true); // scrolling down
      } else {
        setHideNav(false); // scrolling up
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full flex justify-center mt-4 sm:mt-6 sticky top-4 sm:top-6 z-50 px-4">
      <Motion.nav
        animate={{
          opacity: hideNav ? 0 : 1,
          y: hideNav ? -20 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="w-full sm:w-2/4 md:w-1/2 lg:w-1/2 xl:w-1/4 max-w-4xl bg-white border border-dashed border-neutral-300 rounded-2xl px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between shadow-sm"
      >
        {/* Center-left links */}
        <div className="flex items-center gap-4 sm:gap-8 relative">
          {links.map((link) => {
            const isActive =
              link.label === "Projects"
                ? location.pathname === "/" ||
                  location.pathname.startsWith("/projects")
                : location.pathname.startsWith(link.path);

            return (
              <Link
                key={link.label}
                to={link.path}
                className="relative text-xs sm:text-sm font-medium text-neutral-800"
              >
                <span className="relative z-10">{link.label}</span>

                {isActive && (
                  <Motion.span
                    layoutId="underline"
                    className="absolute left-0 -bottom-1 h-[2px] w-full bg-neutral-900 rounded-full"
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Contact button */}
        <Motion.a
          href="mailto:xxx@gmail.com"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="bg-neutral-900 text-white text-xs sm:text-sm font-medium px-3 sm:px-5 py-1.5 sm:py-2 rounded-xl shadow-md whitespace-nowrap"
        >
          Contact
        </Motion.a>
      </Motion.nav>
    </div>
  );
}
