import React, { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import styles from "./Menu.module.css";
import { CgMenu } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import moba from "../images/moba0.webp";
import { useScrollPosition } from "../../componentes/Hooks/scrollPosition";

const Menu = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);
  const [windowDimension, setWindowDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const detectDimension = () => {
    setWindowDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", detectDimension);
    windowDimension.width > 800 && setNavBarOpen(false);
    return () => {
      window.removeEventListener("resize", detectDimension);
    };
  }, [windowDimension]);

  const links = [
    {
      id: 1,
      link: "Principal",
      label: "Principal",
      route: "/Principal",
    },
    {
      id: 2,
      link: "Jogos",
      label: "Jogos",
      route: "/Jogos",
    },
    {
      id: 3,
      link: "FAQ",
      label: "FAQ",
      route: "/FAQ",
    },
    {
      id: 4,
      link: "Contato",
      label: "Contato",
      route: "/Contato",
    },
  ];
  const scrollPosition = useScrollPosition();
  return (
    <div
      className={
        navBarOpen
          ? styles.navOpen
          : window.scrollY > 0
          ? styles.navOnScroll
          : styles.navBar
      }
    >
      {!navBarOpen && windowDimension.width < 800 ? (
        <CgMenu
          color="#f1f1f1"
          onClick={() => setNavBarOpen(!navBarOpen)}
          size={25}
          className={styles.cerrarMenuAbierto}
        />
      ) : (
        windowDimension.width < 800 && (
          <IoClose
            onClick={() => setNavBarOpen(!navBarOpen)}
            color="#f1f1f1"
            size={25}
            className={styles.cerrarMenuAbierto}
          />
        )
      )}

      {!navBarOpen && (
        <div className={styles.logo1}>
          <img src={moba} className={styles.logoImage} alt="logo" />
          <p className={styles.logo}> +20 ANOS DE MOBAS </p>
        </div>
      )}

      {windowDimension.width > 800 && (
        <ul className={styles.linksContainer}>
          {links.map(({ link, id, route }) => (
            <div key={id}>
              <RouterLink
                to={route}
                onClick={() => setNavBarOpen(false)}
                className={styles.opciones}
              >
                {link === "Principal" ? "Página Inicial" : link}
              </RouterLink>
              <div className={styles.border}></div>
            </div>
          ))}
          <RouterLink
            to="/MinhaConta"
            onClick={() => setNavBarOpen(false)}
            className={styles.minhaConta}
          >
            Minha Conta
          </RouterLink>
        </ul>
      )}
    </div>
  );
};

export default Menu;
