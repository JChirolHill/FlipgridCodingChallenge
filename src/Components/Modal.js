import ModalContent from './ModalContent.js';
import SignUpForm from './SignUpForm.js';

export default function Modal() {
    return (
        <div className="form-modal col-12 col-md-8 col-lg-6">
            <ModalContent
                headerFirst={"Let's"}
                headerSecond={"Sign Up"}
                info={"Use the form below to sign up for this super awesome service. You're only a few steps away!"}
                content={<SignUpForm/>}/>
        </div>
    );
}