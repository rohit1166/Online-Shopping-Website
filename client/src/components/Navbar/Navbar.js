import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark-subtle mt-2">
    <div className="container-fluid mx-5">
      <Link to="#" className="navbar-brand ms-md-5 ms-md-0 fs-3 ha">WebsiteName</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link ms-md-2 ms-md-0" aria-current="page">Home</Link>
          </li>
          <li className="nav-item dropdown">
            <Link to="#" className="nav-link dropdown-toggle ms-md-2 ms-md-0" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              Items
            </Link>
            <ul className="dropdown-menu">
              <li><Link to="/mobile" className="dropdown-item">Mobiles</Link></li>
              <li><Link to="/laptop" className="dropdown-item">Laptops</Link></li>
              <li><Link to="/tablet" className="dropdown-item">Tablets</Link></li>
            </ul>
          </li>
          {/* <li className="nav-item">
            <Link to="/mobile" className="nav-link ms-md-2 ms-md-0">Mobiles</Link>
          </li>
          <li className="nav-item">
            <Link to="/laptop" className="nav-link ms-md-2 ms-md-0">Laptops</Link>
          </li>
          <li className="nav-item">
            <Link to="/tablet" className="nav-link ms-md-2 ms-md-0">Tablets</Link>
          </li> */}
          <li className="nav-item">
            <Link to="/about" className="nav-link ms-md-2 ms-md-0">About us</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link ms-md-2 ms-md-0">Contact</Link>
          </li>
          <li className="nav-item">
            <Link to="/check-order" className="nav-link ms-md-2 ms-md-0 me-5 rounded active border bag text-center">Login</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar