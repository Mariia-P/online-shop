import { Component } from '../../core/Component';
import './Main.scss';
import { Products, Pagination } from '../';

export class Main extends Component {
    constructor({ gs, perPage }) {
        super({
            tagName: 'main',
            className: 'main',
            children: [
                //
                new Products({ gs, perPage }),
                new Pagination({ gs, perPage })
            ]
        });
    }
}
