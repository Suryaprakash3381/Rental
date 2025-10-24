import React, { useState } from 'react';
import { Form, Button, Card, Container, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:5000/api/v1/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            const data = await res.json();
            console.log('Login response:', data); // ✅ Check what's inside

            if (!res.ok || !data.token) {
                alert(data.message || 'Login failed');
                return;
            }

            // ✅ 1. Save token to localStorage
            localStorage.setItem('token', data.token); // Adjust `data.token` if your backend sends a different key

            // ✅ 2. Notify Header to update
            window.dispatchEvent(new Event('loginStatusChanged'));

            // ✅ 3. Show success and redirect
            alert('Login successful!');
            navigate('/'); 
        } catch (error) {
            console.error('Login error:', error);
            alert('Something went wrong. Please try again.');
        }
    };

    return (
        <Container fluid className="min-vh-100 d-flex align-items-center justify-content-center bg-dark">
            <Row className="w-100 justify-content-center">
                <Col xs={12} sm={8} md={6} lg={4}>
                    <Card className="shadow-lg border-0">
                        <Card.Body className="p-4">
                            <h2 className="text-center mb-4 text-primary">Welcome to Royal Ride</h2>
                            <Form onSubmit={submitHandler}>
                                <Form.Group className="mb-3" controlId="formEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </Form.Group>
                                <div className="mb-3 text-end">
                                    <a href="#" className="small text-primary text-decoration-underline">
                                        Forgot Password?
                                    </a>
                                </div>
                                <Button variant="primary" type="submit" className="w-100 mb-3">
                                    Log in
                                </Button>
                                <p className="text-center text-muted small mb-2">
                                    By continuing, you agree to Royal Ride’s{' '}
                                    <a href="#" className="text-primary text-decoration-underline">terms of services</a> and acknowledge you've read our{' '}
                                    <a href="#" className="text-primary text-decoration-underline">privacy policy</a>.
                                </p>
                                <div className="text-center">
                                    <Link to="/register" className="text-primary text-decoration-underline">
                                        Don't have an account?
                                    </Link>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;
