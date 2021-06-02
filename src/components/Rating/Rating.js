import cn from 'classnames';

import { Component } from '../../core/Component';
import './Rating.scss';

export class Rating extends Component {
    constructor({
        //
        className,
        current,
        max
        //
    } = {}) {
        super({
            className: cn('rating', {
                [className]: className
            })
        });
        const items = [];
        for (let i = 0; i < max; i++) {
            if (i < current) {
                items.push('<i class="fas fa-star"></i>');
                continue;
            }
            items.push('<i class="far fa-star"></i>');
        }

        //<i class="fas fa-star"></i>
        //<i class="far fa-star"></i>

        this.html(items.join(''));
    }
}
