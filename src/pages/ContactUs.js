import React from 'react'
import coffee from '../assests/tea.jpg'

function ContactUs() {
    return (
        <div className='container'>

            <h1 className='text-center mt-5'>Contact Us</h1>
            <div className="row">
                <div className="col-12">
                   
                    <img 
                        src={coffee}
                        alt="Jetwing Hotel" 
                        className="img-fluid" 
                        style={{ marginBottom: '20px', width: 'auto', height: '500px', borderRadius: '10px' ,marginTop: '20px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} 
                    />
                </div>
            </div>
            <form className="row g-3 mt-5 mb-5">
                <div class="row g-3">
                    <div class="col">
                    <label htmlFor="inputEmail4" className="form-label">First name</label>
                        <input type="text" className="form-control" placeholder="First name" aria-label="First name"/>
                    </div>
                    <div class="col">
                    <label htmlFor="inputEmail4" className="form-label">Last name</label>
                        <input type="text" className="form-control" placeholder="Last name" aria-label="Last name"/>
                    </div>
                </div>
               
                <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress2" className="form-label">Contact No</label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="077 167 2616" />
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress2" className="form-label">NIC Number</label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="200006899288" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputCity" className="form-label">City</label>
                    <input type="text" className="form-control" id="inputCity" />
                </div>
                <div className="col-md-4">
                    <label htmlFor="inputState" className="form-label">State</label>
                    <select id="inputState" className="form-select">
                        <option defaultValue>Choose...</option>
                        <option>...</option>
                    </select>
                </div>
                <div className="col-md-2">
                    <label htmlFor="inputZip" className="form-label">Zip</label>
                    <input type="text" className="form-control" id="inputZip" placeholder='80009' />
                </div>
                <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck" />
                        <label className="form-check-label" htmlFor="gridCheck">
                            Check me out
                        </label>
                    </div>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Send Inquire</button>
                </div>
            </form>
        </div>
    )
}

export default ContactUs
