import React from "react";
import ReactPlayer from "react-player";
import video from '../videos/video1.mp4'
import styles from './Video.module.css'


function Video() {
    return (
        <header  className={styles.video}>
          <ReactPlayer
          className= 'video'
          url={video}
          playsInline
          poster="/assets/poster.png"
          fluid={false} 
          playing
          controls
          volume={0}  />
        </header>
    
         
    );
  }
  
  export default Video;
