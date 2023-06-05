//import React from "react";

/**
 * Created by volchenkov on 14.04.2023.
 */

const FormGroup = ReactBootstrap.FormGroup,
    ControlLabel = ReactBootstrap.ControlLabel,
    FormControl = ReactBootstrap.FormControl,
    Col = ReactBootstrap.Col
;

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {loginState: null, errorMessage: "", modalError: null}
    }
    validateLogin(event) {
        const self = this;
        event.preventDefault();
        let login = $("#inputLoginModal").val().trim();

        try{
            fetch("loginweb")
                .then(response => response.text())
                .then(loginRes => {
                    if (response.status === 0) {
                        localStorage.username = login;
                        //location.href = /\W\w+/.exec(location.pathname);
                    }else {
                        self.setState({loginState: "error"});
                        self.setState({errorMessage: "Неверный логин или пароль"});
                    }
                });
        }catch (error) {
            self.setState({loginState: "error"});
            self.setState({errorMessage: error});
            //self.setState({modalError: request.responseText});
        }
    }
    render() {
        return(<div><div><img src={`./img/user${  i  }.jpg`} alt = ""/></div>
            <div id="login-form" className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title col-sm-2" id="loginModalLabel">Вход</h4>
                    </div>
                    <div className="modal-body">
                        <span id="loginPanel">
                            <form className="login-form form-horizontal" id="loginform"
                                  onSubmit={this.validateLogin.bind(this)}>
                                <FormGroup validationState={this.state.loginState}>
                                    <Col componentClass={ControlLabel} sm={2}>
                                        Логин
                                    </Col>
                                    <Col sm={10}>
                                        <FormControl type="text" id="inputLoginModal" required="" placeholder="Логин"/>
                                        <FormControl.Feedback/>
                                    </Col>
                                </FormGroup>
                                <FormGroup validationState={this.state.loginState}>
                                    <Col componentClass={ControlLabel} sm={2}>
                                        Пароль
                                    </Col>
                                    <Col sm={10}>
                                        <FormControl type="password" id="inputPasswordModal" required=""
                                                     placeholder="Пароль"/>
                                        <FormControl.Feedback/>
                                        <div className={this.state.loginState == null ? 'hidden' : ''}>
                                            <ControlLabel style={{
                                                fontWeight: "inherit",
                                                fontStyle: "italic",
                                                color: "#a94442"
                                            }}>{this.state.errorMessage}</ControlLabel>
                                        </div>
                                    </Col>
                                </FormGroup>
                                <div className="form-group">
                                    <div className="col-sm-offset-2 col-sm-10">
                                        <button id="login_btn" type="submit"
                                                className="btn btn-primary" /*onClick={this.validateLogin.bind(this)}*/>Вход</button>
                                    </div>
                                </div>
                            </form>
                        </span>
                    </div>
                </div>
            </div>
        </div>);
    }
}

export default SignIn;