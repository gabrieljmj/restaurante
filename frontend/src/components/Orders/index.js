import React, { useState, useEffect } from 'react';

import api from '../../services/api';
import Echo from '../../services/echo';
import STRINGS from '../../config/strings';

import Order from '../Order';

import {
  Section,
  List,
  EmptyList,
  Title,
  Wrapper,
  Loading
} from './styles';

const NOTIFICATION_URL = '/notification.mp3';

export default function Orders({ status, event }) {
  const [orders, setOrders] = useState([]);
  const [audio] = useState(new Audio(NOTIFICATION_URL));
  const [playingSound, setPlayingSound] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get(`/orders?status=${STRINGS.orders[status].id}`)
      .then(({ data }) => {
        const newOrders = data.map((order) => ({ ...order, new: false }));
        setOrders(newOrders);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    const channel = Echo.channel('restaurante');
  
    channel.listen(event, async (order) => {
      setPlayingSound(true);
      setOrders(prevOrders => [{ ...order, new: true }, ...prevOrders ]);
    });
  }, []);

  useEffect(() => {
    playingSound ? audio.play() : audio.pause();
  }, [playingSound]);

  useEffect(() => {
    audio.addEventListener('ended', () => setPlayingSound(false));

    return () => {
      audio.removeEventListener('ended', () => setPlayingSound(false));
    };
  }, []);

  const afterSetStatus = (productId) => {
    const newOrders = [...orders];

    newOrders.forEach(({ id }, key) => {
      if (id === productId) {
        newOrders.splice(key, 1);
      }
    });

    setOrders(newOrders);
  };

  const ordersList = orders.length ? (
    <List>
      {orders.map((order) => (
        <Order key={order.id}
          order={order}
          afterSetStatus={afterSetStatus}
          actionText={STRINGS.orders[status].setStatus}
        />
      ))}
    </List>
  ) : (<EmptyList>{STRINGS.orders[status].empty}</EmptyList>);

  return (
    <Wrapper>
      <Section>
        <Title>{STRINGS.orders[status].title}</Title>
        {loading ? (<Loading><i className="fas fa-circle-notch" /></Loading>) : ordersList }
      </Section>
    </Wrapper>
  );
}
