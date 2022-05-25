import React, { useEffect, useState } from 'react';
import { useEthers } from '@usedapp/core';
import { ItemContainer, Item } from ".";
import { AddressBookFactory } from '../types';


interface AddressBookListProps {
    IAddressBookFactory: AddressBookFactory;
};


const AddressBookList = ({IAddressBookFactory}: AddressBookListProps) => {
    const [addressBooks, setAddressBooks] = useState<string[]>([]);
    const { account } = useEthers();

    useEffect(() => {
        console.log(`AddressBookList.tsx: useEffect: account: ${account}`);

        if (!account) return;

        IAddressBookFactory.getAddressBooksByOwner(account).then(setAddressBooks);
    }, [account, IAddressBookFactory]);

    return (
        <>{
        addressBooks.map((addressBook, i) => (
          <ItemContainer key={addressBook}>
            <Item>{addressBook}</Item>
          </ItemContainer>
        ))
      }</>
      )
};

export default AddressBookList;