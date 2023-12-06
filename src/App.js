import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faSoundcloud,
  faSpotify,
} from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import DOMPurify from "dompurify";

const BeatstoreHTML = `<iframe src="https://player.beatstars.com/?storeId=142410" width="100%" height="800" style="min-width:1024px;"> -- none -- </iframe>`;
/*const safeBeatstoreHTML = DOMPurify.sanitize(BeatstoreHTML);*/

function App() {
  return (
    <div className="App">
      <div
        className="Homepage"
        style={{
          backgroundImage: `url('https://i.pinimg.com/564x/6e/2a/d8/6e2ad8a3aeebf3741aa5b3cf1fdb0b90.jpg')`,
        }}
      >
        <div className="Navbar" /*ref={homeRef}*/>
          <div className="Navbar-wrapper">
            <h3 className="Logo">PRODLUNA</h3>
            <ul className="Logo-label">
              <li className="Producer-label">PRODUCER</li>
              <li className="Musician-label">MUSICIAN</li>
            </ul>
          </div>

          <div className="Navbar-wrapper-right">
            <ul className="Header-links">
              <li className="Catalogue">Beat Catalogue</li>
              <li className="Pricing">Pricing</li>
              <li className="Credits">Credits</li>
              <li className="Contact">Contact</li>
            </ul>
          </div>
        </div>

        <div className="Homepage-wrapper">
          <div className="Bio-wrapper">
            <div className="Bio-title">YOUR NEXT HIT STARTS HERE</div>
            <div className="Bio-ul-wrapper">
              <ul className="Bio-ul">
                <li className="li-item">All beats are original</li>
                <li className="li-item">Simple licensing options</li>
                <li className="li-item">
                  Reach out to me for other enquiries/ quotes
                </li>
              </ul>

              <div className="Sticky-icons">
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
      </div>

      <div className="Beat-Catalogue">
        <div className="Catalogue-title">
          <div className="Title">BEAT STORE</div>
        </div>
        <div className="BeatStore-wrapper">
          <div className='BeatStore' dangerouslySetInnerHTML={{ __html: BeatstoreHTML }} />
        </div>
      </div>

      <div className="Pricing-div">
        <div className="Catalogue-title">
          <div className="Title">PRICING</div>
        </div>

        <div className='Pricing-plan'>
          <div className='Pricing-Grid'>
            <div className='Grid-Item'>
              <div className='Card-Title'>
                <div className='License-type'>MP3 License</div>
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


      <div className="Contact-Div">
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
}
