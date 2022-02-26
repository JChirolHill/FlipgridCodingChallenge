import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Modal from './Components/Modal.js';
import SignUpForm from './Components/SignUpForm.js';
import Welcome from './Components/Welcome.js';
import PageNotFound from './Components/PageNotFound.js';
import React from 'react';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            userName: '',
            userEmail: ''
        };
    }

    updateUserInfo = (userName, userEmail) => {
        this.setState({ userName, userEmail });
    }

    render() {
        return (
            <div className="container h-100">
                <div className="row justify-content-center align-items-center h-100">
                    <Router>
                        <Routes>
                            <Route 
                                path="/" 
                                element={
                                    <Modal
                                        headerFirst={"Let's"}
                                        headerSecond={"Sign Up"}
                                        info={"Use the form below to sign up for this super awesome service. You're only a few steps away!"}
                                        content={<SignUpForm handleUpdateUserInfo={this.updateUserInfo}/>}/>
                                }>
                            </Route>
                            <Route 
                                path="welcome" 
                                element={
                                    <Modal
                                        headerFirst={"Welcome"}
                                        headerSecond={this.state.userName}
                                        info={"You have been registered for this awesome service. Please check your email listed below for instructions."}
                                        content={<Welcome email={this.state.userEmail}/>}/>
                                }/>
                            <Route path="*" element={<PageNotFound/>} />
                        </Routes>
                    </Router>
                </div>
            </div>
        );
    }
}