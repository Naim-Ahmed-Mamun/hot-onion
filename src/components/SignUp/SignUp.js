import { faFacebookF, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import logo from '../../img/logo2.png';
import './SignUp.css';

const SignUp = () => {
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const { signInUsingGoogle, signInUsingFacebook, signInUsingGithub, signUpToEmailAndPassword,
        setEmail, setPassword, setName, updateUserProfile, verifyEmail, success, error, setSuccess,setError } = useAuth();

    // name
    const handleUserName = (e) => {
        setName(e.target.value)
    }
    // email
    const handleUserEmail = (e) => {
        setEmail(e.target.value)
    }
    // password
    const handleUserPassword = (e) => {
        setPassword(e.target.value)
    }

    // google sign in
    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(result => {
                console.log(result.user)
                // setUser(result.user)
                history.push(redirect_uri)
            })
            .catch(err => {
                console.log(err.message);
                // setError(err.message);
            })
    }

    // fb sign in
    const handleFacebookSignIn = () => {
        signInUsingFacebook()
            .then(result => {
                console.log(result.user)
                // setUser(result.user)
                history.push(redirect_uri)
            })
            .catch(err => {
                console.log(err.message);
                // setError(err.message);
            });
    }

    // github sign in
    const handleGithubSignIn = () => {
        signInUsingGithub()
            .then(result => {
                console.log(result.user)
                // setUser(result.user)
                history.push(redirect_uri)
            })
            .catch(err => {
                console.log(err.message);
                // setError(err.message);
            })
    }

    // handle Register Email And Password
    const handleRegisterEmailAndPassword = (e) => {
        e.preventDefault();
        signUpToEmailAndPassword()
            .then(result => {
                updateUserProfile();
                verifyEmail();
                // setUser(result.user);
                console.log(result.user);
                history.push(redirect_uri)
                setSuccess(alert('Email verification sent! Check Your Email'))
            })
            .catch(err => {
                // setError(err.message);
                setError(err.message);
            })
    }

 

    return (
        <>
            <section className="sign_up">
                <div className="container">
                    <div className="sign_up_wrapper">
                        <div className="logo">
                            <img src={logo} alt="" />
                        </div>
                        <form onSubmit={handleRegisterEmailAndPassword}>
                            <div className="name">
                                <input onBlur={handleUserName} type="text" placeholder="Name" required />
                            </div>
                            <div className="email">
                                <input onBlur={handleUserEmail} type="email" placeholder="Email" required />
                            </div>
                            <div className="password">
                                <input onBlur={handleUserPassword} type="password" placeholder="Password" required />
                            </div>
                            <div className="password">
                                <input type="password" placeholder="Confirm Password" />
                            </div>
                            <div className="submit">
                                <input type="submit" value="Submit" />
                            </div>
                            <p className="text-success">{success}</p>
                            <p className="text-danger">{error}</p>
                        </form>
                        <div className="others_sign_in">
                            <div className="others_sign_in d-flex align-items-center justify-content-center mb-4">
                                <div className="google social_icon" onClick={handleGoogleSignIn}>
                                    <FontAwesomeIcon className="icon" icon={faGoogle} />
                                </div>
                                <div className="fb social_icon" onClick={handleFacebookSignIn}>
                                    <FontAwesomeIcon className="icon" icon={faFacebookF} />
                                </div>
                                <div className="github social_icon" onClick={handleGithubSignIn}>
                                    <FontAwesomeIcon className="icon" icon={faGithub} />
                                </div>
                            </div>
                        </div>
                        <p>Already have an account ? <Link to="/login">Login</Link></p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SignUp;