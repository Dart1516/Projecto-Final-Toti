import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import styles from "./Menu.module.css";
import { CgMenu } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { useScrollPosition } from "../../componentes/Hooks/scrollPosition";
import moba from "../images/moba0.webp";

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
    },
    {
      id: 2,
      link: "Jogos",
    },
    {
      id: 3,
      link: "FAQ",
    },
    {
      id: 4,
      link: "Contato",
    },
  ];

  const scrollPosition = useScrollPosition();

  return (
    <div
      className={
        navBarOpen
          ? styles.navOpen
          : scrollPosition > 0
          ? styles.navOnScroll
          : styles.navBar
      }
    >

      {!navBarOpen && windowDimension.width < 800 ? (
        < CgMenu
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
        <p className={styles.logo}> 
          {" "}
           +20 ANOS DE MOBAS{" "}
        </p>
        </div>
      )}
      {navBarOpen && (
        <ul className={styles.linksContainer}>
          {links.map(({ id, link }) => (
            <div>
              <Link
                key={id}
                onClick={() => setNavBarOpen(false)}
                to={link}
                smooth
                duration={5000}
                className={styles.opciones}
              >
                {link === "Principal" ? "Página Inicial" : link}
              </Link>
              <div className={styles.border}></div>
            </div>
          ))}
        </ul>
      )}
      {windowDimension.width > 800 && (
        <ul className={styles.linksContainer}>
          {links.map(({ link, id }) => (
            <div>
              <Link
                onClick={() => setNavBarOpen(false)}
                to={link}
                smooth
                duration={500}
                className={styles.opciones}
              >
                {link === "HowWeWork" ? "How we work" : link}
              </Link>
              <div className={styles.border}></div>
            </div>
          ))}
          <Link
            onClick={() => setNavBarOpen(false)}
            to="Contact"
            smooth
            duration={500}
            className={styles.minhaConta}
          >
            Minha Conta
          </Link>
        </ul>
      )}
    </div>
  );
};

export default Menu;
