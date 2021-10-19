import React from 'react';

import { TouchableOpacity } from 'react-native';

import {
  Card,
  ProductImage,
  MainInfo,
  Header,
  Title,
  Icon,
  Footer,
  Amount,
  PaymentCondition
} from './styles';

interface Props {
  title: string;
  amount: string;
  paymentCondition: string;
}

export function ProductCard({ title, amount, paymentCondition }: Props) {
  return (
    <Card>
      {/* <ProductImage
        source={{ uri: 'https://avatars.githubusercontent.com/u/55644267?v=4' }}
      /> */}

      <MainInfo>
        <Header>
          <Title>{title}</Title>
          <TouchableOpacity>
            <Icon name="close" />
          </TouchableOpacity>
        </Header>

        <Footer>
          <Amount>{amount}</Amount>
          <PaymentCondition>{paymentCondition}</PaymentCondition>
        </Footer>
      </MainInfo>
    </Card>
  );
}