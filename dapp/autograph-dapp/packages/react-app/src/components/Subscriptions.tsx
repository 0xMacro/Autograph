import React, { useEffect, useState } from 'react';

import { useEthers } from '@usedapp/core';
import { Item, ItemContainer } from ".";
import { Subscriptions as SubscriptionsContract } from '../types';


interface SubscriptionsProps {
    ISubscriptions: SubscriptionsContract;
};

const Subscriptions = ({ISubscriptions}: SubscriptionsProps) => {
    const [subscriptions, setSubscriptions] = useState<string[]>([]);
    const { account } = useEthers();

    useEffect(() => {
      console.log(`Subscriptions.tsx: useEffect: account: ${account}`);
      if (!account) return;

      ISubscriptions.getSubscriptions(account).then(setSubscriptions);
    }, [account, ISubscriptions]);
  
    return (
      <>{
      subscriptions.map((subscription, i) => (
        <ItemContainer key={subscription}>
          <Item>{subscription}</Item>
        </ItemContainer>
      ))
    }</>
    )
  };

export default Subscriptions;