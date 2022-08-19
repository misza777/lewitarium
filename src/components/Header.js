import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <header>
      <div className="container-fluid">
        <div
          className="header d-md-flex justify-content-between align-items-center py-2 
					px-lg-3 px-2 mt-s-0 mt-xs-0 px-xl-4"
        >
          {/* <!-- logo --> */}
          <div id="logo">
            {/* <h1><a className="" href="index.html"> */}
            {/* <img className='logo' src="../images/lewitarium_logo.png" */}
            {/* alt="logo lewitarium"></a></h1> */}
          </div>
          {/* //logo  */}

          {/* <!-- nav --> */}
          <div className="nav_w3ls">
            {/* <!-- //contact --> */}
            <div className="nav_contact mx-xl-2 mx-lg-2 pr-lg-1 mb-xl-2 mb-lg-2">
              <Link to="/contact">
                <span className="fa fa-envelope"></span>panorama@lewitarium.pl
              </Link>

              <a href="#kontakt">
                <span className="fa fa-phone"></span>608 608 467
              </a>

              <a
                href="https://www.facebook.com/FloatingGanbanyoku"
                target="_blank"
                rel="noreferrer"
              >
                <span className="fa fa-facebook-official"></span>
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
                  <a href="index.html" className=" py-1 active homeicon bigger">
                    <i className="fa fa-home" aria-hidden="true"></i>
                  </a>
                </li>

                {/* <!-- O NAS --> */}
                <li className="mx-lg-4 mx-md-3 my-md-0 my-2">
                  <a className="underline" href="#about">
                    O Nas
                  </a>
                </li>
                {/* <!-- cennik --> */}
                <li className="mx-lg-4 mx-md-3 my-md-0 my-2">
                  <a className="underline" href="pricing_main.html">
                    Cennik
                  </a>
                </li>

                {/* <!-- kup voucher --> */}
                <li>
                  <a
                    className="text-my-primary font-weight-bold underline bigger"
                    href="voucher.html"
                  >
                    KUP VOUCHER
                  </a>
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
                  <a href="#">
                    Oferta{" "}
                    <span
                      className="fa fa-angle-down"
                      aria-hidden="true"
                    ></span>
                  </a>
                  <input type="checkbox" id="drop-2" />
                  <ul>
                    {/* <!-- <li><a href="#services" className="drop-text">Floating</a></li> --> */}
                    <li>
                      <a href="floating.html" className="drop-text">
                        Floating
                      </a>
                    </li>
                    <li>
                      <a href="#" className="drop-text">
                        Sauna Ganbanyoku
                      </a>
                    </li>
                    <li>
                      <a href="#" className="drop-text">
                        Masaże
                      </a>
                    </li>
                    <li>
                      <a href="#" className="drop-text">
                        Zabiegi kosmetyczne
                      </a>
                    </li>
                    <li>
                      <a href="#" className="drop-text">
                        Blog
                      </a>
                    </li>
                    {/* <!-- <li><a href="single.html" className="drop-text">Single Page</a></li> --> */}
                    <li>
                      <a href="gallery.html" className="drop-text">
                        Galeria
                      </a>
                    </li>
                    {/* <!-- <li><a href="#testi" className="drop-text">Opinie klientów</a></li> --> */}
                    <li>
                      <a href="#" className="drop-text">
                        Opinie klientów
                      </a>
                    </li>
                    <li>
                      <a href="regulamin.html" className="drop-text">
                        Regulamin
                      </a>
                    </li>
                  </ul>
                </li>

                {/* <!-- kontakt --> */}
                <li>
                  <a className="underline" href="contact.html">
                    Kontakt
                  </a>
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
