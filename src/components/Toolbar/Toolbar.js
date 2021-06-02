import cn from 'classnames';

import { Component } from '../../core/Component';
import { Button, InputWithIcon } from '../';
import './Toolbar.scss';

const DEFAULT_PAGE = 1;

export class Toolbar extends Component {
    constructor({ gs, categories }) {
        super({
            className: 'toolbar',
            html: `
            <div class="content-wrapper toolbar__wrapper">
                <div class="toolbar__nav"></div>
                <div class="toolbar__search"></div>
                </div>   
            `
        });

        this.gs = gs;
        const { activeCategory } = gs.getState();
        this.addListeners({
            //
            click: this.handleCategoryChange.bind(this)
        })
            .findNode('.toolbar__nav')
            .append(
                categories.map(
                    category =>
                        new Button({
                            className: cn(
                                'btn--secondary btn__rect toolbar__btn',
                                {
                                    toolbar__btn__active:
                                        category === activeCategory
                                }
                            ),
                            attrs: {
                                'data-category': category
                            },
                            title: category,
                            text: category
                        })
                )
            )
            .findNode('.toolbar__search')
            .append(
                new InputWithIcon({
                    //
                    inputAttrs: {
                        placeholder: 'Search',
                        name: 'search'
                    }
                })
            );
    }

    handleCategoryChange(e) {
        const button = e.target;
        if (button.tagName !== 'BUTTON') return;

        this.findNode('.toolbar__btn__active')
            .removeClass('toolbar__btn__active')
            .findNode(button)
            .addClass('toolbar__btn__active');

        const { category } = button.dataset;
        // console.log('[button.dataset]', button.dataset);
        const { products } = this.gs.getState();

        this.gs.setState({
            //
            activePage: DEFAULT_PAGE,
            activeCategory: category,
            filteredProducts: products.filter(p => p.category === category)
        });
    }
}
