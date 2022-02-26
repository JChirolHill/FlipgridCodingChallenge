export default function SignUpForm() {
    return (
        <form className="form">
            <div className="form-group">
                <label htmlFor="form-fName" className="font-weight-bold">First Name</label>
                <input type="text" id="form-fName" className="form-control fg-form-control fg-cc-border" required/>
            </div>

            <div className="form-group">
                <label htmlFor="form-email" className="font-weight-bold">Email Address</label>
                <input type="email" id="form-email" className="form-control fg-form-control fg-cc-border" required/>
            </div>
            
            <div className="form-group">
                <label htmlFor="form-password" className="font-weight-bold">Password</label>
                <input type="password" id="form-password" className="form-control fg-form-control fg-cc-border" required/>
            </div>

            <div className="text-right">
                <button className="btn btn-fg font-weight-bold">Sign Up</button>
            </div>
        </form>
    );
}