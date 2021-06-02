import cn from 'classnames';

import { Component } from '../../core/Component';
import './Button.scss';

export class Button extends Component {
    constructor({
        //
        className,
        title,
        type = 'button',
        attrs = {},
        text,
        html,
        onClick
        //
    } = {}) {
        super({
            tagName: 'button',
            className: cn('btn', {
                [className]: className
            }),
            attrs: {
                type,
                title,
                ...attrs
            },
            text,
            html
        });

        this.addListeners({ click: onClick });
    }
}
