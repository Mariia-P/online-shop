import { Component } from '../../core';
import { Product } from '../';
import './Products.scss';

export class Products extends Component {
    constructor({ gs, perPage }) {
        super({ className: 'products' });

        gs.subscribe(this);
        this._drawProductList = this._drawProductList.bind(this, perPage);

        const { filteredProducts, activePage } = gs.getState();

        // const productList = filteredProducts
        //     //
        //     .map(data => new Product(data))
        //     .slice((activePage - 1) * perPage, activePage * perPage);

        const productList = this._drawProductList(filteredProducts, activePage);

        this.append(productList);
    }

    _drawProductList(perPage, products, activePage) {
        return (
            products
                //
                .map(data => new Product(data))
                .slice((activePage - 1) * perPage, activePage * perPage)
        );
    }

    _render(prevState, nextState) {
        const areEqualCategories =
            prevState.activeCategory === nextState.activeCategory;
        const areEqualPages = prevState.activePage === nextState.activePage;

        if (areEqualCategories && areEqualPages) return;

        const { filteredProducts, activePage } = nextState;

        const productList = this._drawProductList(filteredProducts, activePage);

        this.truncate().append(productList);
    }
}
