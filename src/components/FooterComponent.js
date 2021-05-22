import React from 'react'
import { Link } from 'react-router-dom'

function FooterComponent() {
    return (
      <footer>
        <div class="social">
          <i class="fab fa-facebook-f"></i>
          <i class="fab fa-instagram"></i>
          <i class="fab fa-twitter"></i>
        </div>
        <Link class="contact" to="#">contact us</Link>
      </footer>
    )
}

export default FooterComponent
