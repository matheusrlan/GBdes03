import React from 'react'
import './contact.css'

const Contact = () => {
    return (
        <section className="contact">
            <div className="contact-me">
                <a className="link" target="_blank" rel="noreferrer" href="http://api.whatsapp.com/send?phone=5524981018682">
                    <img src="https://gobeyond.vercel.app/static/media/whatsapp.4a8733ff.svg" alt="whatsapp" className="icon" />
                    <span className="text">Whatsapp</span>
                </a>
                <a className="link" target="_blank" rel="noreferrer" href="https://github.com/matheusrlan">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="github" className="icon" />
                    <span className="text">GitHub</span>
                </a>
                <a className="link" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/matheus-rocha-la/">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" alt="linkedin" className="icon" />
                    <span className="text">Linkedin</span>
                </a>
            </div>
        </section>
    )
}

export default Contact