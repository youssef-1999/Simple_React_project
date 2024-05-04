import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div>
      <nav class="navbar customize_navbar  navbar-expand-lg navbar-light fixed-top top-0 " id="home" >
  <div class="container">
    <a class="navbar-brand text-white "  href="#home"><h1>START FRAMEWORK</h1></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse  " id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
       
        <li class="nav-item">
          <a class="nav-link" href="#about">ABOUT</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#portflio">PORTFLIO</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#contact">CONTACT</a>
        </li>
       
       
      </ul>
     
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
