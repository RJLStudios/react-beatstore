import "./App.css";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faSoundcloud,
  faSpotify,
  faBars,
} from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import DOMPurify from "dompurify";
import { BrowserRouter } from "react-router-dom";
import {Hashlink as Link} from 'react-router-hash-link'
import Bussy from './Images/Bussy.jpg';

const BeatstoreHTML = `<iframe src="https://player.beatstars.com/?storeId=142410" width="100%" height="800" style="min-width:400px margin: 0 auto;"> -- none -- </iframe>`;
/*const safeBeatstoreHTML = DOMPurify.sanitize(BeatstoreHTML);*/

function App() {
// scroll progress bar function 
const [scrollPercentage, setScrollPercentage] = useState(0);

useEffect(()=>{

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollY = window.scrollY;
  
    const scrollPercent = (scrollY / (documentHeight - windowHeight))*100;
  
    setScrollPercentage(scrollPercent)
    console.log(scrollPercent);
  }

  window.addEventListener('scroll', handleScroll);

  return()=>{
    window.removeEventListener('scroll', handleScroll)
  }
},[]);

// change nav colour on scroll 

const [opacity, setOpacity] = useState(false)
const changeOpacity = () => {
  if (window.scrollY >= 90) {
    setOpacity(true)
  } else {
    setOpacity(false)
  }
}

