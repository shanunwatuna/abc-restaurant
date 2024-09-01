import React from "react";

function Navigation() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-transparent">
        <div class="container-fluid">
          <a class="navbar-brand text-white ps-5" href="#home">
            <div
              id="content"
              className="col-6 d-flex justify-content-center align-items-center"
            >
              <img src="assets/Loogo1.png" alt="Loogo" className="w-50 col-6" />
            </div>
          </a>
          <div class="" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link text-light" aria-current="page" href="#home">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" href="#about">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" href="#service">
                  Service
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" href="#gallery">
                  Gallery
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" href="#menu">
                  Menu
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" href="#reservation">
                  Reservation
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
