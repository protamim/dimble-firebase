import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase/firebase.init";
import { useState } from "react";

const Login = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider()
    const [user, setUser] = useState(null);
    const githubProvider = new GithubAuthProvider()

    const handleGoogleLogin = ()=> {
        signInWithPopup(auth, provider)
        .then(result => {
            const user = result.user;
            console.log(user)
            setUser(user)
        }).catch(error => {
            console.log('error', error.message)
        });
    }

    const handleSignOut = () => {
        signOut(auth)
        .then((result) => {
            setUser(null)
            console.log(result)
        })
        .catch(error => {
            console.log(error)
        })
    }

    const handleGithubLogin = () => {
        signInWithPopup(auth, githubProvider)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
        }).catch(error => {
            console.log(error)
        })
    }

    return (
        <>
            {user ? <button onClick={handleSignOut}>Sign Out</button> :
            <button onClick={handleGoogleLogin}> Google Login</button>}
            {user && <div>
                <h2>User: {user.displayName} </h2>
                <p>Email: {user.email} </p>
                <img src={user.photoURL} alt={user.displayName} />
            </div>}

            <div style={{marginTop:'30px'}}>
                <button onClick={handleGithubLogin}>Github login</button>
            </div>
        </>
    );
};

export default Login;