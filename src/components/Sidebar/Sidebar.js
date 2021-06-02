import { Component } from '../../core/Component';
import './Sidebar.scss';

export class Sidebar extends Component {
    constructor() {
        super({
            tagName: 'aside',
            className: 'sidebar',
            text: 'Sidebar'
        });
    }
}
