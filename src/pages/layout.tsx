import Head from "next/head";
import Script from "next/script";
import Link from "next/link";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>NextJS Demo</title>

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />

        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <link rel="icon" href="favicon.ico" type="image/x-icon" />
      </Head>

      <header className="short-header">
        <div className="gradient-block"></div>

        <div className="row header-content">
          <div className="logo">
            <a href="index.html">Author</a>
          </div>

          <nav id="main-nav-wrap">
            <ul className="main-navigation sf-menu">
              <li className="current">
                <a href="index.html" title="">
                  Home
                </a>
              </li>
              <li className="has-children">
                <a href="category.html" title="">
                  Categories
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href="category.html">Wordpress</a>
                  </li>
                  <li>
                    <a href="category.html">HTML</a>
                  </li>
                  <li>
                    <a href="category.html">Photography</a>
                  </li>
                  <li>
                    <a href="category.html">UI</a>
                  </li>
                  <li>
                    <a href="category.html">Mockups</a>
                  </li>
                  <li>
                    <a href="category.html">Branding</a>
                  </li>
                </ul>
              </li>
              <li className="has-children">
                <a href="single-standard.html" title="">
                  Blog
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href="single-video.html">Video Post</a>
                  </li>
                  <li>
                    <a href="single-audio.html">Audio Post</a>
                  </li>
                  <li>
                    <a href="single-gallery.html">Gallery Post</a>
                  </li>
                  <li>
                    <a href="single-standard.html">Standard Post</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="style-guide.html" title="">
                  Styles
                </a>
              </li>
              <li>
                <a href="about.html" title="">
                  About
                </a>
              </li>
              <li>
                <a href="contact.html" title="">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <div className="search-wrap">
            <form role="search" method="get" className="search-form" action="#">
              <label>
                <span className="hide-content">Search for:</span>
                <input
                  type="search"
                  className="search-field"
                  placeholder="Type Your Keywords"
                  value=""
                  name="s"
                  title="Search for:"
                  autoComplete="off"
                />
              </label>
              <input type="submit" className="search-submit" value="Search" />
            </form>

            <Link href="#" id="close-search" className="close-btn">
              Close
            </Link>
          </div>

          <div className="triggers">
            <Link className="search-trigger" href="#">
              <i className="fa fa-search"></i>
            </Link>
            <Link className="menu-toggle" href="#">
              <span>Menu</span>
            </Link>
          </div>
        </div>
      </header>

      <section id="bricks">
        <div className="row masonry">
          <div className="bricks-wrapper">
            <div className="grid-sizer"></div>

            <div className="brick entry featured-grid animate-this">
              <div className="entry-content">
                <div id="featured-post-slider" className="flexslider">
                  <ul className="slides">
                    <li>
                      <div className="featured-post-slide">
                        <div
                          className="post-background"
                          style={{
                            backgroundImage:
                              "url('images/thumbs/featured/featured-1.jpg')",
                          }}
                        ></div>

                        <div className="overlay"></div>

                        <div className="post-content">
                          <ul className="entry-meta">
                            <li>September 06, 2016</li>
                            <li>
                              <Link href="#">Naruto Uzumaki</Link>
                            </li>
                          </ul>

                          <h1 className="slide-title">
                            <a href="single-standard.html" title="">
                              Minimalism Never Goes Out of Style
                            </a>
                          </h1>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div className="featured-post-slide">
                        <div
                          className="post-background"
                          style={{
                            backgroundImage:
                              "url('images/thumbs/featured/featured-2.jpg')",
                          }}
                        ></div>

                        <div className="overlay"></div>

                        <div className="post-content">
                          <ul className="entry-meta">
                            <li>August 29, 2016</li>
                            <li>
                              <Link href="#">Sasuke Uchiha</Link>
                            </li>
                          </ul>

                          <h1 className="slide-title">
                            <a href="single-standard.html" title="">
                              Enhancing Your Designs with Negative Space
                            </a>
                          </h1>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div className="featured-post-slide">
                        <div
                          className="post-background"
                          style={{
                            backgroundImage:
                              "url('images/thumbs/featured/featured-3.jpg')",
                          }}
                        ></div>

                        <div className="overlay"></div>

                        <div className="post-content">
                          <ul className="entry-meta">
                            <li>August 27, 2016</li>
                            <li>
                              <Link href="#" className="author">
                                Naruto Uzumaki
                              </Link>
                            </li>
                          </ul>

                          <h1 className="slide-title">
                            <Link href="single-standard.html" title="">
                              Music Album Cover Designs for Inspiration
                            </Link>
                          </h1>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {children}
          </div>
        </div>

        <div className="row">
          <nav className="pagination">
            <span className="page-numbers prev inactive">Prev</span>
            <span className="page-numbers current">1</span>
            <a href="#" className="page-numbers">
              2
            </a>
            <a href="#" className="page-numbers">
              3
            </a>
            <a href="#" className="page-numbers">
              4
            </a>
            <a href="#" className="page-numbers">
              5
            </a>
            <a href="#" className="page-numbers">
              6
            </a>
            <a href="#" className="page-numbers">
              7
            </a>
            <a href="#" className="page-numbers">
              8
            </a>
            <a href="#" className="page-numbers">
              9
            </a>
            <a href="#" className="page-numbers next">
              Next
            </a>
          </nav>
        </div>
      </section>

      <footer>
        <div className="footer-main">
          <div className="row">
            <div className="col-four tab-full mob-full footer-info">
              <h4>About Our Site</h4>

              <p>
                Lorem ipsum Ut velit dolor Ut labore id fugiat in ut fugiat
                nostrud qui in dolore commodo eu magna Duis cillum dolor officia
                esse mollit proident Excepteur exercitation nulla. Lorem ipsum
                In reprehenderit commodo aliqua irure labore.
              </p>
            </div>

            <div className="col-two tab-1-3 mob-1-2 site-links">
              <h4>Site Links</h4>

              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Terms</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>

            <div className="col-two tab-1-3 mob-1-2 social-links">
              <h4>Social</h4>

              <ul>
                <li>
                  <a href="#">Twitter</a>
                </li>
                <li>
                  <a href="#">Facebook</a>
                </li>
                <li>
                  <a href="#">Dribbble</a>
                </li>
                <li>
                  <a href="#">Google+</a>
                </li>
                <li>
                  <a href="#">Instagram</a>
                </li>
              </ul>
            </div>

            <div className="col-four tab-1-3 mob-full footer-subscribe">
              <h4>Subscribe</h4>

              <p>Keep yourself updated. Subscribe to our newsletter.</p>

              <div className="subscribe-form">
                <form id="mc-form" className="group" noValidate={true}>
                  <input
                    type="email"
                    value=""
                    name="dEmail"
                    className="email"
                    id="mc-email"
                    placeholder="Type &amp; press enter"
                    required
                  />

                  <input type="submit" name="subscribe" />

                  <label className="subscribe-message"></label>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="row">
            <div className="col-twelve">
              <div className="copyright">
                <span>© Copyright Abstract 2016</span>
                <span>
                  Design by <a href="http://www.styleshout.com/">styleshout</a>
                </span>
              </div>

              <div id="go-top">
                <a className="smoothscroll" title="Back to Top" href="#top">
                  <i className="icon icon-arrow-up"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* <div id="preloader">
          <div id="loader"></div>
        </div> */}

      <Script src="js/jquery-2.1.3.min.js"></Script>
      <Script src="js/plugins.js"></Script>
      <Script src="js/jquery.appear.js"></Script>
      <Script src="js/main.js"></Script>
      <Script src="js/modernizr.js"></Script>
      <Script src="js/pace.min.js"></Script>
    </>
  );
}
