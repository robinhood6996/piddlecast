import React from 'react';
import logo from '../../assets/images/logo.png';
import abstract from '../../assets/images/login/slide-img.png';
import google from '../../assets/images/login/google.png'
import facebook from '../../assets/images/login/facebook.png'
import { Form, Button } from 'react-bootstrap';
import { BsEyeSlash, BsEye } from 'react-icons/bs';
const Login = () => {
    return (
        <div>
            <section className='register-page '>
                <div className="row">
                    <div className="col-12 col-lg-4 register-left">
                        <div className="container pt-4">
                            <div className="logo">
                                <img src={logo} alt="" />
                            </div>
                            <div className="logo-text">
                                <p className='text-white'>Creat an account and start saving
                                    thousands of design with 30-day
                                    free trial.</p>
                            </div>
                            <div className='register-img'>
                                <img className='img-fluid' src={abstract} alt="" />
                            </div>
                        </div>


                    </div>
                    <div className="col-12 col-lg-8 bg-white register-area-parent ">
                        <div className='language-selector'>
                            <select name="" id="">
                                <option value="">English (UK)</option>
                            </select>
                        </div>
                        <div className="container d-flex justify-content-center">

                            <div className="register-area mt-5">
                                <div className="register-header ">
                                    <h2 className='text-dark create-account fw-bold'>Sign In</h2>
                                </div>

                                <div className="login-providers d-flex justify-content-start">
                                    <div className='me-5'>
                                        <button className='py-2 px-3 provider-btn'>
                                            <img className='me-2' src={google} alt="" />
                                            <span>Sign up with Google</span>
                                        </button>
                                    </div>
                                    <div className=''>
                                        <button className='py-2 px-3 provider-btn'>
                                            <img className='me-2' src={facebook} alt="" />
                                            <span>Sign up with Facebook</span>
                                        </button>
                                    </div>
                                </div>

                                <div className="separetor text-center mb-5">
                                    <h2 className='alter-text'>-OR-</h2>
                                </div>

                                {/* Form  */}

                                <div className="register-form">
                                    <Form>


                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Control className='input-custom' type="email" placeholder="Email Address" />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Control className='input-custom' type="password" placeholder="Password" />
                                            {/* <BsEyeSlash />
                                            <BsEye /> */}
                                        </Form.Group>


                                        <Button className='btn btn-md btn-block register-btn' size='lg' variant="primary" type="submit">
                                            Submit
                                        </Button>
                                    </Form>

                                </div>
                                <p className='mt-4'>Don't have an account ? <span><a className='link' className='link' href="#">Sign up</a></span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;