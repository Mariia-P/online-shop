import { Component, render } from '../../core';
import { Button, ModalWindow, Auth } from '../';
import './Header.scss';

export class Header extends Component {
    constructor({ title }) {
        super({
            tagName: 'header',
            className: 'header',
            html: ` 
                <div class="content-wrapper header__wrapper">
                    <h1 class="header__title">${title}</h1>
                </div>
            `
        });

        this.findNode('.header__title').after(
            new Button({
                className: 'btn--secondary btn__rect header__btn',
                title: 'Sign in',
                text: 'Sign in',
                onClick: this.handleModalOpen.bind(this)
            })
        );
    }

    handleModalOpen() {
        const modalWindow = new ModalWindow({
            children: new Auth()
        });
        render(modalWindow, document.getElementById('modal-root'));
    }
}
