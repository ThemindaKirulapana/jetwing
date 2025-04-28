import React from 'react'

function Footer() {
  return (
    <footer className="bg-black text-white px-6 md:px-26 lg:px-28 py-15">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 ">
      
      
      <div style={{ marginTop: '20px',marginLeft: '20px' }}>
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <p className="text-gray-300">123, Jetwing Street, Colombo, Sri Lanka</p>
        <p className="text-gray-300 mt-2">Phone: +94 11 2345678/ + 94 11 2550200</p>
        <p className="text-gray-300">Email: info@jetwinghotels.com</p>
      </div>
    </div>
  
    <div className="text-center text-gray-400 mt-10 border-t border-gray-700 pt-4">
      © 2025 Jetwing Hotels. All rights reserved.
    </div>
  </footer>
    
  )
}

export default Footer