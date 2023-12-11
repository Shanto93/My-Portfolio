/* eslint-disable react/no-unescaped-entities */
import { FaEnvelopeOpen, FaPhoneSquareAlt, FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import './contact.css'

const Contact = () => {
    return (
        <section className="contact section max-w-screen-lg mx-auto">
            <h2 className="section__title">Get In <span>Touch</span></h2>

            <div className="contact__container container grid">
                <div className="contact__data">
                    <h3 className="contact__title">Don't be Shy!</h3>
                    <p className="contact__description">
                        Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                    </p>

                    <div className="contact__info">
                        <div className="info__item">
                            <FaEnvelopeOpen className='info_icon' />
                            <div>
                                <span className="info__title">Mail me</span>
                                <h4 className="info__desc">shantoislam7363@gmail.com</h4>
                            </div>
                        </div>

                        <div className="info__item">
                            <FaPhoneSquareAlt className='info_icon' />
                            <div>
                                <span className="info__title">Call me</span>
                                <h4 className="info__desc">+8801997266467</h4>
                            </div>
                        </div>
                    </div>

                    <div className="contact__socials ">
                        <a href="https://www.facebook.com/shanto.islam.98478672/" className="contact__social-link flex items-center justify-center">
                            <FaFacebookF/>
                        </a>
                        <a href="https://www.twitter.com/" className="contact__social-link flex items-center justify-center">
                            <FaTwitter />
                        </a>
                        <a href="https://www.youtube.com/channel/UCr2wwL9t4qKs_GZpaYQo5NA" className="contact__social-link flex items-center justify-center">
                            <FaYoutube />
                        </a>
                    </div>
                </div>

                <form className="contact__form">
                    <div className="form__input-group">
                        <div className="form__input-div">
                            <input
                                type="text"
                                placeholder='Your Name'
                                className='form__control'
                            />
                        </div>

                        <div className="form__input-div">
                            <input
                                type="email"
                                placeholder='Your Email'
                                className='form__control'
                            />
                        </div>

                        <div className="form__input-div">
                            <input
                                type="text"
                                placeholder='Your Subject'
                                className='form__control'
                            />
                        </div>
                    </div>
                    <div className="form__input-div">
                            <textarea
                            className='form__control textarea'
                                name=""
                                placeholder='Your Message'
                                // cols="10"
                                // rows="5"
                            >
                            </textarea>

                            <button className="button mt-4 flex items-center justify-center">Send Message 
                            <span className='button__icon contact__button-icon flex items-center justify-center'>
                                <FiSend />
                            </span>
                            </button>
                        </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;