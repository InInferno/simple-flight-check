import React, {Component} from 'react'
import './Login.css'
import { isLoginSuccess } from '../../store/actions/actions'
import { connect } from "react-redux";

class Login extends Component {


    constructor (props) {
        super(props);
        this.state = {
          email: '',
          password: '',
          formErrors: {email: '', password: ''},
          emailValid: false,
          passwordValid: false,
          formValid: false
        }
    }
    
    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value},
            () => { this.validateField(name, value) 
        });
    }
    
    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
    
        switch(fieldName) {
          case 'email':
            emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            fieldValidationErrors.email = emailValid ? '' : 'Неверный формат email';
            break;
          case 'password':
            passwordValid = value.match(/[\da-zA-Z~!@#$%^&*()_+=\-;:`'"]{8,}/igm);
            fieldValidationErrors.password = passwordValid ? '': ' Пароль от 8 символов, без кирилицы';
            break;
          default:
            break;
        }
        this.setState({formErrors: fieldValidationErrors,
                        emailValid: emailValid,
                        passwordValid: passwordValid
                      }, this.validateForm);
    }
    
    validateForm() {
        this.setState({formValid: this.state.emailValid && this.state.passwordValid});
    }
    
    errorClass(error) {
        return(error.length === 0 ? '' : 'signin__error_active');
    }

    errorClassLabel(error) {
        return(error.length === 0 ? '' : 'signin__label_error');
    }

    errorClassInput(error) {
        return(error.length === 0 ? '' : 'signin__input_error');
    }

    submitForm = (event) => {
        event.preventDefault();
        localStorage.isLogin = true;
        console.log('login', this.props)
        console.log('login2', localStorage.isLogin)
        this.props.getLogin();
    }

    
    render() {
        return (
            <>
            <div className="page-signin-bg"></div>
            <div className="page-signin">
                <form className="signin" onSubmit={this.submitForm}>
                    <h1 className="signin__title">Simple Flight Check</h1>
                    <label className={`signin__label ${this.errorClassLabel(this.state.formErrors.email)}`}>Логин:</label>
                    <input className={`signin__input ${this.errorClassInput(this.state.formErrors.email)}`}
                        name='email'
                        value={this.state.email}
                        onChange={this.handleUserInput}
                    ></input>
                    <p className={`signin__error-email ${this.errorClass(this.state.formErrors.email)}`}>{this.state.formErrors.email}</p>
                    <label className={`signin__label signin__label_password ${this.errorClassLabel(this.state.formErrors.password)}`} value={this.state.password}>Пароль:</label>
                    <input className={`signin__input ${this.errorClassInput(this.state.formErrors.password)}`}
                        type='password'
                        name='password'
                        value={this.state.password}
                        onChange={this.handleUserInput}
                    ></input>
                    <p className={`signin__error-password ${this.errorClass(this.state.formErrors.password)}`}>{this.state.formErrors.password}</p>
                    <button 
                        className="signin__button"
                        disabled={!this.state.formValid}
                        type='submit'
                    >Войти</button>
                </form>
            </div>
            </>
        )
    }
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => {
  return {
    getLogin: () => dispatch(isLoginSuccess())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
