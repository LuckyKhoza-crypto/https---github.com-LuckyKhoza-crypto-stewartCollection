import React from 'react';
import './WebFooter.css'; // Import the CSS file for styling
import footerLogo from './images/logo.png';
// import visaIcon from './Images/image0.jpeg';
import visaIcon from './images/visa.png';
import mastercardIcon from './images/mastercard.png';
import amexIcon from './images/amex.png';
import discoverIcon from './images/discover.png';
import paypalIcon from './images/paypal.png';
import venmoIcon from './images/venmo.png';
import applePayIcon from './images/applepay.png';
import googlePayIcon from './images/googlepay.png';

export function WebFooter () {
    return (
        <>
        <footer>
            <img className="footerLogo" src={footerLogo}/>
            <div className='paymentType'>
                <ul>
                    <li >
                        <img src={visaIcon} alt="Visa" />
                    </li>
                    <li>
                        <img src={mastercardIcon} alt="Mastercard" />
                    </li>
                    <li>
                        <img src={amexIcon} alt="American Express" />
                    </li>
                    <li>
                        <img src={discoverIcon} alt="Discover" />
                    </li>
                    <li>
                        <img src={paypalIcon} alt="PayPal" />
                    </li>
                    <li>
                        <img src={venmoIcon} alt="Venmo" />
                    </li>
                    <li>
                        <img src={applePayIcon} alt="Apple Pay" />
                    </li>
                    <li>
                        <img src={googlePayIcon} alt="Google Pay" />
                    </li>
                </ul>
            </div>

            <div className="contri">
                <span>Created by Lucky Khoza | 2023.</span>
            </div>
            
        </footer>
        </>
        )
}