import React, { useState, useEffect } from 'react';
import Images from "./ImagesImport";
import "../styles/components.css";
import { Link } from 'react-router-dom';
import '../styles/footer.css';
import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Footer = () => {

  const [data, setData] = useState({
    email: '',
  })
  const [error, setError] = useState('');

  const onHandleChange = async (e) => {
    e.preventDefault()
    const email = { data }
    const response = await fetch('/api/newsletter', {
      method: 'POST',
      body: JSON.stringify(email),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    console.log(data)
    const json = await response.json()

    if (!response.ok) {
      console.log(json.error)
      setError(json.error)
      toast.error(json.error);

    }
    if (response.ok) {
      console.log("subscribe")
      setError("")
      toast.success(json.msg);
    }
  }

  return (
    <>
      <div className='footer-container'>
        <div className='footer-logo-container'>
          <img src={Images.Logo} />
        </div>
        <div className='footer-content-container'>
          <div className='col-md-12 row '>
            <div className='col-md-3 quick-reports'>
              <div className='quick-links footer-link-text'>
                <h3>Quick Links</h3>
                <ul>
                  <a href='/about'><li>About Us</li></a>
                  <a href=''><li>Terms & Conditions</li></a>
                  <a href=''><li>FAQ</li></a>
                </ul>
              </div>
              <div className='reports footer-link-text'>
                <h3>Reports</h3>
                <ul>
                  <a href=''><li>Latest Report</li></a>
                  <a href='/forthcomings-reports'><li>Forthcoming Report</li></a>
                  <a href='/automotive/auto-parts'><li>All Industry</li></a>
                </ul>
              </div>
            </div>
            <div className='col-md-3'>
              <div className='footer-link-text'>
                <h3>Industries</h3>
                <ul>
                  <a href='/automotive/auto-parts'><li>Automotive</li></a>
                  <a href='/heavyequipment/machinery'><li>Heavy Engineering Equipment</li></a>
                  <a href='/chemicals/adhesive_sealants'><li>Chemicals & Materials</li></a>
                  <a href='/consumer/retail'><li>Consumer Goods</li></a>
                  <a href='/defence/infantry_weapons'><li>Defense</li></a>
                  <a href='/electronics/embedded'><li>Electronics & Semiconductors</li></a>
                  <a href='/factory/controls'><li>Factory Automation</li></a>
                  <a href='/energy/environmental'><li>Energy & Natural Resources</li></a>
                  <a href='/food/food_ingredients'><li>Food & Beverage</li></a>
                  <a href='/packaging/packaging_prodcts'><li>Packaging</li></a>
                </ul>
              </div>
            </div>
            <div className='col-md-3 mb-3'>
              <div className='corporate-us'>
              <div className='footer-link-text'>
                <h3>Corporate HQ</h3>
                <p>lorem ipsum dolor siet</p>
              </div>
              <div className='footer-link-text'>
                <h3>US Sales Office</h3>
                <p>lorem ipsum dolor siet</p>
              </div>
              </div>
              <div className='footer-link-text'>
                <h3>Payment method</h3>
                <div className='payment-img'>
                  <img src={Images.Visa} />
                  <img src={Images.MasterCard} />
                  <img src={Images.PayPal} />
                </div>
              </div>
            </div>
            <div className='col-md-3 reach-us-section'>
              <div className='footer-link-text'>
                <h3>Reach Us</h3>
                <div className='reach-us'>
                  <div>
                    <div style={{ display: 'flex', gap: '19px' }}>
                      <div>
                        <img src={Images.call} />
                      </div>
                      <div className='footer-contact-sec'>
                        <div>
                          <img src={Images.american_flag} />
                          <a href="tel:+12066561175"><span>+12066561175</span></a>
                        </div>
                        <div>
                          <img src={Images.london_flag} />
                          <a href="tel:+442066561175"><span>+442066561175</span></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div style={{ display: 'flex', gap: '19px', marginTop: "16px" }}>
                      <div>
                        <img src={Images.mail} />
                      </div>
                      <div className='footer-contact-sec'>
                        <div>
                          <a href="Sales@elloramarketresearch.com"><span>Sales@elloramarketresearch.com</span></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Newsletter form */}
                <div className="newsletter-form">
                  <h3>Contact us</h3>
                  <form onSubmit={onHandleChange}>
                    <input name='email' type='email' placeholder='Enter Email' onChange={(e) => setData(e.target.value)} value={data.email} />
                    <button type='submit'>Submit</button>
                  </form>
                  {error && <div style={{ color: "red" }}>{error}</div>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="colored"
        transition={Flip}
      />
    </>
  )
}

export default Footer