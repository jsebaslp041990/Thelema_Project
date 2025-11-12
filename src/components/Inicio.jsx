import React from 'react'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'
import { images } from '../data/images'
import styles from './Inicio.module.css'

const Separator = ({ height = 3}) => {
  const separatorStyle = {
    height: `${height}px`,
  };

  return <span className={styles.separator} style={separatorStyle}></span>;
};

function Gallery({ items }) {
  return (
    <div className={styles.galleryContainer}>
      <ImageGallery
        items={items}
        showPlayButton={false}
        showFullscreenButton={false}
        showThumbnails={false}
        showBullets={true}
        autoPlay={true}
        showNav={false}
        slideInterval={4000}
      />
    </div>
  )
}

export const Inicio = () => {
  return (
    <>
      <Separator height={3} />
      <Gallery items={images} />
    </>
  )
}