import cn from 'classnames';

import { Input } from '../';
import { Component } from '../../core/Component';
import './InputWithIcon.scss';

const DEFAULT_INPUT_ATTRS = {
    type: 'text',
    autocomplete: 'off'
};

export class InputWithIcon extends Component {
    constructor({
        //
        wrapperClassName,
        inputClassname,
        wrapperAttrs = {},
        inputAttrs = DEFAULT_INPUT_ATTRS,
        icon = '<i class="fas fa-search input-with-icon__icon"></i>'
        //
    } = {}) {
        super({
            className: cn('input-with-icon', {
                [wrapperClassName]: wrapperClassName
            }),
            attrs: wrapperAttrs,
            html: icon
        });

        this.prepend(
            new Input({
                className: cn('input-with-icon__input', {
                    [inputClassname]: inputClassname
                }),
                attrs: {
                    ...inputAttrs,
                    type: inputAttrs.type || DEFAULT_INPUT_ATTRS.type,
                    autocomplete:
                        inputAttrs.autocomplete ||
                        DEFAULT_INPUT_ATTRS.autocomplete
                }
            })
        );
    }
}
