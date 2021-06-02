import { Component } from '../../core/Component';
import { Input, InputWithIcon, Button } from '../';
import './Auth.scss';

const SIGN_IN = 'SIGN_IN';
const SIGN_UP = 'SIGN_UP';

export class Auth extends Component {
    constructor() {
        super({
            tagName: 'form',
            className: 'auth',
            attrs: {
                autocomlete: 'off',
                novalidate: 'true'
            },
            html: `
                <h1 class="auth__title">Sign in</h1>
                <fieldset class="auth__fields"></fieldset>
            `
        });

        this._mode = SIGN_IN;

        this.addListeners({
            submit: this._handleSubmit.bind(this)
        });

        this.findNode('.auth__fields')
            //
            .after([
                new Button({
                    type: 'submit',
                    className: 'btn--primary btn__rect',
                    title: 'Submit',
                    text: 'Submit'
                }),
                new Button({
                    className: 'btn__rect auth__btn',
                    title: 'Switch to Sign Up',
                    text: 'Switch to Sign Up',
                    onClick: this._hendleToggleForm.bind(this)
                })
            ]);

        this._drawSignInForm();
    }

    _drawSignUpForm() {
        this.findNode('.auth__fields')
            .truncate()
            .append([
                new Input({
                    className: 'auth__field',
                    name: 'firstName',
                    placeholder: 'First name'
                }),
                new Input({
                    className: 'auth__field',
                    name: 'lastName',
                    placeholder: 'Last name'
                }),
                new Input({
                    className: 'auth__field',
                    type: 'number',
                    name: 'age',
                    placeholder: 'Age'
                }),
                new Input({
                    className: 'auth__field',
                    type: 'email',
                    name: 'email',
                    placeholder: 'E-mail'
                }),
                new InputWithIcon({
                    wrapperClassName: 'auth__field',
                    inputAttrs: {
                        type: 'password',
                        name: 'password',
                        placeholder: 'password'
                    },
                    icon:
                        '<i class="fas fa-eye input-with-icon__icon auth__icon"></i>'
                }),
                new InputWithIcon({
                    wrapperClassName: 'auth__field',
                    inputAttrs: {
                        type: 'password',
                        name: 'confirmPassword',
                        placeholder: 'Confirm password'
                    },
                    icon:
                        '<i class="fas fa-eye input-with-icon__icon auth__icon"></i>'
                })
            ])
            .findNode('.auth__btn')
            .text('Switch to Sign In')
            .findNode('.auth__title')
            .text('Sign Up');
    }

    _handleSubmit(e) {
        e.preventDefault();
        const formData = {};

        for (const element of this._node.elements) {
            if (!['SELECT', 'TEXTAREA', 'INPUT'].includes(element.tagName))
                continue;

            const { name, value } = element;
            formData[name] = value;
        }

        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.kanye.rest', true);
        xhr.send();

        console.log(JSON.stringify(formData, null, 4));
    }

    _drawSignInForm() {
        this.findNode('.auth__fields')
            .truncate()
            .append([
                new Input({
                    className: 'auth__field',
                    type: 'email',
                    name: 'email',
                    placeholder: 'E-mail'
                }),
                new InputWithIcon({
                    wrapperClassName: 'auth__field',
                    inputAttrs: {
                        type: 'password',
                        name: 'password',
                        placeholder: 'password'
                    },
                    icon:
                        '<i class="fas fa-eye input-with-icon__icon auth__icon"></i>'
                })
            ])
            .findNode('.auth__btn')
            .text('Switch to Sign Up')
            .findNode('.auth__title')
            .text('Sign In');
    }

    _hendleToggleForm() {
        if (this._mode === SIGN_IN) {
            this._mode = SIGN_UP;

            this._drawSignUpForm();
        } else {
            this._mode = SIGN_IN;

            this._drawSignInForm();
        }
    }
}
