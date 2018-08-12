import React from 'react';
import Button from '@material-ui/core/Button';



const HEADER_IMAGE_URL = 'https://scontent-ort2-1.cdninstagram.com/vp/cbcbd72a0e9b964b48145c573abc205c/5BFE1D4B/t51.2885-15/sh0.08/e35/s750x750/33650931_1939352512776238_8238764433652842496_n.jpg';

const styles = {
  headerContainer: {
    width: '100%',
    height: '500px',
    position: 'relative'
  },
  headerImage: {
    backgroundImage: `url("${HEADER_IMAGE_URL}")`,
    backgroundSize: 'cover',
    height: '100%',
    width: '100%',
    position: 'absolute',
    backgroundPositionY: '20%'
  },
  textOverlay: {
    position: 'absolute',
    top: '20%',
    right: '10%'
  },
  nameText: {
    color: 'white',
    textShadow: '2px 2px 4px black',
    fontSize: '100px'
  }
}

export const Header = () => {
  return (
    <div style={styles.headerContainer}>
      <img style={styles.headerImage}  />
      <div style={styles.textOverlay}>
        <h1 style={styles.nameText}>Levi <br/> Fuller</h1>
      </div>

    </div>
  )
}
