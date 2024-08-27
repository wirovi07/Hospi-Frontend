import React from 'react';
import {
    MDBContainer,
    MDBBtn,
    MDBInput,
    MDBCheckbox
} from 'mdb-react-ui-kit';

function Register() {
    return (
        <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

            <div className="text-center mb-3">
                <p className='fs-3'>Regístrate con:</p>

                <div className="d-flex justify-content-between mx-auto" style={{ width: '40%' }}>
                    <a href="https://www.facebook.com/" target="_blank" className="m-1" style={{ color: '#1266f1' }} rel="noreferrer">
                        <i className="fab fa-facebook-f" style={{ fontSize: 'small' }}></i>
                    </a>

                    <a href="https://www.twitter.com/" target="_blank" className="m-1" style={{ color: '#1266f1' }} rel="noreferrer">
                        <i className="fab fa-twitter" style={{ fontSize: 'small' }}></i>
                    </a>

                    <a href="https://www.google.com/" target="_blank" className="m-1" style={{ color: '#1266f1' }} rel="noreferrer">
                        <i className="fab fa-google" style={{ fontSize: 'small' }}></i>
                    </a>

                    <a href="https://www.github.com/" target="_blank" className="m-1" style={{ color: '#1266f1' }} rel="noreferrer">
                        <i className="fab fa-github" style={{ fontSize: 'small' }}></i>
                    </a>
                </div>


                <p className="text-center mt-3">or:</p>
            </div>

            <MDBInput wrapperClass='mb-4' label='Name' id='form1' type='text' />
            <MDBInput wrapperClass='mb-4' label='Username' id='form2' type='text' />
            <MDBInput wrapperClass='mb-4' label='Email' id='form3' type='email' />
            <MDBInput wrapperClass='mb-4' label='Password' id='form4' type='password' />

            <div className='d-flex justify-content-center mb-4'>
                <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='He leído y acepto los términos.' />
            </div>

            <MDBBtn className="mb-4 w-100">Regístrate</MDBBtn>

        </MDBContainer>
    );
}

export default Register;
