import React from 'react'
import "./Footer.css"
import {Button} from "./Button"
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer-container'>
        <section className='footer-subscription'>
            <p className='footer-subscription-heading'>Join the Adventure newsletter to receive our best vacation deals</p>
            <p className='footer-subscription-text'>You can unsubscribe at any time.</p>
            <div className='input-areas'>
                <form>
                    <input
                    className='footer-input'
                    name='email'
                    type='email'
                    placeholder='Your Email' 
                    />
                    <Button buttonStyle='btn--outline'>Subscribe</Button>
                </form>
            </div>
        </section>
        <div className='footer-links'>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>About Us</h2>
                    <Link to='/sign-up'> How it Works</Link>
                    <Link to='/'>Testimonials</Link>
                    <Link to='/'>Careers</Link>
                    <Link to='/'>Investors</Link>
                    <Link to='/'>Terms of Service</Link>
                </div>
                <div className='footer-link-items'>
                    <h2>Contact Us</h2>
                    <Link to='/sign-up'>Contact</Link>
                    <Link to='/'>Support</Link>
                    <Link to='/'>Destinations</Link>
                    <Link to='/'>Sponsorships</Link>
                </div>
                <div className='footer-link-items'>
                    <h2>Videos</h2>
                    <Link to='/sign-up'>Submit Videos</Link>
                    <Link to='/'>Ambassadors</Link>
                    <Link to='/'>Agency</Link>
                    <Link to='/'>Influnecer</Link>
                </div>
                <div className='footer-link-items'>
                    <h2>Social Media</h2>
                    <Link to='/'>Instagram</Link>
                    <Link to='/'>Facebook</Link>
                    <Link to='/'>Twitter</Link>
                    <Link to='/'>YouTube</Link>
                </div>
            </div>
        </div>
        <section class='social-media'>
            <div className='social-media-wrap'>
                <div class='footer-logo'>
                    <Link to='/' className='social-logo'>
                        Bucket List
                    </Link>
                </div>
                <small class='website-rights'>
                    Created by GEWORGIEAN 2022
                </small>
            </div>    
    
        </section>
    </div>
  )
}

export default Footer