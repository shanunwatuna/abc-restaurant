import React from "react";
import { Link } from 'react-router-dom';
import Navigation from "../component/Navigation";

function LandingPage() {
  return (
    <div id="homepage" className="container-fluid m-0 p-0 main-container">
      <div className="bg-dark vh-100 bg-opacity-75">
        {/* Navigation */}
        <div id="navigation" className="w-100 h-10 sticky-top">
          <Navigation />
        </div>

        {/* Home Page */}
        <div id="content" className="h-90 w-100 m-0 row">
          <div id="content" className="col-6 text-white">
            <div className="h-75 d-flex flex-column justify-content-center text-start ps-5">
              <div className="fs-1 fw-bold">Enjoy Our Delicious Food</div>
              <div className="text-start fs-4 mt-3">
                Delightful attractive or pleasing in an endering way, often with
                unique decor or ambiance.
              </div>
            </div>
            <div className="d-flex justify-content-center ps-5">
              <div className="pe-3 w-50">
                <Link to="/login">
                  <button className="w-100 p-2 rounded fw-semibold btn btn-light">
                    Login
                  </button>
                </Link>
              </div>
              <div className="w-50">
                <button className="w-100 p-2 rounded fw-semibold btn btn-outline-secondary">
                  Signup
                </button>
              </div>
            </div>
          </div>
          <div
            id="content"
            className="col-6 d-flex justify-content-center align-items-center"
          >
            <img
              src="assets/food-plate.png"
              alt="food plate"
              className="w-75"
            />
          </div>
        </div>

        {/* About */}
        <div id="about" className="py-5 w-100">
          <div className="fs-1 fw-bold pb-3">
            <h1>About</h1>
          </div>
          <div className="d-flex w-100 justify-content-center ps-5">
            <div className="p-2 rounded text-start">
              <h2>Welcome to ABC Restaurant</h2>
              <div className="lh-lg">
                ABC Restaurant is a four-star Negombo lagoon restaurant offering
                panoramic views, refined accommodation, modern amenities, and
                delectable dining options. The hotel also serves as a dining
                destination, offering fine dining at Moyã, Catamaran Restaurant,
                Tree House, and The Pontoon. Private dining options include the
                Tree House and The Pontoon, accommodating up to 20 guests. The
                Grand Lawn or Sunset Deck offers a variety of cocktails and fine
                wines. ABC Restaurant is conveniently located just 10 minutes
                from Sri Lanka's international airport and Negombo.
              </div>
            </div>
            <div className="d-flex">
              <div className="d-flex flex-column align-items-end">
                <img src="assets/about.jpg" className="w-75" />
              </div>
              <div className="d-flex flex-column align-items-start justify-content-end">
                <img src="assets/about2.jpg" className="w-75" />
              </div>
            </div>
          </div>
        </div>

        {/* Service */}
        <div
          id="service"
          className="d-flex flex-column align-items-center py-4 bg-dark"
        >
          <div className="mb-3">
            <h1 className="text-white">Services</h1>
          </div>
          <div className="row w-100">
            <div className="col-4 py-4 d-flex justify-content-center">
              <div className="bg-white rounded-3 w-75 p-4">
                <div className="mb-4">
                  <img
                    src="assets/reservation.png"
                    alt="table reservation"
                    className="w-25"
                  />
                </div>
                <div>
                  <div className="fs-4">Table Reservation</div>
                  <div className="fw-lighter">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4 py-4 d-flex justify-content-center">
              <div className="bg-white rounded-3 w-75 p-4">
                <div className="mb-4">
                  <img
                    src="assets/Menu.png"
                    alt="table reservation"
                    className="w-25"
                  />
                </div>
                <div>
                  <div className="fs-4">Menu Browser</div>
                  <div className="fw-lighter">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4 py-4 d-flex justify-content-center">
              <div className="bg-white rounded-3 w-75 p-4">
                <div className="mb-4">
                  <img
                    src="assets/order-now.png"
                    alt="table reservation"
                    className="w-25"
                  />
                </div>
                <div>
                  <div className="fs-4">Online Order</div>
                  <div className="fw-lighter">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row w-100">
            <div className="col-4 py-4 d-flex justify-content-center">
              <div className="bg-white rounded-3 w-75 p-4">
                <div className="mb-4">
                  <img
                    src="assets/branchlocator.png"
                    alt="branch locator"
                    className="w-25"
                  />
                </div>
                <div>
                  <div className="fs-4">Branch Locator</div>
                  <div className="fw-lighter">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4 py-4 d-flex justify-content-center">
              <div className="bg-white rounded-3 w-75 p-4">
                <div className="mb-4">
                  <img
                    src="assets/feedback.png"
                    alt="customer feedback"
                    className="w-25"
                  />
                </div>
                <div>
                  <div className="fs-4">Customer Feedback</div>
                  <div className="fw-lighter">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div id="gallery" className="pt-5 pb-4">
          <div className="mb-3">
            <h1>Gallery</h1>
          </div>
          <div className="vh-100 p-3 d-flex justify-content-between">
            <div className="fs-1 h-100 d-flex align-items-center">&lt;</div>
            <div className="w-100 h-100 px-2 d-flex align-items-center justify-content-center">
              <img
                src="assets/about.jpg"
                alt="gallery 1"
                className="object-fit-cover w-100 h-100"
              />
            </div>
            <div className="fs-1 h-100 d-flex align-items-center">&gt;</div>
          </div>
        </div>

        {/* Menu */}
        <div id="menu" className="bg-dark pt-5 pb-4">
          <div className="mb-3">
            <h1 className="text-white">Menu</h1>
          </div>
          <div className="text-white d-flex">
            <div className="w-50">
              <div className="mb-2 fs-5 fs-semibold">Main Course</div>
              <div className="ms-5">
                <table className="table table-dark table-striped w-100 main-course ">
                  <tbody>
                    <tr>
                      <td>Chees Burger</td>
                      <td>850</td>
                    </tr>
                    <tr>
                      <td>Chees Sandwich</td>
                      <td>450</td>
                    </tr>
                    <tr>
                      <td>Chicken Burger</td>
                      <td>750</td>
                    </tr>
                    <tr>
                      <td>Spicy Chicken</td>
                      <td>600</td>
                    </tr>
                    <tr>
                      <td>Pizza</td>
                      <td>1100</td>
                    </tr>
                    <tr>
                      <td>Hot Dog</td>
                      <td>750</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="w-50">
              <img
                src="assets/chessBurger.jpg"
                alt="menu 1"
                className="object-fit-cover w-75"
              />
            </div>
          </div>

          <div className=" d-flex mt-4 bg-white py-3">
            <div className="w-50">
              <img
                src="assets/frenchfrice.jpg"
                alt="menu 1"
                className="object-fit-cover w-50"
              />
            </div>
            <div className="w-50">
              <div className="mb-2 fs-5 fs-semibold">Appertize</div>
              <div className="me-5">
                <table className="table table-striped w-100 main-course ">
                  <tbody>
                    <tr>
                      <td>Fruit Salad</td>
                      <td>450</td>
                    </tr>
                    <tr>
                      <td>French Fries</td>
                      <td>1100</td>
                    </tr>
                    <tr>
                      <td>Sandwich</td>
                      <td>350</td>
                    </tr>
                    <tr>
                      <td>Nuggets</td>
                      <td>500</td>
                    </tr>
                    <tr>
                      <td>Cocktail</td>
                      <td>790</td>
                    </tr>
                    <tr>
                      <td>Spring Roll</td>
                      <td>1200</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="text-white d-flex pt-4">
            <div className="w-50">
              <div className="mb-2 fs-5 fs-semibold">Beverages</div>
              <div className="ms-5">
                <table className="table table-dark table-striped w-100 main-course ">
                  <tbody>
                    <tr>
                      <td>Milk Shake</td>
                      <td>700</td>
                    </tr>
                    <tr>
                      <td>Ice Tea</td>
                      <td>450</td>
                    </tr>
                    <tr>
                      <td>Orange Juice</td>
                      <td>550</td>
                    </tr>
                    <tr>
                      <td>Lemmon Juice</td>
                      <td>400</td>
                    </tr>
                    <tr>
                      <td>Coffee</td>
                      <td>300</td>
                    </tr>
                    <tr>
                      <td>Ice Milo</td>
                      <td>750</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="w-50">
              <img
                src="assets/Milo.jpg"
                alt="menu 1"
                className="object-fit-cover w-50"
              />
            </div>
          </div>
        </div>

        {/* Reservation */}
        <div id="reservation" className="py-4">
          <div>
            <h1>Reservation</h1>
          </div>
          <div>
            <form className="py-3">
              <div className="d-flex px-5">
                <div class="mb-3 w-50 me-5">
                  <label for="branch" class="form-label w-100 text-start ps-2">
                    Branch
                  </label>
                  <select class="form-select" aria-label="">
                    <option selected>Select branch</option>
                    <option value="Colombo">Colombo</option>
                    <option value="Galle">Galle</option>
                    <option value="Kandy">Kandy</option>
                  </select>
                </div>
                <div class="mb-3 w-50">
                  <label for="time" class="form-label w-100 text-start ps-2">
                    Time
                  </label>
                  <input type="datetime-local" class="form-control" id="time" />
                </div>
              </div>
              <div className="d-flex px-5 mt-4">
                <div class="mb-3 w-50 me-5">
                  <label class="form-label w-100 text-start ps-2" for="pax">
                    Pax
                  </label>
                  <input type="text" class="form-control" id="pax" />
                </div>
                <div class="mb-3 w-50">
                  <label class="form-label w-100 text-start ps-2" for="phone">
                    Phone
                  </label>
                  <input type="text" class="form-control" id="phone" />
                </div>
              </div>
              <button type="submit" class="btn btn-dark w-25 mt-3">
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Contact */}
        <div id="contact" className="bg-dark text-white py-5">
          <div className="pb-3 text-start ps-5">
            <h1>Contact</h1>
          </div>
          <div className="d-flex">
            <div className="w-50 text-start ps-5">
              <div className="mb-1">ABC Restaurant</div>
              <div className="mb-1">No. 10, Flower Road, Colombo</div>
              <div className="mb-1">Tel: 0112-236-569</div>
              <div className="mb-1">Email: abcrestaurant@abc.lk</div>
            </div>
            <div className="w-50 d-flex justify-content-center align-items-end">
              <div>&copy; All Right Reserved 2024 ABC Restaurant</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
