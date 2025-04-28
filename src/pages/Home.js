import React from 'react'
import banner from '../assests/p1.jpg'
import slide1 from '../assests/205962295.jpg'
import slide2 from '../assests/Colombo-7-categorythumbnail.jpg'
import slide3 from '../assests/yala-hotels-categorythumbnail-1.jpg'
import logo from '../assests/logo.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <div>
      <div className='home'>
        <img
          src={banner}
          style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
          alt="Banner"
        />
      </div>

      <div className='container'>
        <div className='container-fluid'>
            <img
            src={logo}
            style={{width:'200px' , marginTrim: '20px', height: 'auto', borderRadius: '10px', marginLeft: 'auto', marginRight: 'auto', display: 'block'}}
            alt="logo"
            />

        </div>
        <div className='container-fluid'>
          <h1 style={{ textAlign: 'center', fontSize: '50px', color: 'blue' }}>Jetwing Hotels</h1>
          <p style={{ textAlign: 'center', fontSize: '20px', color: 'brown' }}>Experience the best of hospitality</p>
        </div>

        <p>
          At Jetwing, we pride ourselves on providing exceptional hospitality and unforgettable experiences.
          Our hotels are designed to offer the perfect blend of luxury, comfort, and local culture.
          Whether you're here for business or leisure, we have everything you need for a memorable stay.
        </p>
        <p>
          Jetwing Hotels in Sri Lanka offer a luxurious escape blended with warm Sri Lankan hospitality and breathtaking natural beauty.
          Located in scenic spots such as Negombo, Galle, and the cultural triangle, each Jetwing property provides a unique experience—whether it’s beachfront relaxation, wildlife adventures, or heritage exploration.
          With eco-friendly practices and world-class service, Jetwing Hotels focus on sustainability without compromising comfort.
          Guests can enjoy fine dining, spa treatments, and personalized service in beautifully designed spaces.
          Ideal for couples, families, and solo travelers, Jetwing promises unforgettable stays rooted in authenticity and care, making it a leading choice for luxury travel in Sri Lanka.
        </p>

        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={slide1} className="d-block w-100" alt="Slide 1" style={{ height: '400px', objectFit: 'cover' }} />
            </div>
            <div className="carousel-item">
              <img src={slide2} className="d-block w-100" alt="Slide 2" style={{ height: '400px', objectFit: 'cover' }} />
            </div>
            <div className="carousel-item">
              <img src={slide3} className="d-block w-100" alt="Slide 3" style={{ height: '400px', objectFit: 'cover' }} />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
