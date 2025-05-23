import React, { useState } from "react";
import "./SignIn.css";
import { Link } from "react-router-dom";

const SignIn = () => {
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [signInDetails, setSignInDetails] = useState({
        email: '',
        password: '',
    });

    const handleOnchange = (e) => {
        setSignInDetails({
            ...signInDetails,
            [e.target.name]: e.target.value
        });
        // Clear error when user starts typing
        if (error) setError('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Validate form
        if (!signInDetails.email.trim()) {
            setError('Email is required');
            return;
        }
        
        if (!signInDetails.password) {
            setError('Password is required');
            return;
        }

        // Simulate API request
        setLoading(true);
        
        setTimeout(() => {
            console.log(signInDetails);
            setSignInDetails({
                email: '',
                password: '',
            });
            setLoading(false);
            setError('');
            // Navigate to dashboard or home page would happen here
        }, 1500);
    };

    return (
        <main className="main-sign_in_container">
            <form onSubmit={handleSubmit} className="sign-in-container">
                {/* {error && <p className="error-paragraph">{error}</p>} */}
                
                <div className="sign-in-header">
                    <h3>Welcome back</h3>
                    <p className="sign-in-subtitle">Sign in to your account</p>
                </div>
                
                {/* <div className="social-signin">
                    <button type="button" className="social-button" aria-label="Sign in with Google">
                        G
                    </button>
                    <button type="button" className="social-button" aria-label="Sign in with Facebook">
                        f
                    </button>
                    <button type="button" className="social-button" aria-label="Sign in with Apple">
                        ⌘
                    </button>
                </div>
                
                <div className="sign-in-divider">
                    <span>or continue with email</span>
                </div> */}
                
                <div className="input-div">
                    <label htmlFor="email">Email address</label>
                    <input 
                        name="email" 
                        id="email" 
                        type="email"
                        placeholder="your@email.com" 
                        onChange={handleOnchange}
                        value={signInDetails.email}
                        autoComplete="email"
                    />
                </div>
                
                <div className="input-div">
                    <label htmlFor="password">Password</label>
                    <div className="password-container">
                        <input 
                            name="password" 
                            id="password" 
                            type="password"
                            placeholder="••••••••" 
                            onChange={handleOnchange}
                            value={signInDetails.password}
                            autoComplete="current-password"
                        />
                    </div>
                    <Link to="#" className="forgot-pass">Forgot password?</Link>
                </div>
                
                <button 
                    className="sign-in-button"
                    disabled={loading}
                >
                    {loading ? 'Signing in...' : 'Sign in'}
                </button>
                
                <p className="sign-in-redirect-p">
                    Don't have an account? <Link to="/sign-up">Create account</Link>
                </p>
            </form>
        </main>
    );
};

export default SignIn;