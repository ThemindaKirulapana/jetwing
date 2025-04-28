import React from 'react';
import Bar from '../assests/coofee.jpg';
import grill from '../assests/grill.jpg';
import bar from '../assests/bar.jpg';
import tea from '../assests/tea.jpg';

function Service() {
    return (
  
        <div className="container-fluid d-flex justify-content-center flex-wrap  mt-5 gap-4 mb-5">
 
           <h3 style={{fontFamily:'fantasy'}}>DINE WITH US</h3>
            <div className="card" style={{ width: '18rem', marginTop : '40px' }}>
                <img src={Bar} className="card-img-top" alt="Service" />
                <div className="card-body">
                    <h5 className="card-title">COFFEE STOP</h5>
                    <p className="card-text">
                    A cozy café perfect for a quick coffee break, offering a relaxed atmosphere with light bites and refreshing beverages.
                    </p>
                    <h5 style={{fontFamily:'ui-sans-serif', fontStyle:'initial',color:'GrayText'}}>Operating Hours: 07.00 am - 12.00 midnight</h5>
                </div>
            </div>

            <div className="card" style={{ width: '18rem', marginTop : '40px' }}>
                <img src={grill} className="card-img-top" alt="Service" />
                <div className="card-body">
                    <h5 className="card-title">THE LONDON GRILL</h5>
                    <p className="card-text">
                    An elegant dining experience featuring premium grilled meats and seafood, inspired by classic London cuisine.
                    </p>
                    <h5 style={{fontFamily:'ui-sans-serif', fontStyle:'initial',color:'GrayText'}}>Operating Hours: 07.00 am - 11.00 pm</h5>
                    
                </div>
            </div>
            <div className="card" style={{ width: '18rem', marginTop : '40px' }}>
                <img src={tea} className="card-img-top" alt="Service" />
                <div className="card-body">
                    <h5 className="card-title">TEA LOUNGE</h5>
                    <p className="card-text">
                    A charming space to unwind with a fine selection of teas and light snacks, ideal for a leisurely afternoon.
                    </p>
                    <h5 style={{fontFamily:'ui-sans-serif', fontStyle:'initial',color:'GrayText'}}>Operating Hours: 10.00 am - 10.00 pm</h5>
                    
                </div>
            </div>
            <div className="card" style={{ width: '18rem', marginTop : '40px' }}>
                <img src={bar} className="card-img-top" alt="Service" />
                <div className="card-body">
                    <h5 className="card-title">BREEZE BAR</h5>
                    <p className="card-text">
                    A lively bar setting where guests can enjoy tropical cocktails, light meals, and the cool coastal breeze.
                    </p>
                    <h5 style={{fontFamily:'ui-sans-serif', fontStyle:'initial',color:'GrayText'}}>Operating Hours: 10.00 am - 12.00 midnight</h5> 
                </div>
            </div>
            
        </div>
    );
}

export default Service;
