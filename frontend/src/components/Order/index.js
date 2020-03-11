import React, { useState } from 'react';

import api from '../../services/api';

import {
  Wrapper,
  OrderClientName,
  OrderItems,
  OrderInfo,
  OrderActions,
  OrderMarkAsReadyButton,
  OrderItemsQuantity,
  OrderItemsList,
  OrderItemsProduct,
  OrderObservations,
  ProductImage,
  ProductName,
} from './styles';

export default function Order({ order, afterSetStatus, actionText }) {
  const [settingStatus, setSettingStatus] = useState(false);

  const onSetStatusClick = (productId) => {
    setSettingStatus(productId);

    const body = {
      status: parseInt(order.status) + 1,
      _method: 'PUT',
    };

    api.post(`/orders/${productId}`, body)
      .then(() => {
        setSettingStatus(false);

        afterSetStatus(productId);
      })
      .catch((err) => console.error(err));
  };

  return (
    <Wrapper key={order.id}>
      <OrderInfo>
        <OrderClientName>{order.client_name}</OrderClientName>

        <OrderObservations>{order.observations}</OrderObservations>

        <OrderItems>
          <OrderItemsQuantity>
            {`${order.products.reduce((prev, product) => prev + product.pivot.amount, 0)} item(s)`}
          </OrderItemsQuantity>
          <OrderItemsList>
            {order.products.map((product) => (
              <OrderItemsProduct key={product.id}>
                <ProductImage src={`http://localhost:8000/storage/${product.picture}`} />
                <ProductName>
                  {`${product.name} (${product.pivot.amount})`}
                </ProductName>
              </OrderItemsProduct>
            ))}
          </OrderItemsList>
        </OrderItems>
      </OrderInfo>

      <OrderActions>
        <OrderMarkAsReadyButton
          disabled={settingStatus === order.id}
          onClick={() => onSetStatusClick(order.id)}
        >
          {settingStatus === order.id ? <i className="fas fa-circle-notch fa-spin" /> : actionText }
        </OrderMarkAsReadyButton>
      </OrderActions>
    </Wrapper>
  );
}
