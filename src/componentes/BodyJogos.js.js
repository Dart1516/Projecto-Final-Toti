import React from "react";
import styles from "../assets/styles/BodyJogos.module.css";
import lol from "../assets/images/lol.webp";
import dota2 from "../assets/images/dota2.webp";
import smite from "../assets/images/smite.jpg";
import hots from "../assets/images/hots.jpg";
import mobile from "../assets/images/mobile.jpg";
import arena from "../assets/images/arena.webp";
import hon from "../assets/images/hon.jpg";
import AirMech  from "../assets/images/AirMech.jpg";
import strife from "../assets/images/strife.jpg";
import vainglory from "../assets/images/vainglory.jpg";



const juegosData = [
  {
    id: 1,
    nombre: "League of Legends",
    imagen: lol,
    enlace: "https://na.leagueoflegends.com/",
    AñoLanzamiento: "2009  ",
    cantidadDeJugadores: "124 millones",
  },
  {
    id: 2,
    nombre: "Dota 2",
    imagen: dota2,
    enlace: "https://www.dota2.com/",
    AñoLanzamiento: "2003 ",
    cantidadDeJugadores: "11 millones",
    
  },
  {
    id: 3,
    nombre: "Smite",
    imagen: smite,
    enlace: "https://www.smitegame.com/",
    AñoLanzamiento: "2014  ",
    cantidadDeJugadores: "40 millones",
  },
  {
    id: 4,
    nombre: "Heroes of the Storm",
    imagen: hots,
    enlace: "https://heroesofthestorm.com/",
    AñoLanzamiento: "2015 ",
    cantidadDeJugadores: "1 millón",
  },
  {
    id: 5,
    nombre: "Mobile Legends: Bang Bang",
    imagen: mobile,
    enlace: "https://m.mobilelegends.com/",
    AñoLanzamiento: "2003 ",
    cantidadDeJugadores: "105 millones",
  },
  {
    id: 6,
    nombre: "Arena of Valor",
    imagen: arena,
    enlace: "https://www.arenaofvalor.com/",
    AñoLanzamiento: "2003 ",
    cantidadDeJugadores: "100 mil",
  },
  {
    id: 7,
    nombre: "Pokémon Unite",
    imagen: hon,
    enlace: "https://www.heroesofnewerth.com/",
    AñoLanzamiento: "2021  ",
    cantidadDeJugadores: "70 millones",
  },
  {
    id: 8,
    nombre: "AirMech ",
    imagen: AirMech ,
    enlace: "https://store.steampowered.com/app/206500/AirMech_Strike/",
    AñoLanzamiento: "2018 ",
    cantidadDeJugadores: "sem dados",
  },
  {
    id: 9,
    nombre: "Strife",
    imagen: strife,
    enlace: "https://strife.com/",
    AñoLanzamiento: "2018 ",
    cantidadDeJugadores: "sem dados",
  },
  {
    id: 10,
    nombre: "Vainglory",
    imagen: vainglory,
    enlace: "https://www.vainglorygame.com/",
    AñoLanzamiento: "2003 ",
    cantidadDeJugadores: "sem dados",
  },
];
const BodyJogos = () => {
  const handleMouseEnter = (e) => {
    e.currentTarget.classList.add(styles.juegoHover);
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.classList.remove(styles.juegoHover);
  };

  return (
    <div className={styles.catalogo}>
      <h2 className={styles.titulo}>Top 20 Mejores MOBAs</h2>
      <div className={styles.listaJuegos}>
        {juegosData.map((juego) => (
          <div
            key={juego.id}
            className={styles.juego}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img src={juego.imagen} alt={juego.nombre} />
            <a
              href={juego.enlace}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.enlaceNombre}
            >
              {juego.nombre}
            </a>
            <p>Ano: {juego.AñoLanzamiento}</p>
            <p>Quantidade De Jogadores ativos: {juego.cantidadDeJugadores}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BodyJogos;