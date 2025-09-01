import Loader from "react-loaders"
import "./index.scss"
import AnimatedLetters from "../AnimatedLetters" 
import { useEffect, useRef, useState, useMemo } from "react"
import emailjs from "@emailjs/browser"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    const emailJsConfigured = useMemo(() => {
      return Boolean(
        process.env.REACT_APP_EMAILJS_SERVICE_ID &&
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID &&
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );
    }, []);

    useEffect(() => {
        const timerId = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 3000);
      
        return () => {
          clearTimeout(timerId);
        };
      }, []);

      const sendEmail = (e) => {
        e.preventDefault() 

        if (!emailJsConfigured) {
          alert("Email not configured yet. Please reach me via LinkedIn or email directly.");
          return;
        }

        emailjs
            .sendForm(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                refForm.current,
                process.env.REACT_APP_EMAILJS_PUBLIC_KEY
            )
            .then(
                () => {
                    alert("Message successfully sent! I will get back to you within 1 to 2 business days.")
                    window.location.reload(false)
                }, 
                () => { 
                    alert("Failed to send the message, please try again")
                }
            )
      }

    return(
        <>
            <div className = "container contact-page">
                <div className = "text-zone">
                    <table>
                        <tbody>
                        <tr>
                            <td className="left-side">
                                <h1>
                                    <AnimatedLetters letterClass={letterClass} strArray = {"Contact me".split("")} idx = {15} />
                                </h1>
                                {!emailJsConfigured && (
                                  <div className="notice">
                                    Email not configured. Please contact me via LinkedIn or email directly.
                                  </div>
                                )}
                                <p>
                                    <br/>
                                    Thank you for your interest in getting in touch! 
                                    <br/>
                                    <br/>Please feel free to reach out using the form or the links below.
                                    <br/>
                                    <br/>
                                    <a target = "_blank" rel = "noreferrer" href = "https://www.linkedin.com/in/aryan-thodupunuri/">
                                        <FontAwesomeIcon icon={faLinkedin}  className = "icon" color = "#4d4d4e" />
                                    </a>
                                    <a target = "_blank" rel = "noreferrer" href = "mailto:aryan20544@gmail.com">
                                        <FontAwesomeIcon icon={faEnvelope} className = "icon" color = "#4d4d4e" />
                                    </a>
                                </p>
                            </td>
                            <td className="right-side">
                                <div className="contact-form" onSubmit={sendEmail}>
                                    <form ref={refForm}>
                                        <ul>
                                            <li className = "half">
                                                <input type="text" name="name" placeholder="Name" required />
                                            </li>
                                            <li className="half">
                                                <input type="email" name="email" placeholder = "Email" required />
                                            </li>
                                            <li>
                                                <input placeholder = "Subject" type="text" name="subject" required/>
                                            </li>
                                            <li>
                                                <textarea placeholder="Message" name="message" required></textarea>
                                            </li>
                                            <li>
                                                <input type="submit" className="flat-button" value="SEND" />
                                            </li>
                                        </ul>
                                    </form>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Contact