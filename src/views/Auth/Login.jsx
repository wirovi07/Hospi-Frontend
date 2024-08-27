/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBInput } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

import './Login.css';

function Login() {

    return (
        <MDBContainer fluid className="p-3 my-5 h-custom">

            <MDBRow>

                <MDBCol col='10' md='6'>
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Sample image" />
                </MDBCol>

                <MDBCol col='4' md='6'>

                    <div className="d-flex flex-row align-items-center justify-content-center">

                        <p className="lead fw-normal mb-0 me-3">Inicia sesión con</p>

                        <a href="https://web.facebook.com/?locale=es_LA&_rdc=1&_rdr" target="_blank" rel="noopener noreferrer" className="btn btn-md me-2" style={{ display: 'inline-block', padding: '10px', borderRadius: '50%', backgroundColor: '#007bff', color: 'white', textAlign: 'center' }}>
                            <i className="fab fa-facebook-f"></i>
                        </a>

                        <a href="https://x.com/?lang=es" target="_blank" rel="noopener noreferrer" className="btn btn-md me-2" style={{ display: 'inline-block', padding: '10px', borderRadius: '50%', backgroundColor: '#1DA1F2', color: 'white', textAlign: 'center' }}>
                            <i className="fab fa-twitter"></i>
                        </a>

                        <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer" className="btn btn-md me-2" style={{ display: 'inline-block', padding: '10px', borderRadius: '50%', backgroundColor: '#0077B5', color: 'white', textAlign: 'center' }}>
                            <i className="fab fa-linkedin-in"></i>
                        </a>


                    </div>

                    <div className="divider d-flex align-items-center my-4">
                        <p className="text-center fw-bold mx-3 mb-0">O</p>
                    </div>

                    <MDBInput wrapperClass='mb-4' label='Correo' id='formControlLg' type='email' size="lg" />
                    <MDBInput wrapperClass='mb-4' label='Contraseña' id='formControlLg' type='password' size="lg" />

                    <div className="d-flex justify-content-between mb-4">
                        <a href="!#">Olvide la contraseña?</a>
                    </div>

                    <div className='text-center text-md-start mt-4 pt-2'>
                        <MDBBtn className="mb-0 px-5" size='lg'>Ingresar</MDBBtn>
                        <p className="small fw-bold mt-2 pt-1 mb-2">
                            No tienes una cuenta? <Link to="/register" className="link-danger">Regístrate</Link>
                        </p>
                    </div>

                </MDBCol>

            </MDBRow>

            <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">

                <div className="text-white mb-3 mb-md-0">
                    Copyright © 2024. Todos los datos reservados.
                </div>

                <div>
                    <a href="https://web.facebook.com/?locale=es_LA&_rdc=1&_rdr" target="_blank" rel="noopener noreferrer" className="mx-3" style={{ color: 'white' }}>
                        <i className="fab fa-facebook-f" style={{ fontSize: '24px' }}></i>
                    </a>

                    <a href="https://x.com/?lang=es" target="_blank" rel="noopener noreferrer" className="mx-3" style={{ color: 'white' }}>
                        <i className="fab fa-twitter" style={{ fontSize: '24px' }}></i>
                    </a>

                    <a href="https://www.google.com/?hl=es" target="_blank" rel="noopener noreferrer" className="mx-3" style={{ color: 'white' }}>
                        <i className="fab fa-google" style={{ fontSize: '24px' }}></i>
                    </a>

                    <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer" className="mx-3" style={{ color: 'white' }}>
                        <i className="fab fa-linkedin-in" style={{ fontSize: '24px' }}></i>
                    </a>
                </div>

            </div>

        </MDBContainer>
    );
}

export default Login;