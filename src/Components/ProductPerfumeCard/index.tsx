import { ShoppingCart } from "phosphor-react";

import {
    ProductCardContainerDiv,
    ProductCardContentDiv,
    ProductCardContentImageDiv,
    ProductCardContentTextDiv,
    ProductCardContentPriceDiv,
    ProductCardContentButtonDiv
} from "./style";

import ProductPerfumeDesktop from '../../Assets/product-perfume-desktop.jpg'
import ProductPerfumeMobile from '../../Assets/product-perfume-mobile.jpg'

export function ProductPerfumeCard() {
    return (
        <>
            <ProductCardContainerDiv>
                <ProductCardContentDiv>
                    <ProductCardContentImageDiv>
                        <img className="productImageDesktop" src={ProductPerfumeDesktop} alt="Perfume" />
                        <img className="productImageMobile" src={ProductPerfumeMobile} alt="Perfume" />
                    </ProductCardContentImageDiv>
                    <ProductCardContentTextDiv>
                        <span>PERFUME</span>
                        <h1>Gabrielle Essence Eau De Parfum</h1>
                        <p>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
                        <ProductCardContentPriceDiv>
                            <h2>$149.99</h2>
                            <span>$169.99</span>
                        </ProductCardContentPriceDiv>
                        <ProductCardContentButtonDiv>
                            <ShoppingCart size={20} />
                            <h4>Add to Cart</h4>
                        </ProductCardContentButtonDiv>
                    </ProductCardContentTextDiv>
                </ProductCardContentDiv>
            </ProductCardContainerDiv>
        </>
    )
}