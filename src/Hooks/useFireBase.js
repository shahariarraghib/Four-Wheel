
import { useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, updateProfile, getIdToken } from "firebase/auth";
import initializeFirebase from '../Pages/Login/FireBase/FireBase.init';


initializeFirebase();

const useFireBase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('')
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('');

    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    const registerUser = (email, password, name) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;

                const newUser = { email, displayName: name }
                setUser(newUser);

                // save user to the database
                saveUser(email, name, 'POST');
                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name

                }).then(() => {
                    // Profile updated!
                    // ...
                }).catch((error) => {
                    // console.log(error.message)
                });
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message)
            })
            .finally(() => setIsLoading(false));
        ;
    }

    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;



                const redirect_url = location?.state?.from || '/home';
                history(redirect_url);
                // console.log(redirect_url)
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message)
            })
            .finally(() => setIsLoading(false));
    }

    // google account signin
    const googleSignin = (location, history) => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                console.log(user.email)
                // save user to the database
                // saveUserg(user.email, user.displayName);
                saveUser(user.email, user.displayName, 'PUT');

                // console.log(user)
                const redirect_url = location?.state?.from || '/home';
                history(redirect_url);
                console.log(redirect_url)
                // setAuthError('');
            }).catch((error) => {
                console.log(error.message)
                // setAuthError(error.message)
            });
    }



    // observer user state
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                // setp 1 jwt
                getIdToken(user)
                    .then(idToken => {
                        setToken(idToken);
                    })
            } else {
                setUser()
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth])

    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    }

    // user ke database a save korar jonno

    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://four-wheel-25-06-2022.herokuapp.com/userInfo', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })

            .then()
    }

    // chack admin
    useEffect(() => {
        fetch(`https://four-wheel-25-06-2022.herokuapp.com/userInfo/${user?.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin)

            )

    }, [user?.email])

    return {
        user,
        admin,
        googleSignin,
        logout,
        registerUser,
        isLoading,
        authError,
        loginUser,
        token


    }
};

export default useFireBase;