import { Component } from '../../core/Component';
import './Footer.scss';

export class Footer extends Component {
    constructor() {
        super({
            tagName: 'footer',
            className: 'footer',
            html: `
            <strong class="footer__copyright">
            All Rights Reserved, ${new Date().getFullYear()}
            </strong>
            `
        });
    }
}
