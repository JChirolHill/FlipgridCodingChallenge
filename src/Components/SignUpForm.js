import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignUpForm(props) {
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const [nameValid, setNameValid] = useState(true);
    const [errorName, setErrorName] = useState('');
    const [emailValid, setEmailValid] = useState(true);
    const [errorEmail, setErrorEmail] = useState('');
    const [passwordLengthValid, setPasswordLengthValid] = useState(false);
    const [passwordLowercaseValid, setPasswordLowercaseValid] = useState(false);
    const [passwordUppercaseValid, setPasswordUppercaseValid] = useState(false);
    const [passwordSpecialValid, setPasswordSpecialValid] = useState(false);

    const handleChangeUserName = (event) => {
        setUserName(event.target.value);
        if (!nameValid) {
            validate(event);
        }
    }

    const handleChangeUserEmail = (event) => {
        setUserEmail(event.target.value);
        if (!emailValid) {
            validate(event);
        }
    }

    const handleChangeUserPassword = (event) => {
        setUserPassword(event.target.value);
        validate(event);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (nameValid && emailValid && passwordValid()) {
            props.handleUpdateUserInfo(userName, userEmail);
            navigate('/welcome');
        }
    }

    const validate = (event) => {
        const id = event.target.id;
        const value = event.target.value;

        switch (id) {
            case 'form-fName':
                if (value === '' || value.match(/\w{2,}/)) {
                    setNameValid(true);
                    setErrorName('');
                }
                else {
                    setNameValid(false);
                    setErrorName('Name must be at least two characters, can include any letter or digit.');
                }
                break;
            case 'form-email':
                if (value === '' || value.match(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/)) {
                    setEmailValid(true);
                    setErrorEmail('');
                }
                else {
                    setEmailValid(false);
                    setErrorEmail('Invalid email.');
                }
                break;
            case 'form-password':
                if (value.match(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$ %^&*-]).{6,}$/)) {
                    setPasswordLengthValid(true);
                    setPasswordUppercaseValid(true);
                    setPasswordLowercaseValid(true);
                    setPasswordSpecialValid(true);
                }
                else {
                    setPasswordLengthValid(value.match(/^.{6,}$/));
                    setPasswordUppercaseValid(value.match(/^(?=.*?[A-Z]).{1,}$/));
                    setPasswordLowercaseValid(value.match(/^(?=.*?[a-z]).{1,}$/));
                    setPasswordSpecialValid(value.match(/^(?=.*?[#?!@$ %^&*-]).{1,}$/));
                }
                break;
            default:
                break;
        }
    }

    const passwordValid = () => {
        return passwordLengthValid && passwordLowercaseValid && passwordUppercaseValid && passwordSpecialValid;
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="form-fName" className="font-weight-bold">First Name</label>
                <input 
                    type="text" 
                    id="form-fName" 
                    className={`form-control fg-form-control ${nameValid || "fg-form-control-error"} fg-cc-border`} 
                    value={userName} 
                    onChange={handleChangeUserName}
                    onBlur={validate}
                    required/>
                <small className="text-danger">{errorName}</small>
            </div>

            <div className="form-group">
                <label htmlFor="form-email" className="font-weight-bold">Email Address</label>
                <input 
                    type="email" 
                    id="form-email" 
                    className={`form-control fg-form-control ${emailValid || "fg-form-control-error"} fg-cc-border`} 
                    value={userEmail} 
                    onChange={handleChangeUserEmail} 
                    onBlur={validate}
                    required/>
                <small className="text-danger">{errorEmail}</small>
            </div>
            
            <div className="form-group">
                <label htmlFor="form-password" className="font-weight-bold">Password</label>
                <input 
                    type="password" 
                    id="form-password" 
                    className={`form-control fg-form-control ${passwordValid || "fg-form-control-error"} fg-cc-border`} 
                    value={userPassword} 
                    onChange={handleChangeUserPassword} 
                    onBlur={validate}
                    required/>
                <small className={passwordLengthValid ? "text-success" : "text-danger"}>{passwordLengthValid ? '✔' : '✘'} At least 6 characters.</small><br/>
                <small className={passwordUppercaseValid ? "text-success" : "text-danger"}>{passwordUppercaseValid ? '✔' : '✘'} At least 1 uppercase letter.</small><br/>
                <small className={passwordLowercaseValid ? "text-success" : "text-danger"}>{passwordLowercaseValid ? '✔' : '✘'} At least 1 lowercase letter.</small><br/>
                <small className={passwordSpecialValid ? "text-success" : "text-danger"}>{passwordSpecialValid ? '✔' : '✘'} At least 1 special character.</small><br/>
            </div>

            <div className="text-right">
                <button type="submit" className="btn btn-fg font-weight-bold">Sign Up</button>
            </div>
        </form>
    );
}