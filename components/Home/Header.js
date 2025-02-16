import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";
import links from "../../data/linkData";
import useAuth from "../../hooks/useAuth";
import useSticky from "../../hooks/useSticky";
import { searchText } from "../../redux/features/coursesSlice";
import { useRouter } from "next/router";
import LoginData from "../../data/LoginMenuData";
import Sidebar from "../common/SideBar";
import Image from "next/image";

const Header = () => {
  // Sticky header hook
  const { headerSticky } = useSticky();
  // User authentication hook
  const { user, logout } = useAuth();
  // Search state
  const [searchValue, setSearchValue] = useState("");
  // Redux dispatch
  const dispatch = useDispatch();
  // Next.js router
  const router = useRouter();
  // Sidebar visibility state
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Handle search submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchValue) {
      dispatch(searchText(searchValue));
      router.push("/search-courses");
    }
  };

  return (
    <>
      <header>
        <div className="header__area">
          <div className="header__top header__border d-none d-md-block">
            <div className="container">
              <div className="row align-items-center">
                {/* Left Side: Header Info */}
                <div className="col-xxl-6 col-xl-8 col-lg-8 col-md-8">
                  <div className="header__info">
                    <ul>
                      <li>
                        <a href="mailto:info@educal.com">
                          <svg viewBox="0 0 15 13">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.5163 7.93224C7.11179 7.93224 6.70849 7.79861 6.37109 7.53136L3.65922 5.34493C3.46391 5.18772 3.43368 4.90172 3.59029 4.70702C3.7481 4.51292 4.0335 4.48209 4.2282 4.63869L6.93765 6.8227C7.27807 7.09238 7.75756 7.09238 8.1004 6.82028L10.7826 4.6399C10.9773 4.48088 11.2627 4.51111 11.4212 4.70581C11.579 4.8999 11.5493 5.1853 11.3553 5.34372L8.66817 7.52773C8.32835 7.7974 7.92203 7.93224 7.5163 7.93224Z"
                              fill="#4B535A"
                            />
                            <path
                              d="M7.5163 7.93224C7.11179 7.93224 6.70849 7.79861 6.37109 7.53136L3.65922 5.34493C3.46391 5.18772 3.43368 4.90172 3.59029 4.70702C3.7481 4.51292 4.0335 4.48209 4.2282 4.63869L6.93765 6.8227C7.27807 7.09238 7.75756 7.09238 8.1004 6.82028L10.7826 4.6399C10.9773 4.48088 11.2627 4.51111 11.4212 4.70581C11.579 4.8999 11.5493 5.1853 11.3553 5.34372L8.66817 7.52773C8.32835 7.7974 7.92203 7.93224 7.5163 7.93224"
                              stroke="#4B535A"
                              strokeWidth="0.2"
                            />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://goo.gl/maps/qzqY2PAcQwUz1BYN9"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <svg
                            width="12"
                            height="14"
                            viewBox="0 0 12 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M5.9235 4.66671C5.23068 4.66671 4.66709 5.2303 4.66709 5.92383C4.66709 6.61666 5.23068 7.17953 5.9235 7.17953C6.61632 7.17953 7.17991 6.61666 7.17991 5.92383C7.17991 5.2303 6.61632 4.66671 5.9235 4.66671ZM5.92354 8.25642C4.63698 8.25642 3.59021 7.21037 3.59021 5.9238C3.59021 4.63652 4.63698 3.58975 5.92354 3.58975C7.21011 3.58975 8.25688 4.63652 8.25688 5.9238C8.25688 7.21037 7.21011 8.25642 5.92354 8.25642Z"
                              fill="#4B535A"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M5.92278 1.07695C3.25058 1.07695 1.07663 3.27172 1.07663 5.96834C1.07663 9.39942 5.11437 12.7422 5.92278 12.9202C6.73119 12.7415 10.7689 9.3987 10.7689 5.96834C10.7689 3.27172 8.59499 1.07695 5.92278 1.07695ZM5.92259 14C4.63459 14 -0.000488281 10.0139 -0.000488281 5.96831C-0.000488281 2.67723 2.65664 0 5.92259 0C9.18854 0 11.8457 2.67723 11.8457 5.96831C11.8457 10.0139 7.21059 14 5.92259 14Z"
                              fill="#4B535A"
                            />
                          </svg>
                          Shatabdi Square, Nagpur - 440003
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Right side of header__top */}
                <div className="col-xxl-6 col-xl-4 col-lg-4 col-md-4">
                  <div className="header__top-right d-flex justify-content-end align-items-center">
                    <div className="header__login">
                      {user?.email ? (
                        <a onClick={logout} style={{ cursor: "pointer" }}>
                          <svg
                            viewBox="0 0 12 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.99995 6.83333C7.61078 6.83333 8.91662 5.5275 8.91662 3.91667C8.91662 2.30584 7.61078 1 5.99995 1C4.38912 1 3.08328 2.30584 3.08328 3.91667C3.08328 5.5275 4.38912 6.83333 5.99995 6.83333Z"
                              stroke="#031220"
                              strokeWidth="1.2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M11.0108 12.6667C11.0108 10.4092 8.76497 8.58333 5.99997 8.58333C3.23497 8.58333 0.989136 10.4092 0.989136 12.6667"
                              stroke="#031220"
                              strokeWidth="1.2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>{" "}
                          Logout
                        </a>
                      ) : (
                        <Link href="/sign-in" passHref>
                          <a>
                            <svg
                              viewBox="0 0 12 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.99995 6.83333C7.61078 6.83333 8.91662 5.5275 8.91662 3.91667C8.91662 2.30584 7.61078 1 5.99995 1C4.38912 1 3.08328 2.30584 3.08328 3.91667C3.08328 5.5275 4.38912 6.83333 5.99995 6.83333Z"
                                stroke="#031220"
                                strokeWidth="1.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M11.0108 12.6667C11.0108 10.4092 8.76497 8.58333 5.99997 8.58333C3.23497 8.58333 0.989136 10.4092 0.989136 12.6667"
                                stroke="#031220"
                                strokeWidth="1.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>{" "}
                            Login
                          </a>
                        </Link>
                      )}
                    </div>
                    <div className="header__btn ml-20">
                      <Link href="/contact" passHref>
                        <a className="header-btn">contact us</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              headerSticky ? "header__bottom header__sticky" : "header__bottom"
            }
            id="header-sticky"
          >
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-6 col-6">
                  <div className="logo">
                    <Link href="/" passHref>
                      <a>
                        <Image
                          src="/assets/img/logo/logo.png"
                          width={100}
                          height={40}
                          alt="Your School logo"
                          priority
                        />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="col-xxl-7 col-xl-7 col-lg-8 d-none d-lg-block">
                  <div className="main-menu">
                    <nav id="mobile-menu">
                      <ul>
                        {!user?.email &&
                          links.map((link) => (
                            <li
                              key={link.id}
                              className={link.submenu ? "has-dropdown" : ""}
                            >
                              <Link href={`${link.url}`} passHref>
                                <a>{link.name}</a>
                              </Link>
                              {link.submenu && (
                                <ul className="submenu">
                                  {link.submenu.map((sub_menu) => (
                                    <li key={sub_menu.id}>
                                      <Link href={`${sub_menu.url}`} passHref>
                                        <a>{sub_menu.name}</a>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </li>
                          ))}

                        {user?.email &&
                          LoginData.map((link) => (
                            <li
                              key={link.id}
                              className={link.submenu ? "has-dropdown" : ""}
                            >
                              <Link href={`${link.url}`} passHref>
                                <a>{link.name}</a>
                              </Link>
                              {link.submenu && (
                                <ul className="submenu">
                                  {link.submenu.map((sub_menu) => (
                                    <li key={sub_menu.id}>
                                      <Link href={`${sub_menu.url}`} passHref>
                                        <a>{sub_menu.name}</a>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </li>
                          ))}
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-2 col-md-6 col-6">
                  <div className="header__bottom-right d-flex justify-content-end align-items-center pl-30">
                    <div className="header__search w-100 d-none d-xl-block">
                      <form onSubmit={handleSubmit}>
                        <div className="header__search-input">
                          <input
                            onChange={(e) => setSearchValue(e.target.value)}
                            type="text"
                            placeholder="Search..."
                          />
                          <button className="header__search-btn">
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.11117 15.2222C12.0385 15.2222 15.2223 12.0385 15.2223 8.11111C15.2223 4.18375 12.0385 1 8.11117 1C4.18381 1 1.00006 4.18375 1.00006 8.11111C1.00006 12.0385 4.18381 15.2222 8.11117 15.2222Z"
                                stroke="#031220"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M17 17L13.1334 13.1333"
                                stroke="#031220"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="header__hamburger ml-50 d-xl-none">
                      <button
                        type="button"
                        onClick={handleShow}
                        className="hamurger-btn"
                      >
                        <span></span>
                        <span></span>
                        <span></span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <Sidebar show={show} handleClose={handleClose} />
    </>
  );
};

export default Header;
