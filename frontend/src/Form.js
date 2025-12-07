import './Form.css';

function Form({ currentPage, setCurrentPage, setLoginState }) {
    if(currentPage === "/login") {
        return (
            <div className = "Form" style = {{ height: "703px", width: "703px" }}>
                <div className = "Title"> Bine ai revenit mare grătaragiu! </div>
                <div className = "Fields">

                </div>
                <div className = "SubmitButton"> Login </div>
                <div className = "ForgotPasswordButton"> Forgot Password </div>
                <div className = "SignUpOffer">
                    <div className = "SignUpText"> No account? Press here to&nbsp; </div>
                    <div className = "SignUpButton"> sign up </div>
                    <div className = "SignUpText"> . </div>
                </div>
            </div>
        );
    }
}

export default Form;