window.addEventListener('scroll', changeOpacity)

  const catalogRef = useRef(null);
  const pricingRef = useRef(null);
  const ctoRef = useRef(null);

  function scrollToComponent(ref) {
    if (ref.current) {
      ref.current.scrollIntoView ({ behaviour : 'smooth'})
    }
  }
  const catalogScrollToComponent = () => {
    scrollToComponent(catalogRef);
  }

  const pricingScrollToComponent = () => {
    scrollToComponent(pricingRef);
  }

  const ctoScrollToComponent = () => {
    scrollToComponent(ctoRef);
  }


  return (
    <div className="App" >
      <div
        className="Homepage"
        style={{
          backgroundImage: `url(${Bussy})`,
          
        }}
      >
        <div className={opacity ? 'Navbar Navbar-bg' : 'Navbar'} /*ref={homeRef}*/>
          <div className="Navbar-wrapper">
            <h3 className="Logo">PRODLUNA</h3>
            <ul className="Logo-label">
              <li className="Producer-label">PRODUCER</li>
              <li className="Musician-label">MUSICIAN</li>
            </ul>

            <div className="Navbar-wrapper-right">
            <div className='Nav-links'>
            <ul className="Header-links">
              <li className="Catalogue" onClick={catalogScrollToComponent}>Beat Catalogue</li>
              <li className="Pricing" onClick={pricingScrollToComponent}>Pricing</li>
              <li className="Credits">Credits</li>
              <li className="Contact" onClick={ctoScrollToComponent}>Contact</li>
            </ul>
            </div>
             </div>
          </div>

          <div className='Progress-container'>
          <div className='Progress-fill'
               style={{width: `${scrollPercentage}%`}}
          ></div>
          </div>
        </div>

        <div className="Homepage-wrapper">
          <div className="Bio-wrapper">
            <div className="Bio-title">YOUR NEXT HIT STARTS HERE</div>
            <div className="Bio-ul-wrapper">
              <button className='Homepage-CTO-Btn'>GET IN CONTACT</button>
            </div>

              <div className="Sticky-icon">
                <ul class="Icon-ul">
                  <a href="#">
                    <li className="Soundcloud">
                      <FontAwesomeIcon icon={faSoundcloud} />
                    </li>
                  </a>
                  <a href="#">
                    <li className="Spotify">
                      <FontAwesomeIcon icon={faSpotify} />
                    </li>
                  </a>
                  <a href="#">
                    <li className="Twitter">
                      <FontAwesomeIcon icon={faTwitter} />
                    </li>
                  </a>
                  <a href="#">
                    <li className="Youtube">
                      <FontAwesomeIcon icon={faYoutube} />
                    </li>
                  </a>
                  <a href="#">
                    <li className="Instagram">
                      <FontAwesomeIcon icon={faInstagram} />
                    </li>
                  </a>
                </ul>
              </div>
            
          </div>
        </div>
      </div>

      <div className="Beat-Catalogue" ref={catalogRef}>
        <div className="Catalogue-title">
          <div className="Title">BEAT STORE</div>
        </div>
        <div className="BeatStore-wrapper" >
          <div className='BeatStore' style={{ width: '100%'}} dangerouslySetInnerHTML={{ __html: BeatstoreHTML }} />
        </div>
      </div>

      <div className="Pricing-div" ref={pricingRef}>
        <div className="Catalogue-title">
          <div className="Title">PRICING</div>
        </div>

        <div className='Pricing-plan'>
          <div className='Pricing-Grid'>
            <div className='Grid-Item'>
              <div className='Card-Title'>
                <div className='License-type'>Basic Lease</div>
                <p className='From'>From </p>
                <div className='Prices'>$29.95</div>
                <div className="File-Type">Tagged MP3</div>

              </div>

              <div className='Card-Content Card-A'>
                <ul className='License-li-A'>
                  <li className=''>Non-Exclusive License</li>
                  <li className=''>Distribution limit 10,000</li>
                  <li className=''>1,000,000 Audio Streams</li>
                  <li className=''>1 Music Video</li>
                  <li className=''>Radio Play Rights</li>
                </ul>
              </div>

              <div className='License-Btn-Div'>
                <button className="License-Btn">READ LICENSE</button>
              </div>

            </div>

            <div className='Grid-Item'>
              <div className='Card-Title'>
                <div className='License-type'>Premium Lease</div>
                <p className='From'>From </p>
                <div className='Prices'>$49.95</div>
                <div className="File-Type">Tagged MP3/WAV</div>

              </div>

              <div className='Card-Content Card-A'>
                <ul className='License-li-A'>
                  <li className=''>Non-Exclusive License</li>
                  <li className=''>Distribution limit 10,000</li>
                  <li className=''>1,000,000 Audio Streams</li>
                  <li className=''>1 Music Video</li>
                  <li className=''>Radio Play Rights</li>
                </ul>
              </div>

              <div className='License-Btn-Div'>
                <button className="License-Btn">READ LICENSE</button>
              </div>


            </div>

            <div className='Grid-Item'>
              <div className='Card-Title'>
                <div className='License-type'>Exclusive License</div>
                <p className='From'>From </p>
                <div className='Prices'>$149.95</div>
                <div className="File-Type">Tagged MP3/WAV</div>

              </div>

              <div className='Card-Content Card-A'>
                <ul className='License-li-A'>
                  <li className=''>Non-Exclusive License</li>
                  <li className=''>Distribution limit 10,000</li>
                  <li className=''>1,000,000 Audio Streams</li>
                  <li className=''>1 Music Video</li>
                  <li className=''>Radio Play Rights</li>
                </ul>
              </div>

              <div className='License-Btn-Div'>
                <button className="License-Btn">READ LICENSE</button>
              </div>


            </div>


          </div>

        </div>
      </div>

      <div className="Credits"></div>


      <div className="Contact-Div"  ref={ctoRef}>
        <div className='CTO-Wrapper'>
          <div className='CTO-box-left-wrapper'>
            <div className='CTO-box-left'>
              <div className='CTO-Title'> Got exclusives?
              </div>
              <div className='CTO-Para'> Have a question about exclusive licensing, bookings or just want to say hi?
              </div>
              <form id='contact-form' /*onsubmit={this.handleSubmit.bind(this)} method="POST"*/>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" className="form-control" placeholder="Enter your name" />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter your email"/>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea className="form-control" rows="5" placeholder="Enter your email"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">SUBMIT</button>
              </form>
            </div>
          </div>

          <div
            className='CTO-box-right-wrapper'
            style={{
              backgroundImage: `url('https://i.pinimg.com/originals/73/f1/c3/73f1c31a01dbbf150207c2268fb9a702.jpg')`,
            }}
          >
          </div>

        </div>
      </div>

      <div className="Footer">
        <div className='Footer-Title Logo'>PRODLUNA</div>
        <div className='Footer-bio'></div>
        <div className='Footer-icons'>
        <ul class="Icon-ul-footer">
                  <a href="# ">
                    <li className="Soundcloud Circle">
                      <FontAwesomeIcon icon={faSoundcloud} />
                    </li>
                  </a>
                  <a href="#">
                    <li className="Spotify Circle">
                      <FontAwesomeIcon icon={faSpotify} />
                    </li>
                  </a>
                  <a href="#">
                    <li className="Twitter Circle">
                      <FontAwesomeIcon icon={faTwitter} />
                    </li>
                  </a>
                  <a href="#">
                    <li className="Youtube Circle">
                      <FontAwesomeIcon icon={faYoutube} />
                    </li>
                  </a>
                  <a href="#">
                    <li className="Instagram Circle">
                      <FontAwesomeIcon icon={faInstagram} />
                    </li>
                  </a>
                </ul>
        </div>
        <div className='Footer-Copyright'>© PRODLUNA 2020-2024 </div>
      </div>
    </div>
  );
} export default App;
