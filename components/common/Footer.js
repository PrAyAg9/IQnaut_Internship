/* eslint-disable react/no-unknown-property */
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer>
        <div
          className="footer__area footer__black"
          style={{ backgroundColor: "#0E1133", color: "#fff" }}
        >
          <div
            className="footer__top pt-95 pb-45"
            style={{ backgroundColor: "#0E1133", color: "#fff" }}
          >
            <div className="container">
              <div className="row">
                {/* Footer Widget 1 */}
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-7">
                  <div className="footer__widget footer-col-1 mb-50">
                    <div className="footer__logo">
                      <div className="logo">
                        <Link href="/" passHref>
                          <a>
                            <Image
                              src="/assets/img/logo/logo-white.png"
                              alt="Your School logo"
                              width={150}
                              height={50}
                              priority
                            />
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="footer__widget-content">
                      <div className="footer__widget-info">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          Nunc maximus, nulla ut commodo sagittis.
                        </p>
                        <div className="footer__social">
                          <h4>Follow Us</h4>
                          <ul>
                            <li>
                              <a href="#" className="fb">
                                <i className="fa-brands fa-facebook-f"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#" className="tw">
                                <i className="fa-brands fa-twitter"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#" className="pin">
                                <i className="fa-brands fa-pinterest-p"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Footer Widget 2 */}
                <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-3 col-sm-5">
                  <div className="footer__widget mb-50">
                    <h3 className="footer__widget-title">Explore</h3>
                    <div className="footer__widget-content">
                      <ul>
                        <li>
                          <a href="#">About us</a>
                        </li>
                        <li>
                          <a href="#">Success story</a>
                        </li>
                        <li>
                          <a href="#">Courses</a>
                        </li>
                        <li>
                          <a href="#">About us</a>
                        </li>
                        <li>
                          <a href="#">Instructor</a>
                        </li>
                        <li>
                          <a href="#">Events</a>
                        </li>
                        <li>
                          <a href="#">Contact us</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Footer Widget 3 */}
                <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-3 col-sm-5">
                  <div className="footer__widget mb-50">
                    <h3 className="footer__widget-title">Links</h3>
                    <div className="footer__widget-content">
                      <ul>
                        <li>
                          <a href="#">News & Blogs</a>
                        </li>
                        <li>
                          <a href="#">Library</a>
                        </li>
                        <li>
                          <a href="#">Gallery</a>
                        </li>
                        <li>
                          <a href="#">Terms of service</a>
                        </li>
                        <li>
                          <a href="#">Membership</a>
                        </li>
                        <li>
                          <a href="#">Career</a>
                        </li>
                        <li>
                          <a href="#">Partners</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Footer Widget 4 */}
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-7">
                  <div className="footer__widget footer-col-4 mb-50">
                    <h3 className="footer__widget-title">Newsletter</h3>
                    <div className="footer__subscribe">
                      <p>
                        Receive weekly newsletter with educational materials,
                        popular books and much more!
                      </p>
                      <form action="#">
                        <div className="footer__subscribe-input">
                          <input type="text" placeholder="Email" />
                          <button type="submit" className="tp-btn-subscribe">
                            Subscribe
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="footer__bottom"
            style={{ backgroundColor: "#0E1133", color: "#fff" }}
          >
            <div className="container">
              <div className="footer__bottom-inner">
                <div className="row">
                  <div className="col-xxl-12">
                    <div className="footer__copyright text-center">
                      <p>© 2022 Educal. All Rights Reserved</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <style jsx>{`
        a {
          color: #fff;
        }
      `}</style>
    </>
  );
};

export default Footer;
