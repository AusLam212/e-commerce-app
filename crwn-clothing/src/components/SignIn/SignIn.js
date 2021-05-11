import React from "react";
import FormInput from "../FormInput/FormInput";

import "./SignIn.scss";

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        }
    }

    handleSubmit = e => {
        e.preventDefault();

        this.setState({ email: "", password: ""})
    }

    handleChange = e => {
        const { value, name } = e.target;

        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form>
                    <label>Email</label>
                    <FormInput
                        name="email"
                        type="email"
                        onChange={() => this.handleChange}
                        required
                    />
                    <label>Password</label>
                    <FormInput
                        name="password"
                        type="password"
                        onChange={() => this.handleChange}
                        required
                    />
                    <input type="submit" value="Submit Form" onClick={() => this.handleSubmit} />
                </form>
            </div>
        )
    }
}

export default SignIn;