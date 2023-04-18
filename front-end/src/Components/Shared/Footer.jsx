import React from 'react'

function Footer() {
    const footeryear = new Date().getFullYear()
    return (
        <footer className="footer p-10 bg-black text-primary-content footer-center">
            <div>
                <p>
                © {footeryear} HAAV, All rights reserved
                </p>
                <a href = "mailto:haav@illinois.edu" classname="href">Contact Us</a>
            </div>
        </footer>
    )
}

export default Footer