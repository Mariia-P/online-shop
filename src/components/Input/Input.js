import cn from 'classnames';

import { Component } from '../../core/Component';
import './Input.scss';

export class Input extends Component {
    constructor({
        //
        className,
        type = 'text',
        autocomplete = 'off',
        name,
        placeholder,
        attrs = {}
        //
    } = {}) {
        super({
            tagName: 'input',
            className: cn('input', {
                [className]: className
            }),
            attrs: {
                type,
                name,
                placeholder,
                autocomplete,
                ...attrs
            }
        });
    }
}
