import React, {useState} from 'react'
import {photos} from '../../assets/data'
import './gallery.scss'
import Layout from '../../components/layout/Layout'

function Gallery() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const next = () => {
        setCurrentIndex((currentIndex + 1) % photos.length)
    }

    const prev = () => {
        setCurrentIndex((currentIndex - 1 + photos.length) % photos.length )
    }

    return (
      <>
      <Layout>
      
        <section className="slider-container">
          {photos.map((photo) => (
            <div
              key={photo.id}
              // if the photo is the current photo, show it
              className={
                photos[currentIndex].id === photo.id ? "fade" : "slide fade"
              }
            >
              <img src={photo.url} alt={photo.title} className="photo" />
              <div className="caption">{photo.title}</div>
            </div>
          ))}

          {/* Previous button */}
          <button onClick={prev} className="prev">
            &lt;
          </button>

          {/* Next button */}
          <button onClick={next} className="next">
            &gt;
          </button>
        </section>

        <section className="dots">
          {photos.map((photo) => (
            <span
              key={photo.id}
              // highlight the dot that corresponds to the current photo
              className={
                photos[currentIndex].id === photo.id ? "dot active" : "dot"
              }
              // when the user clicks on a dot, go to the corresponding photo
              onClick={() => setCurrentIndex(photos.indexOf(photo))}
            ></span>
          ))}
        </section>
      </Layout>
      </>
    );
}

export default Gallery