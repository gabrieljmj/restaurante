import React from 'react';

import {
    Wrapper,
    ProductPicture,
    ProductName,
    ProductPrice,
    ProductQuantity,
    Quantity,
    QuantityOperationButton,
    ProductInfo,
    ProductQuantityWrapper
} from './styles';

import { brCurrency } from '../../services/util';

export default function Product({ product, quantity, setQuantityHandler }) {
    const subQuantityHandler = () => {
        const newQuantity = parseInt(quantity) === 0 ? 0 : parseInt(quantity) - 1;
    
        setQuantityHandler(newQuantity);
      };
    
      const addQuantityHandler = () => {
        const newQuantity = parseInt(quantity) + 1;
    
        setQuantityHandler(newQuantity);
      };

    const onQuantityChangeHandler = (newQuantity) => {
        if (newQuantity >= 0 && newQuantity <= product.quantity_in_stock) {
            setQuantityHandler(newQuantity)
        }
    }

    return (
        <Wrapper key={product.id}>
            <ProductPicture src={`http://localhost:8000/storage/${product.picture}`} />
            <ProductInfo>
                <ProductName>
                    {product.name}
                </ProductName>
                <ProductPrice>
                    {brCurrency(product.price)}
                </ProductPrice>
                <ProductQuantityWrapper>
                    <ProductQuantity>
                        <QuantityOperationButton disabled={quantity === 0} onClick={subQuantityHandler}>-</QuantityOperationButton>
                        <Quantity value={quantity} onChange={(e) => onQuantityChangeHandler(e.target.value)} />
                        <QuantityOperationButton disabled={quantity === product.quantity_in_stock} onClick={addQuantityHandler}>+</QuantityOperationButton>
                    </ProductQuantity>
                </ProductQuantityWrapper>
            </ProductInfo>
        </Wrapper>
    );
}
