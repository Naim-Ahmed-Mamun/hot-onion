import { useEffect, useState } from "react";
import initializeAuthentication from "../components/Login/Firebase/Firebase.init";
import {
    getAuth, signInWithPopup, GoogleAuthProvider, signOut, FacebookAuthProvider, GithubAuthProvider,
    onAuthStateChanged, createUserWithEmailAndPassword, updateProfile, sendEmailVerification, signInWithEmailAndPassword
} from "firebase/auth";

initializeAuthentication();


const useFirebase = () => {

    const [user, setUser] = useState({});
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const fbProvider = new FacebookAuthProvider();
    const githubProvider = new GithubAuthProvider();

    // google sign in
    const signInUsingGoogle = () => {
      return signInWithPopup(auth, googleProvider)
    }

    // facebook sign in
    const signInUsingFacebook = () => {
      return signInWithPopup(auth, fbProvider)
    }

    // github sign in
    const signInUsingGithub = () => {
      return signInWithPopup(auth, githubProvider)
    }

    // create user email password
    const signUpToEmailAndPassword = () => {
        // e.preventDefault();
        if (password.length < 6) {
            setError('Password Should be at least 6 character');
            return;
        }
      return createUserWithEmailAndPassword(auth, email, password)
        // .then(result => {
        //     updateUserProfile();
        //     verifyEmail();
        //     setUser(result.user);
        // })
        // .catch(err => {
        //     setError(err.message);
        // })
    }

    // update user
    const updateUserProfile = () => {
        updateProfile(auth.currentUser, {
            displayName: name,
        }).then(() => {
            // Profile updated!
            // ...
        }).catch((error) => {
            setError(error.message);
        });
    }

    // verify email
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                // alert(setSuccess('Email verification sent! Check Your Email'))
                setError('');
            });
    }

    // sign in user 
    const signInUserToEmailAndPassword = () => {
        // e.preventDefault();
      return signInWithEmailAndPassword(auth, email, password)
            // .then((result) => {
            //    setUser(result.user);
            //    setSuccess('Login successfully');
            //    setError('');
            // })
            // .catch((error) => {
            //     const errorMessage = error.message;
            //     setError(errorMessage);
            //     setSuccess('');
            // });
    }
    // onAuth state change
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({});
            }
        })
    }, [])

    // logout
    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }

    return {
        user,
        signInUsingGoogle,
        signInUsingFacebook,
        signInUsingGithub,
        signUpToEmailAndPassword,
        updateUserProfile,
        verifyEmail,
        signInUserToEmailAndPassword,
        setName,
        setEmail,
        setPassword,
        logout,
        setSuccess,
        setError,
        success,
        error,
    }
}

export default useFirebase;