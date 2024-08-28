import React, { useState } from 'react';
import axios from 'axios';
import { MDBBtn, MDBInput } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';  // Importa useNavigate

function Register() {
    const navigate = useNavigate();  // Define useNavigate

    // Estado para manejar los datos del formulario
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        role_id: 1 // Puedes ajustar esto según tus necesidades
    });

    // Maneja los cambios en los campos del formulario
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value
        });
    };

    // Maneja el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validar que los campos no estén vacíos
        if (!formData.username || !formData.email || !formData.password) {
            alert("Por favor, complete todos los campos.");
            return; // Detener el envío si algún campo está vacío
        }

        try {
            const response = await axios.post('http://localhost:3040/api/auth/register', formData, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            console.log('Usuario registrado:', response.data);

            // Redirigir al formulario de login después del registro
            navigate('/login');  // Redirige a la página de login

        } catch (error) {
            if (error.response) {
                // La solicitud se hizo y el servidor respondió con un código de estado
                // que no está en el rango de 2xx
                console.error('Error de respuesta:', error.response.data);
            } else if (error.request) {
                // La solicitud se hizo pero no se recibió respuesta
                console.error('Error de solicitud:', error.request);
            } else {
                // Algo pasó al configurar la solicitud
                console.error('Error al configurar la solicitud:', error.message);
            }
            // Aquí puedes manejar el error (e.g., mostrar un mensaje al usuario)
        }
    };

    return (
        <div className="container p-3 my-5 d-flex flex-column w-50">
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
                <p className="text-center mt-3">Ó:</p>
            </div>
            <MDBInput
                wrapperClass='mb-4'
                label='Nombre'
                id='username'
                type='text'
                value={formData.username}
                onChange={handleChange}
            />
            <MDBInput
                wrapperClass='mb-4'
                label='Usuario'
                id='name'
                type='text'
                value={formData.name}
                onChange={handleChange}
            />
            <MDBInput
                wrapperClass='mb-4'
                label='Correo'
                id='email'
                type='email'
                value={formData.email}
                onChange={handleChange}
            />
            <MDBInput
                wrapperClass='mb-4'
                label='Contraseña'
                id='password'
                type='password'
                value={formData.password}
                onChange={handleChange}
            />

            <button type="button" className="btn btn-primary mb-4 w-100" onClick={handleSubmit}> Regístrate </button>

        </div>
    );
}

export default Register;
