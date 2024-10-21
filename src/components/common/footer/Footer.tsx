"use client";

import { usePathname, useRouter } from "next/navigation";
import style from "./Footer.module.scss";

const navItems = [
  {
    icon: "home",
    link: "/",
  },
  {
    icon: "explore",
    link: "/explore",
  },
  {
    icon: "place",
    link: "/place/tokio",
  },
  {
    icon: "person_outline",
    link: "/profile",
  },
];

const Footer = () => {
  const { push } = useRouter();
  const pathname = usePathname();
  return (
    <footer className={style.footer}>
      <nav>
        {navItems.map((item) => (
          <button
            className={pathname === item.link ? style.active : ""}
            key={item.icon}
            onClick={() => push(item.link)}
          >
            <span className="material-icons-outlined">{item.icon}</span>
          </button>
        ))}
      </nav>
    </footer>
  );
};

export default Footer;
