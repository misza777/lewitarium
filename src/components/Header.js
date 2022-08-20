import React from "react"
import { Link } from "gatsby"
import {
  FaHome,
  FaFacebookSquare,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa"
import { StaticImage } from "gatsby-plugin-image"

const Header = () => {
  return (
    <header>
      <div className="container">
        {/* <div className="container-fluid"> */}
        <div
          className="header d-md-flex justify-content-between align-items-center py-2 
					px-lg-3 px-2 mt-s-0 mt-xs-0 px-xl-4"
        >
          {/* <!-- logo --> */}
          <Link to="/" id="logo">
            <StaticImage
              className="logo"
              src="../images/lewitarium_logo.png"
              alt="logo lewitarium"
              placeholder="blurred"
              layout="fixed"
              background="transparent"
              width={210}
            />
          </Link>
          {/* //logo  */}

          {/* <!-- nav --> */}
          <div className="nav_w3ls">
            {/* <!-- //contact --> */}
            <div className="nav_contact mx-xl-2 mx-lg-2 pr-lg-1 mb-xl-2 mb-lg-2">
              <Link to="#kontakt">
                <FaEnvelope /> panorama@lewitarium.pl
              </Link>

              <Link to="#kontakt">
                <FaPhoneAlt /> 608 608 467
              </Link>

              <a
                href="https://www.facebook.com/FloatingGanbanyoku"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookSquare />
              </a>
            </div>
            {/* <!-- //contact --> */}
            {/* <!-- menu --> */}
            <nav>
              <label htmlFor="drop" className="toggle">
                Menu
              </label>
              <input type="checkbox" id="drop" />
              <ul className="menu my-2">
                {/* <!-- home icon --> */}
                <li>
                  <Link to="/" className="py-1 active homeicon bigger">
                    <FaHome />
                  </Link>
                </li>

                {/* <!-- O NAS --> */}
                <li className="mx-lg-4 mx-md-3 my-md-0 my-2">
                  <Link className="underline" to="#about">
                    O Nas
                  </Link>
                </li>
                {/* <!-- cennik --> */}
                <li className="mx-lg-4 mx-md-3 my-md-0 my-2">
                  <Link className="underline" to="pricing/main">
                    Cennik
                  </Link>
                </li>

                {/* <!-- kup voucher --> */}
                <li>
                  <Link
                    className="text-my-primary font-weight-bold underline bigger"
                    to="voucher"
                  >
                    KUP VOUCHER
                  </Link>
                </li>

                {/* <!-- First Tier Drop Down USLUGI --> */}
                <li className="mx-lg-4 mx-md-3 my-md-0 my-2">
                  <label htmlFor="drop-2" className="toggle toogle-2">
                    Oferta{" "}
                    <span
                      className="fa fa-angle-down"
                      aria-hidden="true"
                    ></span>
                  </label>
                  <Link to="#">
                    Oferta{" "}
                    <span
                      className="fa fa-angle-down"
                      aria-hidden="true"
                    ></span>
                  </Link>
                  <input type="checkbox" id="drop-2" />
                  <ul>
                    {/* <!-- <li><Link to="#services" className="drop-text">Floating</Link></li> --> */}
                    <li>
                      <Link to="floating.html" className="drop-text">
                        Floating
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="drop-text">
                        Sauna Ganbanyoku
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="drop-text">
                        Masaże
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="drop-text">
                        Zabiegi kosmetyczne
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="drop-text">
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link to="gallery.html" className="drop-text">
                        Galeria
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="drop-text">
                        Opinie klientów
                      </Link>
                    </li>
                    <li>
                      <Link to="regulamin.html" className="drop-text">
                        Regulamin
                      </Link>
                    </li>
                  </ul>
                </li>

                {/* <!-- kontakt --> */}
                <li>
                  <Link className="underline" to="contact.html">
                    Kontakt
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          {/* <!-- //nav --> */}
        </div>
      </div>
    </header>
  )
}

export default Header
