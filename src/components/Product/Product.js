import { Component } from '../../core/Component';
import { Button, Rating } from '../';
import './Product.scss';

export class Product extends Component {
    constructor({
        id,
        category,
        model,
        manufacturer,
        country,
        imageSrc,
        price,
        rating: current,
        description,
        warranty
    }) {
        const rating = new Rating({
            //
            max: 5,
            current,
            className: 'product__rating'
        });
        super({
            //
            className: 'product',
            html: `
                <div class="product__top">
                    <h2 class="product__category">${category}</h2>
                    ${rating.toHtml()}

                </div>

                <div class="product__middle">
                    <div class="product__main">
                        <div class="product__img-wrapper">
                            <img src="${imageSrc}" alt="${model}" title="${model}" class="product__img">
                    </div>

                        <div class="product__details">
                            <h1 class="product__model">${model}</h1>
                            <h3 class="product__manufacturer">${manufacturer}</h3>
                            <h4 class="product__country">${country}</h4>
                            <h5 class="product__warranty">${warranty}</h5>
                        </div>
                    </div>
                    <p class="product__description">${description.slice(
                        0,
                        120
                    )}...</p>
                </div>

                <div class="product__bottom">
                    <div class="product__price">
                        <span class="product__label">Price</span>
                        <span class="product__value">${price}</span>
                        <span class="product__currency">$</span>
                     </div>
                </div>
            `
        });

        this.findNode('.product__price')
            //
            .after(
                new Button({
                    className: 'btn--primary product__btn',
                    html:
                        '<i class="fas fa-shopping-cart product__cart-icon"></i>'
                })
            );
    }
}
