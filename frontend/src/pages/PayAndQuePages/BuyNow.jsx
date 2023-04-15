import React from "react";
import BuyNowForm from "../../components/BuyNowForm";
import "../../styles/payandque.css";
import "../../styles/components.css";
import Images from "../../components/ImagesImport";

const BuyNow = () => {
  return (
    <>
      <div className="buy-now-container">
        {/* buy now top  */}
        <div className="buy_now_top">
        </div>
        <div className="row buy-now-main-container">
          <div className="col-lg-8 col-md-11 col-sm-0">
            <div className="buy-now-main-section">
              {/* button section  */}
              <div className="row buy-now-order-buttons">
                <div className="col-4">
                  <button className="order_btn">Order Details</button>
                </div>
                <div className="col-4">
                  <button className="payment_btn">Payment</button>
                </div>
                <div className="col-4">
                  <button className="confirm_btn">Confirmation</button>
                </div>
              </div>
              {/* Buy Now form  */}
              <div className="row">
                <BuyNowForm />
              </div>
            </div>
          </div>
          <div className="lg-mt-5 md-mt-5 col-lg-3 col-md-6 col-sm-12 buy-now-cards-section">
            {/* order summary card  */}
            <div className="order_container">
              <div className="d-flex flex-column px-3">
                <h2 className="order_heading mt-2">Order Summary</h2>
                <hr />
                <p className="order_energy">Energy Ball Market</p>
              </div>

              <div className="d-flex flex-column px-3">
                <div className="d-flex flex-row justify-content-between">
                  <p className="border_license">License Type:</p>
                  <select name="users" className="order_selcet">
                    <option value="single-user">Single User</option>
                    <option value="multi-user">Multi User</option>
                    <option value="corperate-user">Corperate User</option>
                  </select>
                </div>
                <hr className="order_hr" />

                <div className="d-flex flex-row justify-content-between">
                  <p className="price_para">Price:</p>
                  <p className="priceNum_para">$5795</p>
                </div>
              </div>

              <div className="px-3">
                <p>Apply promo Code </p>
                <form action="">
                  <input type="text" className="order_input" />
                  <button className="order_button ms-2">Submit</button>
                </form>
              </div>

              <div className="d-flex flex-row justify-content-between p-3">
                <p className="price_para">
                  Total:{" "}
                  <span className="order_span">
                    {"(Inclusive of all taxes)"}
                  </span>
                </p>
                <p className="priceNum_para">$5795</p>
              </div>
            </div>

            {/* payment methods  */}
            <div className="payment_method_container mt-4">
              <div className="p-4">
                <h4 className="payment_heading">Choose Payment Mode :</h4>
                <hr />
              </div>

              {/* radio buttons for payment methods  */}
              <div className="form-check mb-4 ms-3 ">
                <input
                  className="form-check-input "
                  type="radio"
                  name="users"
                  value="payment-option1"
                />
                <div className="d-flex justiy-content-between">
                  <img className='mx-4' src={Images.PayPal} alt="paypal" />
                  <img className='mx-3' src={Images.MasterCard} alt="mastercard" />
                  <img className='mx-3' src={Images.Visa} alt="visa" />
                </div>
              </div>

              <div className="form-check my-4 ms-3">
                <input
                  className="form-check-input "
                  type="radio"
                  name="users"
                  value="payment-option2"
                />
                <div className="d-flex justiy-content-between">
                  <img className='mx-3' src={Images.ICICI} alt="paypal" />
                  <img className='mx-3' src={Images.MasterCard} alt="mastercard" />
                  <img className='mx-3' src={Images.Visa} alt="visa" />
                </div>
              </div>

              <div className="form-check my-4 ms-3">
                <input
                  className="form-check-input "
                  type="radio"
                  name="users"
                  value="payment-option3"
                />
                <div className="d-flex justiy-content-between">
                  <img className='mx-3' src={Images.HDFC} alt="paypal" />
                  <img className='mx-3' src={Images.MasterCard} alt="mastercard" />
                  <img className='mx-3' src={Images.Visa} alt="visa" />
                </div>
              </div>

              <div className="form-check my-4 ms-3">
                <input
                  className="form-check-input "
                  type="radio"
                  name="users"
                  value="payment-option4 "
                />
                <div className="d-flex justiy-content-between">
                  <img className='mx-3' src={Images.axis} alt="paypal" />
                  <img className='mx-3' src={Images.MasterCard} alt="mastercard" />
                  <img className='mx-3' src={Images.Visa} alt="visa" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyNow;
