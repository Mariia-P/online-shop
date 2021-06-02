import { App } from './App';
import { GlobalState, render } from './core';
import products from './assets/database/products.json';
import './styles/index.scss';

const ACTIVE_PAGE = 1;
const PER_PAGE = 9;

const categories = [...new Set(products.map(p => p.category))];
const activeCategory = categories[2];

const gs = new GlobalState({
    initialState: {
        activeCategory,
        activePage: ACTIVE_PAGE,
        products,
        filteredProducts: products
            //
            .filter(p => p.category === activeCategory)
    }
});
const props = {
    gs,
    title: 'Online Shop',
    perPage: PER_PAGE,
    categories
};

render(new App(props), document.getElementById('root'));
