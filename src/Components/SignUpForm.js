import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignUpForm(props) {
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');

    const handleChangeUserName = (event) => {
        setUserName(event.target.value);
    }

    const handleChangeUserEmail = (event) => {
        setUserEmail(event.target.value);
    }

    const handleSignUp = (event) => {
        event.preventDefault();
        props.handleUpdateUserInfo(userName, userEmail);
        navigate('/welcome');
    }

    return (
        <form className="form">
            <div className="form-group">
                <label htmlFor="form-fName" className="font-weight-bold">First Name</label>
                <input type="text" id="form-fName" className="form-control fg-form-control fg-cc-border" onChange={handleChangeUserName} required/>
            </div>

            <div className="form-group">
                <label htmlFor="form-email" className="font-weight-bold">Email Address</label>
                <input type="email" id="form-email" className="form-control fg-form-control fg-cc-border" onChange={handleChangeUserEmail} required/>
            </div>
            
            <div className="form-group">
                <label htmlFor="form-password" className="font-weight-bold">Password</label>
                <input type="password" id="form-password" className="form-control fg-form-control fg-cc-border" required/>
            </div>

            <div className="text-right">
                <button className="btn btn-fg font-weight-bold" onClick={handleSignUp}>Sign Up</button>
            </div>
        </form>
    );
}