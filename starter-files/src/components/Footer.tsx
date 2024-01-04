import React from 'react'

const Footer = () => {
  return (
      <div className="container footer bg-muted px-4">
        <div className="row py-5 social-media">
            <div className="col-lg-3 social-share pb-md-4 mb-sm-4 mb-md-0">
                <p className="h4 pb-4">Social share</p>
                <a href="https://www.facebook.com/" target="_blank"
                    ><i className="fab fa-facebook-f p-1 mb-5"></i></a>
                <a href="https://www.instagram.com/" target="_blank"
                    ><i className="fab fa-instagram p-1 mb-5"></i></a>
                <a href="https://twitter.com/?lang=en" target="_blank"
                    ><i className="fa-brands fa-x-twitter p-1 mb-5"></i></a>
                <a href="https://www.linkedin.com/" target="_blank"
                ><i className="fab fa-linkedin-in p-1 mb-5"></i></a>
            </div>
            <div className="col-md-4 col-sm-3 col-lg-3 mr-sm-4 mr-md-0">
                <div className="border border-top-0 border-bottom-0 border-right-0">
                    <p className="h4 pb-4 mb-0 ml-3">Event info</p>
                    <p className="footer-paragraph ml-3"><a href="#">Enter Now</a></p>
                    <p className="footer-paragraph ml-3"><a href="#">Event Info</a></p>
                    <p className="footer-paragraph ml-3"><a href="#">Course Maps</a></p>
                    <p className="footer-paragraph ml-3"><a href="#">Race Pack</a></p>
                    <p className="footer-paragraph ml-3"><a href="#">Results</a></p>
                    <p className="footer-paragraph ml-3"><a href="#">FAQs</a></p>
                    <p className="footer-paragraph ml-3">
                    <a href="#">Am I Registered?</a>
                    </p>
                </div>
            </div>
            <div className="col-md-4 col-sm-3 col-lg-3 mr-sm-4 mr-md-0">
                <div className="border border-top-0 border-bottom-0 border-right-0">
                    <p className="h4 pb-4 mb-0 ml-3">Registration</p>
                    <p className="footer-paragraph ml-3"><a href="#">Valunteers</a></p>
                    <p className="footer-paragraph ml-3"><a href="#">Gallery</a></p>
                    <p className="footer-paragraph ml-3"><a href="#">Press</a></p>
                    <p className="footer-paragraph ml-3"><a href="#">Results</a></p>
                    <p className="footer-paragraph ml-3">
                    <a href="#">Privacy Policy</a>
                    </p>
                    <p className="footer-paragraph ml-3"><a href="#">Service Plus</a></p>
                    <p className="footer-paragraph ml-3"><a href="#">Contacts</a></p>
                </div>
            </div>
            <div className="col-md-4 col-sm-3 col-lg-3">
                <div className="border border-top-0 border-bottom-0 border-right-0">
                    <p className="h4 pb-4 mb-0 ml-3">Schedule</p>
                    <p className="footer-paragraph ml-3"><a href="#">Galery</a></p>
                    <p className="footer-paragraph ml-3"><a href="#">About</a></p>
                    <p className="footer-paragraph ml-3"><a href="#">Videos</a></p>
                    <p className="footer-paragraph ml-3"><a href="#">Results</a></p>
                    <p className="footer-paragraph ml-3"><a href="#">FAQs</a></p>
                    <p className="footer-paragraph ml-3"><a href="#">Results</a></p>
                    <p className="footer-paragraph ml-3"><a href="#">Valunteers</a></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer;
