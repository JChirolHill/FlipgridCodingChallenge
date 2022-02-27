import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignUpForm(props) {
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [nameValid, setNameValid] = useState(true);
    const [emailValid, setEmailValid] = useState(true);
    const [passwordValid, setPasswordValid] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');

    const handleChangeUserName = (event) => {
        setUserName(event.target.value);
        validate(event.target.id, event.target.value);
    }

    const handleChangeUserEmail = (event) => {
        setUserEmail(event.target.value);
        validate(event.target.id, event.target.value);
    }

    const handleChangeUserPassword = (event) => {
        setUserPassword(event.target.value);
        validate(event.target.id, event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.handleUpdateUserInfo(userName, userEmail);
        navigate('/welcome');
    }

    const validate = (id, value) => {
        switch (id) {
            case 'form-fName':
                if (value.match(/\w{2,}/)) {
                    setNameValid(true);
                    setErrorMessage('');
                }
                else {
                    setNameValid(false);
                    setErrorMessage('Name must be at least two characters, can include any letter or digit.');
                }
                break;
            case 'form-email':
                if (value.match(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/)) {
                    setEmailValid(true);
                    setErrorMessage('');
                }
                else {
                    setEmailValid(false);
                    setErrorMessage('Invalid email.');
                }
                break;
            case 'form-password':
                if (value.match(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$ %^&*-]).{6,}$/)) {
                    setPasswordValid(true);
                    setErrorMessage('');
                }
                else {
                    setPasswordValid(false);
                    setErrorMessage('Password must be at least 6 characters with at least one uppercase letter, lowercase letter, and special character.');
                }
                break;
            default:
                break;
        }
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="form-fName" className="font-weight-bold">First Name</label>
                <input type="text" id="form-fName" className={`form-control fg-form-control ${nameValid || "fg-form-control-error"} fg-cc-border`} value={userName} onChange={handleChangeUserName} required/>
            </div>

            <div className="form-group">
                <label htmlFor="form-email" className="font-weight-bold">Email Address</label>
                <input type="email" id="form-email" className={`form-control fg-form-control ${emailValid || "fg-form-control-error"} fg-cc-border`} value={userEmail} onChange={handleChangeUserEmail} required/>
            </div>
            
            <div className="form-group">
                <label htmlFor="form-password" className="font-weight-bold">Password</label>
                <input type="password" id="form-password" className={`form-control fg-form-control ${passwordValid || "fg-form-control-error"} fg-cc-border`} value={userPassword} onChange={handleChangeUserPassword} required/>
            </div>

            <p className="text-danger">{errorMessage}</p>

            <div className="text-right">
                <button type="submit" className="btn btn-fg font-weight-bold">Sign Up</button>
            </div>
        </form>
    );
}