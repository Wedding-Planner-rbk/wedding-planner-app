import React from 'react';
import SocialFollow from './socialFollow/SocialFollow.jsx';

class AboutUs extends React.Component {
    

    render(){
      //  style :{{ backgroundImage:`url(https://image.shutterstock.com/image-photo/vintage-crown-over-dark-royal-260nw-1653121378.jpg)`}}
        return (
          
            <div className='abtus'>
            <div ><div className='espace'> </div>
            <h4> Who we are </h4>
            <h6>The wedding planner online that'll do anything for love.</h6>
            <p>The Velvet Box is the largest and most trusted marketplace in Tunisia connecting engaged couples with local wedding professionals. Millions of couples are able to search, compare and book from a directory of multipls vendors .  </p>
          </div>
          <div style={{width: "50%", float:"left"}}>
              <h5>Engaged Couples</h5>
              <p>Our comprehensive directory of wedding professionals, from venues to photographers, features millions of consumer reviews, detailed pricing and availability information, payments and more.</p>
          </div>
          <div style={{width :"-50%", float:"rigth"}}>
              <h5>Vendors </h5>
              <p>Get exposure to millions of couples through a premium WeddingWire listing. Our features and benefits will drive leads and bookings to businesses, highlight consumer reviews and more.</p>
          </div>
          <div>
            <h4> Contact us</h4>
            <p>Contact Us Whether you have feedback on Wedding Planner, questions about how it works, or need support with your account, we would be delighted to hear from you.  </p>
            
            <SocialFollow />
            </div>
          </div>
        )
    }
}
export default AboutUs;