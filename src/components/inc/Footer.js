import {
    MDBFooter,
    MDBContainer,
    MDBInput,
    MDBCol,
    MDBRow,
    MDBBtn
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

import { FaFacebook, FaYoutube, FaEnvelope, FaTwitterSquare, FaLinkedin, FaGithubSquare } from 'react-icons/fa';

const Footer = () => {
    return (
        <MDBFooter className='text-center navbar-fixed-bottom border-top' color='black' bgColor='white'>
            <MDBContainer className='p-4'>
                <section className='mb-4'>
                    <a className='btn btn-outline-dark btn-floating m-1' href='#!' role='button'>
                        <FaFacebook />
                    </a>

                    <a className='btn btn-outline-dark btn-floating m-1' href='#!' role='button'>
                        <FaYoutube />
                    </a>

                    <a className='btn btn-outline-dark btn-floating m-1' href='#!' role='button'>
                        <FaEnvelope />
                    </a>

                    <a className='btn btn-outline-dark btn-floating m-1' href='#!' role='button'>
                        <FaTwitterSquare />
                    </a>

                    <a className='btn btn-outline-dark btn-floating m-1' href='#!' role='button'>
                        <FaLinkedin />
                    </a>

                    <a className='btn btn-outline-dark btn-floating m-1' href='#!' role='button'>
                        <FaGithubSquare />
                    </a>
                </section>

                <section className=''>
                    <form action=''>
                        <div className='row d-flex justify-content-center'>
                            <div className='col-auto'>
                                <p className='pt-2'>
                                    <strong>Sign up for our newsletter</strong>
                                </p>
                            </div>

                            <MDBCol md='5' start='12'>
                                <MDBInput contrast type='email' className='mb-4' placeholder="Enter your Email address" />
                            </MDBCol>

                            <div className='col-auto'>
                                <MDBBtn outline color='black' type='submit' className='mb-4 btn-dark'>
                                    Subscribe
                                </MDBBtn>
                            </div>
                        </div>
                    </form>
                </section>

                <section className='mb-4'>
                    <p>
                        {/* Customers should be number one, Employees number two, and then only your Shareholders come at number three. */}
                    </p>
                </section>

                <section className=''>
                    <MDBRow className="justify-content-center">
                        <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                            <h5 className='text-uppercase'>Support</h5>

                            <ul className='list-unstyled mb-0'>
                                <li>
                                    <a href='#!' className='text-black'>
                                        Help
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-black'>
                                        Advisories
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-black'>
                                        Status
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-black'>
                                        <Link to='/contact' className="Link">Contact Us</Link>

                                    </a>
                                </li>
                            </ul>
                        </MDBCol>

                        <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                            <h5 className='text-uppercase'>Company</h5>

                            <ul className='list-unstyled mb-0'>
                                <li>
                                    <a href='#!' className='text-black' >
                                        <Link to='/about' className="Link" >About Us</Link>

                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-black'>
                                        Blog
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-black'>
                                        Press
                                    </a>
                                </li>
                            </ul>
                        </MDBCol>

                        <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                            <h5 className='text-uppercase'>Terms & Policies</h5>

                            <ul className='list-unstyled mb-0'>
                                <li>
                                    <a href='#!' className='text-black'>
                                        Policies
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-black'>
                                        Terms of Use
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-black'>
                                        Code of Conduct
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-black'>
                                        Privacy
                                    </a>
                                </li>
                            </ul>
                        </MDBCol>
                    </MDBRow>
                </section>
            </MDBContainer>

            <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2022 Copyright:
                <a className='text-black' href='https://xsquare.netlify.app/'>
                    xsquare.com
                </a>
            </div>
        </MDBFooter>
    );
}

export default Footer