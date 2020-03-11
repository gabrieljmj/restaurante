import React, { useState, useEffect } from 'react';
import Product from '../Product';

import api from '../../services/api';

import Checkout from '../Checkout';

import {
  Wrapper,
  List,
  SearchBarWrapper,
  SearchBar,
  Loading,
  EmptyList
} from './styles';

const WAIT_INTERVAL = 1000;

export default function Products() {
  const [products, setProducts] = useState([]);
  const [quantities, setQuantities] = useState([]);
  const [checkout, setCheckout] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState(null);
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    const checkoutProducts = products
      .filter(({ id }) => quantities[id] > 0)
      .map((product) => ({ ...product, checkout_quantity: quantities[product.id] }));

    setCheckout(checkoutProducts);
  }, [quantities, products]);

  useEffect(() => {
    api.get('/products')
      .then(({ data }) => {
        setProducts(data);
        setQuantities(data.reduce((prev, { id }) => ({ ...prev, [`${id}`]: 0 }), {}));

        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const setQuantityHandler = (productId) => {
    return (quantity) => {
      setQuantities({ ...quantities, [`${productId}`]: quantity });
    }
  }

  const onClickRemoveProduct = (productId) => setQuantities({ ...quantities, [`${productId}`]: 0 });

  const afterCheckout = () => {
    let newQuantities = { ...quantities };

    Object.keys(newQuantities).forEach((id) => (newQuantities = { ...newQuantities, [`${id}`]: 0 }));

    setQuantities(newQuantities);
  };

  const triggerSearch = () => {
    setLoading(true);

    api.get(`/products/search?q=${query}`)
      .then(({ data }) => {
        setProducts(data);

        const quantitiesCopy = { ...quantities };

        data.forEach((product) => {
          if (quantitiesCopy[product.id]) {
            quantitiesCopy[product.id] = 0;
          }
        });

        setQuantities(quantitiesCopy);

        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const handleSearchChange = (q) => {
    clearTimeout(timer);

    setQuery(q);

    setTimer(setTimeout(triggerSearch, WAIT_INTERVAL));
  };

  const productsList = products.length ? (
    <List>
      {products.map((product) => (
        <Product
          product={product}
          quantity={quantities[product.id]}
          setQuantityHandler={setQuantityHandler(product.id)}
        />
      ))}
    </List>
  ) : <EmptyList>Nenhum produto encontrado!</EmptyList>;

  return (
    <Wrapper>
      <SearchBarWrapper>
        <SearchBar onChange={(e) => handleSearchChange(e.target.value)} placeholder="Buscar por produtos..." type="search" />
      </SearchBarWrapper>

      {loading ? (<Loading><i className="fas fa-circle-notch" /></Loading>) : productsList }

      <Checkout
        products={checkout}
        afterCheckout={afterCheckout}
        onClickRemoveProduct={onClickRemoveProduct}
      />
    </Wrapper>
  );
}
