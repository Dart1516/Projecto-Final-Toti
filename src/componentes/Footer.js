import React from 'react'
import fb from '../assets/images/facebook.png'
import inst from '../assets/images/instagram.png'
import tw from '../assets/images/twitter.png'
import styles from '../assets/styles/Footer.module.css'


export default function Footer() {
  return (
    <div className={styles.footer1} >

        <p>Projeto TOTI 2023 <br/> David Puche <br/> Javier <br/></p>
        
        <p><a href="site-plan-rafting.html">About Us</a></p>
        <p><a href="contactUs.html">Comprar um Jogo</a></p>
        <div class={styles.social}>
            <a href="https://facebook.com" target="noreferrer">
                <img src={fb} alt="fb icon"/>
            </a>
            <a href="https://twitter.com" target="noreferrer">
                <img   src={inst} alt="twitter icon"/>
            </a>
            <a href="https://instagram.com" target="noreferrer">
                <img   src={tw} alt="instagram icon"/>
            </a>
        </div>

    
    </div>
  )
}
