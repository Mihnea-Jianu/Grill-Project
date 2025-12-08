import './Form.css';

function Form({ currentPage, setCurrentPage, setLoginState }) {
    const handleSubmit = () => {
        if(currentPage === "/login" || currentPage === "/register") {
            setLoginState(true); setCurrentPage("/home");
        }
    };

    let form = {
        style: {},
        titleText: "",
        fields: [],
        submitButtonText: "",
        forgotPasswordButton: {
            text: "",
            style: {}
        },
        signUpOffer: {
            text1: "",
            text2: "",
            text3: "",
            style: {}
        }
    };

    if(currentPage === "/login") {
        form = {
            style: { height: "703px" },
            titleText: "Bine ai revenit mare grătaragiu!",
            fields: [
                { imageSrc: "mail.png", imageAlt: "mail", text: "E-mail"   },
                { imageSrc: "lock.png", imageAlt: "lock", text: "Password" },
            ],
            submitButtonText: "Log in",
            forgotPasswordButton: {
                text: "Forgot Password",
                style: {}
            },
            signUpOffer: {
                text1: "No account? Press here to",
                text2: "sign up",
                text3: ".",
                style: {}
            }
        };
    } else if(currentPage === "/register") {
        form = {
            style: { height: "783px" },
            titleText: "Gata să devii șef pe grătare?",
            fields: [
                { imageSrc: "person.png", imageAlt: "pers", text: "Full Name",        },
                { imageSrc: "phone.png",  imageAlt: "tlfn", text: "Telephone",        },
                { imageSrc: "mail.png",   imageAlt: "mail", text: "E-mail",           },
                { imageSrc: "lock.png",   imageAlt: "lock", text: "Password",         },
                { imageSrc: "lock.png",   imageAlt: "lock", text: "Confirm Password", },
            ],
            submitButtonText: "Sign up",
            forgotPasswordButton: {
                text: "",
                style: { display: "none" }
            },
            signUpOffer: {
                text1: "",
                text2: "",
                text3: "",
                style: { display: "none" }
            }
        };
    } else if(currentPage === "/reset-password") {
        form = {
            style: { height: "534px" },
            titleText: "Forgot Password",
            fields: [
                { imageSrc: "mail.png",   imageAlt: "mail", text: "E-mail" },
            ],
            submitButtonText: "Send",
            forgotPasswordButton: {
                text: "",
                style: { display: "none" }
            },
            signUpOffer: {
                text1: "",
                text2: "",
                text3: "",
                style: { display: "none" }
            }
        };
    } else if(currentPage === "/post-grill") {
        form = {
            style: { width: "650px", height: "609px" },
            titleText: "Create a post",
            fields: [
                { imageSrc: "",   imageAlt: "", text: "Grill Name"  },
                { imageSrc: "",   imageAlt: "", text: "Description" },
            ],
            submitButtonText: "Post this grill!",
            forgotPasswordButton: {
                text: "",
                style: { display: "none" }
            },
            signUpOffer: {
                text1: "",
                text2: "",
                text3: "",
                style: { display: "none" }
            }
        };
    }

    return (
        <div className = "Form" style = { form.style }>
            <div className = "Title"> { form.titleText } </div>

            {form.fields.map((field) => (
                <div className = "Field">
                    { field.imageSrc !== "" && <div className = "FieldImage"> <img src = { field.imageSrc } alt = { field.imageAlt }/> </div>}
                    <div className = "FieldText"> { field.text } </div>
                </div>
            ))}

            <div className = "SubmitButton" onClick = { () => handleSubmit() }> 
                { form.submitButtonText } 
            </div>
            <div className = "ForgotPasswordButton" onClick = { () => setCurrentPage("/reset-password") } style = { form.forgotPasswordButton.style }> 
                { form.forgotPasswordButton.text } 
            </div>
            <div className = "SignUpOffer" style = { form.signUpOffer.style }>
                <div className = "SignUpText"> { form.signUpOffer.text1 } &nbsp; </div>
                <div className = "SignUpButton" onClick = { () => setCurrentPage("/register") }> 
                    { form.signUpOffer.text2 }
                </div>
                <div className = "SignUpText"> { form.signUpOffer.text3 } </div>
            </div>
        </div>
    );
}

export default Form;