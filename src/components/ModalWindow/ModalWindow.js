import { Component } from '../../core/Component';
import './ModalWindow.scss';

export class ModalWindow extends Component {
    constructor({ children } = {}) {
        super({
            className: 'backdrop',
            html: '<div class="modal-window"></div>'
        });

        this.addListeners({
            click: this.handleModalClose.bind(this)
        });

        if (children) {
            this.findNode('.modal-window')
                //
                .append(children)
                .resetNode();
        }

        document.body.style.overflowY = 'hidden';
        document.body.style.paddingRight = '17.5px';
    }

    handleModalClose(e) {
        if (e.target.className != 'backdrop') return;
        this.remove();
        document.body.removeAttribute('style');
    }
}
