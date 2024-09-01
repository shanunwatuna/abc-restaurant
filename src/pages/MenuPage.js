import React from "react";
function MenuPage() {
  return (
    <div>
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
              src="assets/Menu1.jpg"
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
    </div>
  );
}
export default MenuPage;
