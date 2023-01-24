import React from 'react'
import "./footer.scss"

const Footer = () => {
  return (
    <div className='footer-wrapper'>
      <ul className='footer-ul'>
        <li>
          <ul className='footer1'>
            <li><h3>About The Hexa Template</h3></li>
            <li style={{ width: 400 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus et dolor blanditiis consequuntur ex voluptates perspiciatis omnis unde minima expedita.</li>
            <li>
              <ul className='footer-links'>
                <span ><li><i class="fa-brands fa-twitter"></i></li></span>
                <span><li><i class="fa-brands fa-facebook"></i></li></span>
                <span><li><i class="fa-brands fa-linkedin-in"></i></li></span>
                <span><li><i class="fa-brands fa-instagram"></i></li></span>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <ul className='footer-contact'>
            <li><h3>Contact Info</h3></li>
            <li>
              <span class="d-block">Address:</span><br />
              <span class="text-white">34 Street Name, City Name Here, United States</span>
            </li>
            <li>
              <span class="d-block">Telephone:</span><br />
              <span class="text-white">+1 242 4942 290</span>
            </li>
            <li>
              <span class="d-block">Email:</span><br />
              <span class="text-white">info@yourdomain.com</span>
            </li>
          </ul>
        </li>
        <li>
          <ul className='quick'>
            <li><h3>Quick Links</h3></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Disclaimers</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </li>
      </ul>
      <div className='footer-end'>
        <p>
          Copyright ©
          <script>
            document.write(new Date().getFullYear());
          </script>2023 All rights reserved | This template is made with <i class="fa fa-heart" aria-hidden="true"></i> by <span>Nigar</span>
        </p>
      </div>

    </div>
  )
}

export default Footer