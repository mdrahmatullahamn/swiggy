import { useEffect, useState } from "react";
import "./component.css";


function AddToCart() {
  const [userStatus, setUserStatus] = useState(false);
  const [cartData, setCartData] = useState();
  const [userName, setUserName] = useState("");
  const[userloginData, setUserLoginData] = useState("")
  useEffect(() => {
    displayCart();
  }, []);

  function displayCart() {

    var dataFromLS = JSON.parse(localStorage.getItem("userInfo"));
    var currentUser = JSON.parse(localStorage.getItem("current-user"));
    setUserLoginData(currentUser);

    for (var i = 0; i < dataFromLS.length; i++) {
      if (dataFromLS[i].email === currentUser && dataFromLS[i].cartData) {
        setUserStatus(true);
        setUserName(dataFromLS[i].name);
        setCartData(dataFromLS[i].cartData);
      }
    }
  }

  return (
    <div id="cart">
      <div>
        <div className="navbar">
          <div>
            <div className="navbar-l adjust-width-l">
              <div>
                <img
                  // src="https://logosandtypes.com/wp-content/uploads/2021/01/swiggy.svg"
                  // alt="logo"
                />
              </div>
              <div>
                <p>
                  <strong>SECURE CHECKOUT </strong>
                </p>
              </div>
            </div>

            <div className="navbar-r adjust-width-r">
              <div>
                <i className="fa-regular fa-circle-question"></i>
                <p>Help</p>
              </div>
              <div>
                <i className="fa-regular fa-user"></i>
                {userloginData ? <p>{userName}</p> : <p>Sign In </p>}
              </div>
            </div>
          </div>
        </div>
      </div>

      {userStatus ? (
        <div className="cart-order">
          <div>
            <div className="cart-order-l">
              <div>
                <div className="cart-order-l-userInfo">
                  {/* <i className="fa-solid fa-user"></i> */}
                  <p>Logged in</p>
                  {/* <i className="fa-solid fa-circle-check"></i> */}
                </div>
                <div className="cart-order-l-user-details">
                  <p>{userName}</p>
                </div>
              </div>

              <div>
                <div className="cart-order-l-address-top">
                  <h3>Add a delivery address</h3>
                  <p>You seem to be in the new location</p>
                </div>
                <div className="cart-order-l-address-bot">
                  <div>
                    <div>
                      {/* <i className="fa-solid fa-location-dot"></i> */}
                    </div>
                    <div>
                      <h3>Add New Address</h3>
                      <p>Malad, Malad West, Mumbai, Maharashtra, India</p>
                    </div>
                  </div>
                  <button>ADD NEW</button>
                </div>
              </div>
              <div>
                <div className="cart-order-l-payment">
                  {/* <i className="fa-regular fa-credit-card"></i> */}
                  <h3>Payment</h3>
                </div>
              </div>
            </div>
            <div className="cart-order-r">
              <div className="display-order">
                {cartData &&
                  cartData.map((e, i) => (
                    <div key={i}>
                      <div>
                        {" "}
                        <img src={e.strDrinkThumb} alt="product" />
                      </div>
                      <div>
                        <h3>{e.strAlcoholic}</h3>
                        <p>Malad West</p>
                      </div>
                    </div>
                  ))}
              </div>
              <div className="apply-coupon">
                <i className="fa-solid fa-rug"></i>
                <p>Apply Coupon</p>
              </div>
              <div className="bill">
                <div className="bill-details">
                  <h4>Bill Details</h4>
                  <div>
                    <div>
                      <p>Item Total</p>
                      <p>₹ 865</p>
                    </div>
                    <div>
                      <p>Delivery Fee | 1.3 kms</p>
                      <p>₹ 65</p>
                    </div>
                    <div>
                      <p>Govt Taxes & Other Charges</p>
                      <p>₹ 73.45</p>
                    </div>
                  </div>
                </div>
                <div className="pay-bill">
                  <p>TO PAY</p>
                  <p>₹ 939</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="cart-top">
          <div>
            <div>
              <img
                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"
                alt="kitchen"
              />
            </div>
            <h3>Your cart is empty</h3>
            <p>You can go to home page to view more restaurants</p>
            <button>SEE RESTAURANTS NEAR YOU</button>
          </div>
        </div>
      )}
    </div>
  );
}
export default AddToCart;