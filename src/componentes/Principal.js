import React from "react";
import styles from "../assets/styles/Principal.module.css";
import moba from "../assets/images/historia-moba.jpeg";
import moba1 from '../assets/images/primerMoba.jpg'
import moba2 from '../assets/images/segundoMoba.jpg'
import moba3 from '../assets/images/tercerMoba.png'
import moba4 from '..//assets/images/cuartoMoba.jpg'
import mapa1 from '..//assets/images/mapa1.webp'
import mapa2 from '../assets/images/mapa2.jpg'

function Principal() {
  return (
    <div>
      <h1> Breve Historia</h1>
      <main className={styles.main}>
        <div className={styles.párrafo1}>
          <h2> O que é um jogo MOBA? </h2>
          <p>
            {" "}
            Um MOBA, abreviação de Multiplayer Online Battle Arena, é um
            subgênero de videogames de estratégia em tempo real em que duas
            equipes de jogadores, geralmente 5 jogadores por equipe, competem
            entre si em um campo de batalha predeterminado.
            <br />
            <br/>
            <img src={mapa1} alt="mapa moba" width={'50%'}/> 
             <br/>

            <br />
            Cada jogador controla um único personagem com um conjunto de
            habilidades únicas que melhoram à medida que o jogo avança. Os
            jogadores também podem atualizar seus personagens comprando itens
            com ouro ganho ao completar objetivos ou matar personagens inimigos.{" "}
            <br />
            <br/>
            <img src={mapa2} alt="mapa moba2" width={'50%'}/> 
             <br/>

            <br />
          </p>
          <h2> Mecânica de jogo MOBA </h2>
          <p>
            {" "}
            O objetivo em um jogo MOBA será destruir a base inimiga, e para isso
            controlamos um herói, que se tornará mais forte à medida que o jogo
            avança. Trata-se de derrotar os heróis inimigos e as unidades
            controladas pela IA do outro time. Além de jogar com nosso herói,
            que possui poderes e habilidades próprias, teremos que trabalhar em
            conjunto com o restante da nossa equipe. À medida que ganhamos jogos
            ganharemos pontos e melhorias para melhorar nosso personagem.
            <br />
            <br />
            Os jogos MOBA baseiam-se fortemente em jogos de RPG e jogos de
            estratégia em tempo real, especialmente pela importância dada ao
            herói com quem jogamos. Com os pontos de experiência que obtivemos,
            será necessário melhorar os poderes ou feitiços do nosso personagem,
            que terá um papel muito específico dentro da equipa.
            <br />
            <br />
            Além de se familiarizar com os objetivos e estratégias do jogo, é
            preciso focar no desenvolvimento do herói, que terá que trabalhar,
            custe o que custar, com o restante da equipe. Nesse sentido, existem
            diferentes tipos de heróis nos jogos MOBA. É verdade que cada jogo
            tem o seu (dependendo do título podem variar de algumas dezenas a
            centenas), mas em geral mantêm-se sempre o mesmo tipo de
            personagens, que devem combinar bem para formar uma equipe
            equilibrada.
          </p>
        </div>
        <img src={moba} className={styles.infografia} alt="infografia" />
        <div className={styles.párrafo2}>
          <h2> História dos MOBAs </h2>
          
          <p>
            {" "}
            Os jogadores frequentemente debatem a origem do primeiro jogo MOBA.
            Muitos afirmam que o jogo Herzong Zwei da Sega de 1989 é o primeiro
            jogo MOBA já criado <br/>
            <br />
            <img src={moba1} alt="primer moba" width={'50%'}/> 
             <br/>
             <br />
             
            Enquanto outros argumentam que o modo "Precinct
            Assault", introduzido no jogo Future Cop: LAPD de 1998, é o primeiro
            MOBA verdadeiro.
            <br />
            <br/>
            <img src={moba2} alt="segundo moba" width={'50%'}/> 
             <br/>
            <br />
      
            Independentemente de quem veio primeiro, a maioria dos jogadores
            concordará que Aeon of Strife, um mapa personalizado de StarCraft, é
            o jogo que melhor iniciou o movimento do gênero antes dos anos 2000.
            <br/>
            <br />
            <img src={moba3} alt="tercer moba" width={'80%'}/> 
            <br />
             <br/>
            Em 1998, a Blizzard Entertainment lançou StarCraft, um de seus jogos
            em tempo real mais vendidos, jogos de estratégia (RTS) para PC. O
            jogo incluía um conjunto de ferramentas de edição de jogos chamado
            StarEdit que permitia aos usuários projetar e criar mapas
            personalizados com regras e jogabilidade personalizadas. O modder de
            StarCraft Aeon64 criou um mapa personalizado chamado Aeon of Strife
            que se tornou imensamente popular entre a comunidade de StarCraft.
            <br/>
            <br />
            <img src={moba4} alt="cuarto moba" width={'80%'}/> 
             <br/>
            <br />
            Muitos dos principais recursos encontrados em Aeon of Strife
            eventualmente se tornaram a estrutura base para todos os MOBAs
            futuros.{" "}
          </p>
        </div>
        <div className={styles.párrafo3}>
          
        </div>
      </main>
    </div>
  );
}

export default Principal;
