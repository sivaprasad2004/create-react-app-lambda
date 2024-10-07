import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'; // Import MDB CSS
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBCarouselCaption,
  MDBIcon,
} from 'mdb-react-ui-kit'; // Import the necessary MDB components

const Gallery = () => {
  const videos = [
    {
      id: 1,
      title: "Worlds Longest Constitution",
      url: "https://youtu.be/uJ9-0d9kB_I",
      thumbnail: "https://img.youtube.com/vi/uJ9-0d9kB_I/0.jpg",
      description: "It Happens Only in India!"
    },
    {
      id: 2,
      title: "The Making Of Indian Constitution.",
      url: "https://youtu.be/XrKEtEzqZ7g",
      thumbnail: "https://img.youtube.com/vi/XrKEtEzqZ7g/0.jpg",
      description: "Constitution at it’s best!"
    },
    {
      id: 3,
      title: "Why Preamble is Important.",
      url: "https://youtu.be/LYHAy68pQWA",
      thumbnail: "https://img.youtube.com/vi/LYHAy68pQWA/0.jpg",
      description: "Importance of Preamble!"
    }
  ];

  return (
    <div className="gallery">
      {/* Carousel Section */}
      <MDBCarousel showControls showIndicators>
        <MDBCarouselItem className="active">
          <img
            src="https://lh3.googleusercontent.com/aZBSq_mpAKrlJjeBdpEiNr0qQQQ79wJTfRZfVgYvcy28SZhSdaVZGrrNp3UTINLvqmpmIdkGpIp4-P8mvGo0F1LcvQ=s0"
            className="d-block w-100"
            alt="Sunset Over the City"
          />
          <MDBCarouselCaption>
            
            <h5>Framers of India's Constitution were divided on representative government for Delhi</h5>
          </MDBCarouselCaption>
        </MDBCarouselItem>

        <MDBCarouselItem>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUAHIpFLGhaANRcdNlgGlqRLEWK2wxPbRWDw&s"
            className="d-block w-100"
            alt="Canyon at Night"
          />
          <MDBCarouselCaption>
           
            <h5>Constitution Month Special: Architects of the Indian Constitution</h5>
          </MDBCarouselCaption>
        </MDBCarouselItem>

        <MDBCarouselItem>
          <img
            src="https://sc0.blr1.cdn.digitaloceanspaces.com/article/120347-ybnrgwjhjh-1558678305.jpg"
            className="d-block w-100"
            alt="Cliff Above a Stormy Sea"
          />
          <MDBCarouselCaption>
            
            <h5>Why do we celebrate Constitution Day</h5>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarousel>

      {/* Video Gallery Section */}
      <h2 className="gallery-heading">Explore the Videos</h2>
      <div className="video-gallery" style={styles.videoGallery}>
        {videos.map((video) => (
          <div className="video-container" style={styles.videoContainer} key={video.id}>
            <a href={video.url} target="_blank" rel="noopener noreferrer">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="video-thumbnail"
                style={styles.thumbnail}
              />
            </a>
            <h3 style={styles.videoTitle}>{video.title}</h3>
            <p style={styles.videoDescription}>{video.description}</p>
          </div>
        ))}
      </div>

      {/* Footer Section */}
      <footer style={styles.footer}>
        <div className="social-media">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <MDBIcon fab icon="instagram" size="2x" className="me-3" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <MDBIcon fab icon="facebook" size="2x" className="me-3" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <MDBIcon fab icon="twitter" size="2x" className="me-3" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <MDBIcon fab icon="linkedin" size="2x" className="me-3" />
          </a>
        </div>
        <p style={styles.footerText}>
          © {new Date().getFullYear()} My Gallery. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

// Inline styles for the component
const styles = {
  videoGallery: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: '30px',
  },
  videoContainer: {
    margin: '10px',
    textAlign: 'center',
    width: '300px',
  },
  thumbnail: {
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
  },
  videoTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginTop: '10px',
  },
  videoDescription: {
    fontSize: '14px',
    color: '#555',
  },
  footer: {
    marginTop: '50px',
    backgroundColor: '#333',
    color: 'white',
    padding: '20px',
    textAlign: 'center',
  },
  footerText: {
    marginTop: '10px',
    fontSize: '14px',
  },
};

export default Gallery;
