import React from "react";
// import { FaFacebook, FaInstagram } from "react-icons/fa";
// import { SocialIconLink } from "../Footer/FooterElements";
import "./style.css";

class AboutUs extends React.Component {
  render() {
    return (
      <div>
        <div class="about-section">
          <div class="inner-container">
            <h1>About bruhh!</h1>
            <p class="text">
              We think fashion is who you are. <br></br>
              What you wear defines you. It's an expression and emotion. It's
              your identity.<br></br>
              As identity is important, No one should compromise it. Whether you
              are cool or classy, fancy or formal you have to choose the best.
              Important Life choices may not be in our hands but good fashion
              choices are.<br></br>
              <br></br>
              Though there are Offline and Online markets to choose from we
              think chances are you get more frustrated to choose from online
              because of the number of e-commerce websites, advertisements, and
              the large number of options to choose from. Here you may get lost.
              <br></br>
              <br></br>
              Now, here we may help you. We at bruhh! try to find the best,
              trendy, and affordable products from every trusted e-commerce website
              in India. We do this by considering our own experience, trusted
              brands, global and local fashion trends, and the most important through
              ratings and reviews.<br></br>

              <br></br>
              We would be happy to hear any feedback or suggestions from you. You can drop a mail on <i>bruhhfashion@gmail.com</i> or you can connect us on our 
              <a href="https://www.instagram.com/bruhh_fashion/" target="_blank" > Instagram</a> and  
              <a href="https://www.facebook.com/Bruhh_fashion-104278008278589/" target="_blank" > Facebook</a> page.
              
            </p>

            <div class="skills">
            <a href="https://www.instagram.com/bruhh_fashion/" target="_blank" class="fa fa-instagram"></a>

            <a href="https://www.facebook.com/Bruhh_fashion-104278008278589/" target="_blank" class="fa fa-facebook"></a>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;
