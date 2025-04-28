import React from 'react'
import Bar from '../assests/coofee.jpg';
import grill from '../assests/grill.jpg';
import bar from '../assests/bar.jpg';
import tea from '../assests/tea.jpg';
import jaa from '../assests/jaa.jpg';
import jetwing from '../assests/jetwings.jpg'
import jetwing1 from '../assests/Colombo-7-categorythumbnail.jpg'
import jetwing2 from '../assests/jetwing-beach-category-744x653.jpg'

function AboutUs() {
    return (
        <div className='container-fluid'>
            <div className="container-fluid d-flex justify-content-center flex-wrap  mt-5 gap-4 mb-5">

                <h3 style={{ fontFamily: 'fantasy' }}>GALLERY</h3>
                <div className="card" style={{ width: '18rem', marginTop: '40px' }}>
                    <img src={Bar} className="card-img-top" alt="Service" />

                </div>

                <div className="card" style={{ width: '18rem', marginTop: '40px' }}>
                    <img src={grill} className="card-img-top" alt="Service" />

                </div>
                <div className="card" style={{ width: '18rem', marginTop: '40px' }}>
                    <img src={tea} className="card-img-top" alt="Service" />

                </div>
                <div className="card" style={{ width: '18rem', marginTop: '40px' }}>
                    <img src={bar} className="card-img-top" alt="Service" />

                </div>

                <div className="card" style={{ width: '18rem', marginTop: '40px' }}>
                    <img src={jaa} style={{ width: '18rem', height: '24rem' }} className="card-img-top" alt="Service" />

                </div>

                <div className="card" style={{ width: '18rem', marginTop: '40px' }}>
                    <img src={jetwing} style={{ width: '18rem', height: '24rem' }} className="card-img-top" alt="Service" />

                </div>
                <div className="card" style={{ width: '18rem', marginTop: '40px' }}>
                    <img src={jetwing1} style={{ width: '18rem', height: '24rem' }} className="card-img-top" alt="Service" />

                </div>
                <div className="card" style={{ width: '18rem', marginTop: '40px' }}>
                    <img src={jetwing2} style={{ width: '18rem', height: '24rem' }} className="card-img-top" alt="Service" />

                </div>

            </div>

            <div className='container-fluid d-flex justify-content-center flex-wrap  mt-5 gap-4 mb-5'>
                <h2 style={{ fontFamily: 'fantasy' }}>Our amenities</h2>
                <div className="card" style={{ width: '18rem', marginTop: '40px' }}>

                    <div className="card-body }>">
                        <h5 className="card-title">Dining</h5>
                        <p className="card-text">
                            <li>On-site restaurant</li>
                            <li>Room service</li>
                        </p>
                    </div>
                </div>
                <div className="card" style={{ width: '18rem', marginTop: '40px' }}>

                    <div className="card-body }>">
                        <h5 className="card-title">Fitness and recreation</h5>
                        <p className="card-text">
                            <li>Ont pool</li>
                            <li>Fitness center</li>
                        </p>
                    </div>
                </div>
                <div className="card" style={{ width: '18rem', marginTop: '40px' }}>

                    <div className="card-body }>">
                        <h5 className="card-title">Business and work</h5>
                        <p className="card-text">
                            <li>Executive lounget</li>
                            <li>Meeting rooms</li>
                        </p>
                    </div>
                </div>
                <div className="card" style={{ width: '18rem', marginTop: '40px' }}>

                    <div className="card-body }>">
                        <h5 className="card-title">Guest services</h5>
                        <p className="card-text">
                            <li>Free parking</li>
                            <li>On-site restaurant</li>
                            <li>Room service</li>
                            <li>Free Wi-Fi</li>
                        </p>
                    </div>
                </div>

            </div>
            <div className='container-fluid mb-5' >
                <h3 style={{ textAlign: 'center', fontSize: '30px', color: 'GrayText' }}>Jetwing Honors member benefits</h3>

                <div className="card" style={{ width: '21rem', marginTop: '40px', marginLeft: 'auto', marginRight: 'auto' }}>

                    <div className="card-body }>">
                        <h5 className="card-title" style={{color:'purple'}}>Member Benefits</h5>
                        <p className="card-text">
                            <li>Hilton Honors Discount rate</li>
                            <li>Points toward free nights </li>
                            <li>Choose Your Room</li>
                            <li>Digital Check-In</li>
                            <li>Hilton Honors Experiences</li>
                        </p>
                    </div>
                </div>
            </div>

            <div className='container-fluid mb-5'>
                <h3 style={{ textAlign: 'center', fontSize: '30px', color: 'GrayText' }}>MAP in Get in Touch</h3>
                <div style={{ textAlign: 'center' }}>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124051.0903472799!2d79.9704319!3d6.9225949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259c22d2f2617%3A0x773eebfe40a5a849!2sJetwing%20Colombo%207!5e0!3m2!1sen!2slk!4v1684327259460!5m2!1sen!2slk"
                        width="50%" 
                        height="450" 
                        style={{ border: 0 }} 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>

        </div>


    )
}

export default AboutUs