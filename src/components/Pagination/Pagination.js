import cn from 'classnames';

import { Component } from '../../core/Component';
import { Button } from '../';
import './Pagination.scss';

export class Pagination extends Component {
    constructor({ gs, perPage, className } = {}) {
        super({
            className: cn('pagination', {
                [className]: className
            })
        });

        this.gs = gs;
        this._drawPaginationButtons = this._drawPaginationButtons.bind(
            this,
            perPage
        );
        gs.subscribe(this);

        const { activePage, filteredProducts } = gs.getState();

        const buttons = this._drawPaginationButtons(
            filteredProducts.length,
            activePage
        );

        this.append(buttons).addListeners({
            click: this.handlePageChange.bind(this)
        });
    }

    _drawPaginationButtons(perPage, totalAmount, activePage) {
        const max = Math.ceil(totalAmount / perPage);

        const buttons = [];

        for (let i = 0; i < max; i++) {
            const pageNumber = i + 1;

            buttons.push(
                new Button({
                    className: cn('pagination__btn', {
                        'pagination__btn--active': activePage === pageNumber
                    }),
                    attrs: {
                        'data-page': pageNumber
                    },
                    title: `Page ${pageNumber}`,
                    text: pageNumber
                })
            );
        }
        return buttons;
    }
    _render(prevState, nextState) {
        if (prevState.activeCategory === nextState.activeCategory) return;

        const { filteredProducts, activePage } = nextState;
        const buttons = this._drawPaginationButtons(
            filteredProducts.length,
            activePage
        );

        // this._node.innerHTML = '';
        // this.append(buttons.map(b => b.toNode()));

        this.truncate().append(buttons);
    }

    handlePageChange(e) {
        const button = e.target;
        if (button.tagName !== 'BUTTON') return;

        this.findNode('.pagination__btn--active')
            .removeClass('pagination__btn--active')
            .findNode(button)
            .addClass('pagination__btn--active')
            .resetNode();

        const { page } = button.dataset;

        this.gs.setState({ activePage: +page });
    }
}
