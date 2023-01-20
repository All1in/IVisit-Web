import React from "react"
import "../../../../UI/FooterContentCompany.scss"
import "../../../../UI/FooterContentList.scss"
import "../../../UI/FooterContentPolicies.scss"
import "../../../UI/FooterContentMedia.scss"
import "../../../UI/FooterContent.scss"

import "./Footer.scss"

const Footer = (props) => {
  return (
    <div className="footer-container">
        <footer className="footer">
          <div className="footer-left-container">


            {/*Footer logo area*/}

            <div className="footer-logo">
              <svg width="35" height="52" viewBox="0 0 35 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.24931 25.6463L2.38477 23.25C2.61686 23.7084 2.93598 23.9173 3.42338 23.9347L15.2427 24.4569C15.9041 24.4859 16.1478 25.3678 16.4786 26.2324L17.227 28.2226C17.2212 28.2226 17.2329 28.2168 17.227 28.2226C17.0298 27.8164 16.7919 27.5495 16.4147 27.5321L4.59544 27.0099C3.93398 26.9867 3.60905 26.5457 3.24931 25.6463Z" fill="#1F0070"/>
                <path d="M17.0584 41.26C17.0759 41.202 17.0933 41.1498 17.1107 41.0918C16.896 40.2969 16.6987 39.4961 16.5072 38.6896L8.07649 38.8753C7.58909 38.8869 7.25256 38.7012 6.99146 38.2603L8.01266 40.5928C8.43043 41.4631 8.78437 41.8809 9.44583 41.8693L17.2673 41.6952C17.2673 41.6894 17.2615 41.6778 17.2615 41.672C17.1165 41.6082 17.012 41.4457 17.0584 41.26Z" fill="#1F0070"/>
                <path d="M12.527 13.38L11.7785 11.3898C11.4478 10.5311 11.2041 9.64332 10.5426 9.61431L2.89521 9.27197C2.8604 9.28938 2.82559 9.30679 2.79077 9.32419C2.79077 9.32419 2.79077 9.32419 2.79077 9.33C2.90682 9.33 3.02867 9.3358 3.14471 9.3358C3.60309 9.3532 3.58569 9.99146 3.14471 10.0379C3.1099 10.0437 3.07508 10.0437 3.04027 10.0495C3.19693 10.2061 3.14471 10.5485 2.88941 10.6529C3.1099 10.9372 3.3652 11.1983 3.6147 11.4594C3.81778 11.4768 4.02086 11.5117 4.22394 11.5523C4.50825 11.6161 4.57788 12.0629 4.30517 12.1963C4.27616 12.2079 4.24715 12.2253 4.21814 12.2369C4.22974 12.2544 4.24135 12.2776 4.25295 12.295C4.26456 12.3182 4.27036 12.3356 4.28196 12.353L11.7089 12.6837C12.0919 12.7069 12.3298 12.9738 12.527 13.38C12.527 13.38 12.5212 13.38 12.527 13.38C12.5328 13.38 12.527 13.38 12.527 13.38Z" fill="#1F0070"/>
                <path d="M34.5758 7.8101L21.7933 51.3157C21.7759 51.3796 21.7469 51.4376 21.7179 51.4956L21.6772 51.571C21.5902 51.7219 21.4568 51.8437 21.2943 51.9076C21.1957 51.9482 21.0854 51.9714 20.981 51.9714L14.7725 52.0004C14.7319 52.0004 14.6913 52.0004 14.6565 51.9946L14.465 51.9656C14.2967 51.9424 14.1459 51.8612 14.024 51.7451C13.937 51.6639 13.8731 51.5594 13.8383 51.4492L13.8093 51.3622L0.0636765 7.42134C0.0520719 7.39233 0.0462699 7.35752 0.0404676 7.3227L0.00565348 7.08481C-0.0117534 6.96296 0.0114561 6.83531 0.0694791 6.72507C0.133304 6.59741 0.243548 6.49878 0.377001 6.44656L0.574279 6.36532C0.643907 6.33631 0.719337 6.32471 0.800569 6.32471H5.97622L6.30695 6.33631C6.4346 6.34211 6.55645 6.37693 6.66669 6.43495C6.80595 6.51618 6.91619 6.63803 6.98002 6.78309L7.07286 6.98617C7.08446 7.01518 7.09606 7.04419 7.10767 7.0732L18.045 42.2119C18.0624 42.27 18.0914 42.328 18.1262 42.3802C18.2191 42.5195 18.3583 42.6239 18.5208 42.6645L18.544 42.6703C18.7587 42.7283 18.985 42.6703 19.1532 42.5253L19.2461 42.444C19.3389 42.3628 19.4027 42.2642 19.4434 42.1481L20.128 40.1173L20.7663 37.8718L21.3059 35.6089L21.7643 33.3402L22.1646 31.0483L23.8705 19.5423L24.2767 17.2504L24.7467 14.9817L25.3037 12.7188L25.9593 10.4792L26.7252 8.27428L27.1604 7.17764L27.2765 6.90494L27.3867 6.66124L27.729 6.37693L28.3267 6.33051H32.1098L33.8795 6.37693C34.2044 6.38273 34.4945 6.58001 34.628 6.87593C34.7034 7.04999 34.7208 7.24147 34.6744 7.42714L34.5758 7.8101Z" fill="#9E66EE"/>
                <path d="M12.6838 13.3221L11.5581 10.8271C11.7206 11.3494 11.6103 11.7497 11.2274 12.1153L1.92051 21.0972C1.3983 21.602 1.87409 22.4666 2.26284 23.3775L3.1738 25.4722C3.17961 25.4722 3.168 25.4722 3.1738 25.4722C3.02295 25.0138 3.01134 24.6308 3.31306 24.3465L12.6258 15.3645C13.1422 14.8597 13.0725 14.2795 12.6838 13.3221Z" fill="#3700B3"/>
                <path d="M17.2097 27.7118L16.084 25.2168C16.2465 25.739 16.1362 26.1394 15.7533 26.5049L6.44639 35.4869C5.92418 35.9917 6.39997 36.8562 6.78872 37.7672L7.69968 39.8618C7.70549 39.8618 7.69388 39.8618 7.69968 39.8618C7.54882 39.4034 7.53722 39.0205 7.83894 38.7362L17.1516 29.7542C17.668 29.2494 17.5984 28.6692 17.2097 27.7118Z" fill="#3700B3"/>
                <path d="M2.79634 5.22207C4.23837 5.22207 5.40737 4.05307 5.40737 2.61103C5.40737 1.169 4.23837 0 2.79634 0C1.3543 0 0.185303 1.169 0.185303 2.61103C0.185303 4.05307 1.3543 5.22207 2.79634 5.22207Z" fill="#3700B3"/>
              </svg>
            </div>


            {/*Footer content STARTS*/}

            <div className="footer-content">
              <div className="footer-country">
                <div className="footer-country-container">
                  <h1 className="footer-country-headline">Choose country</h1>
                </div>
                <div className="footer-country-container-hr">
                  <hr className="footer-country-hr" />
                </div>
              </div>
              <div className="footer-care">
                <h1 className="footer-care-headline">Custom care</h1>
                <hr className="footer-care-hr" />

                {/*List component*/}
                <div className="footer-content-list">
                  <ul className="footer-content-ul">
                    <li className="footer-content-ul-item">
                      <a className="footer-content-link">Login/Signup</a>
                    </li>
                    <li className="footer-content-ul-item">
                      <a className="footer-content-link">Exclusive online services</a>
                    </li>
                    <li className="footer-content-ul-item">
                      <a className="footer-content-link">FAQ</a>
                    </li>
                    <li className="footer-content-ul-item">
                      <a className="footer-content-link">Customers care</a>
                    </li>
                    <li className="footer-content-ul-item">
                      <a className="footer-content-link">Contact us</a>
                    </li>
                    <li className="footer-content-ul-item">
                      <a className="footer-content-link">Find store</a>
                    </li>
                    <li className="footer-content-ul-item">
                      <a className="footer-content-link">Submit feedback to our CEO</a>
                    </li>
                  </ul>
                </div>

              </div>
              <div className="footer-policies">
                <h1 className="footer-policies-headline">Custom care</h1>
                <hr className="footer-policies-hr" />

                {/*Policies component*/}
                <div className="footer-policies">
                  <ul className="footer-policies-list">
                    <li className="footer-policies-list-item">
                      <a href="#" className="footer-policies-link">Accessibility</a>
                    </li>
                    <li className="footer-policies-list-item">
                      <a href="#" className="footer-policies-link">Counterfeit</a>
                    </li>
                    <li className="footer-policies-list-item">
                      <a href="#" className="footer-policies-link">Cookie Policy</a>
                    </li>
                    <li className="footer-policies-list-item">
                      <a href="#" className="footer-policies-link">Privacy Policy</a>
                    </li>
                    <li className="footer-policies-list-item">
                      <a href="#" className="footer-policies-link">Policies and terms</a>
                    </li>
                  </ul>
                </div>

              </div>

              {/*Company component*/}
              <div className="footer-company">
                <h1 className="footer-company-headline">Our company</h1>
                <hr className="footer-company-hr" />
                <div className="footer-company">
                  <ul className="footer-company-list">
                    <li className="footer-company-list-item">
                      <a href="#" className="footer-company-link">Corporate</a>
                    </li>
                    <li className="footer-company-list-item">
                      <a href="#" className="footer-company-link">Press</a>
                    </li>
                    <li className="footer-company-list-item">
                      <a href="#" className="footer-company-link">Investors</a>
                    </li>
                    <li className="footer-company-list-item">
                      <a href="#" className="footer-company-link">Become a sales partner</a>
                    </li>
                    <li className="footer-company-list-item">
                      <a href="#" className="footer-company-link">For industry professionals</a>
                    </li>
                    <li className="footer-company-list-item">
                      <a href="#" className="footer-company-link">Partners & B2B</a>
                    </li>
                    <li className="footer-company-list-item">
                      <a href="#" className="footer-company-link">Careers</a>
                    </li>
                    <li className="footer-company-list-item">
                      <a href="#" className="footer-company-link">Bang & Olufsen Collective</a>
                    </li>
                  </ul>
                </div>
              </div>

            </div>

            {/*Footer content ENDS*/}

          </div>
          <div className="footer-right-container">
              
          </div>
        </footer>

        {/*<div className="footer-media">*/}
        {/*    <p className="footer-media-headline">Social media</p>*/}
        {/*    */}
        {/*    /!*Media component*!/*/}
        {/*    <div className="footer-social-media">*/}
        {/*      <div className="footer-social-headline-container">*/}
        {/*        <h1 className="footer-social-headline">Social media</h1>*/}
        {/*      </div>*/}
        {/*      <div className="footer-social-icons">*/}
        {/*    */}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*</div> */}

    </div>
  )
};

export default Footer;
