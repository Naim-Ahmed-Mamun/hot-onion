import React from 'react';
import './Login.css';
import logo from '../../../img/logo2.png';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const { signInUsingGoogle, signInUsingFacebook, signInUsingGithub, signInUserToEmailAndPassword,
        setEmail, setPassword,success,error,setSuccess,setError } = useAuth();

    const handleSignInEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleSignInPassword = (e) => {
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

    // handle Login Email And Password
    const handleLoginEmailAndPassword = () => {
        signInUserToEmailAndPassword()
        .then((result) => {
            console.log(result.user);
            setSuccess('Login successfully');
            setError('');
            history.push(redirect_uri)
         })
         .catch((error) => {
             const errorMessage = error.message;
             setError(errorMessage);
             setSuccess('');
         });
    }

    return (
        <>
            <div className="container">
                <div className="login_wrapper">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <form onSubmit={handleLoginEmailAndPassword}>
                        <div className="email">
                            <input onBlur={handleSignInEmail} type="email" placeholder="Email" />
                        </div>
                        <div className="password">
                            <input onBlur={handleSignInPassword} type="password" placeholder="Password" />
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
                    <p>Red onion foods to new ?<Link to="/signUp"> Create an account</Link></p>
                </div>
            </div>
        </>
    );
};

export default Login;