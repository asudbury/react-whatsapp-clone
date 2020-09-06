import React from 'react';
import './Login.css';
import { auth, provider } from './firebase';
import { useStateValue } from './StateProvider';
import { setUser } from './actions/userAction';
// import { setMenuSidebar, setMenuChat } from './actions/drawerAction';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';

function Login() {
    const [ { user }, dispatch] = useStateValue();

    const signInGoogle = () => {
        auth
            .signInWithPopup(provider)
            .then(result => {
                dispatch(setUser(result.action));
            })
            .catch((error) => alert(error.message));
            // dispatch(setMenuSidebar(null));
            // dispatch(setMenuChat(null));
    };

    const loginAnonymously = () => {
        auth
            .signInAnonymously()
            .then((result) =>{
                dispatch(setUser(result.action));
            })
            .catch((error) => alert(error.message)); 
            // dispatch(setMenuSidebar(null));
            // dispatch(setMenuChat(null));
    };

    return (
        <div className="login"> 

            <div className="login__container">
            <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/150px-WhatsApp.svg.png"
                alt="WhatsApp Logo" 
            />
            <div className="login__text">
                <h1>Sign in to WhatsApp</h1>
            </div>
            
            <div className="login__withGoogle" onClick={signInGoogle}>
                <img 
                    src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
                    alt="Google Logo" 
                />
                <span>Sign in with Google</span>
            </div>

            <div className="login__withGoogle login__Anonymously" onClick={loginAnonymously}>
                <PermIdentityIcon />
                <span>Login Anonymously</span>
            </div>
    
            </div>
        </div>
    )
}

export default Login
