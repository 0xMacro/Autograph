import React, { useEffect, useState } from 'react';
import { useEthers } from '@usedapp/core';
import { ItemContainer, Item, ListContainer, ListItem, Link, Flex, Label } from ".";
import { AddressBookFactory, AddressBook, AddressBook__factory, } from '../types';



interface AddressBookListProps {
    IAddressBookFactory: AddressBookFactory;
    library: any;
    chainId: number | undefined;
};

interface IAddressBooksToggle {
  [key: number]: boolean;
}

type getEntriesOutput = [string, number, string, string[]] & {
  name: string;
  tipology: number;
  entryAddress: string;
  labels: string[];
};

interface IAddressBooksEntries {
  [key: number]: getEntriesOutput[];
}


const AddressBookList = ({IAddressBookFactory, library, chainId}: AddressBookListProps) => {
    const [addressBooks, setAddressBooks] = useState<string[]>([]);
    const [addressBooksToggle, setAddressBooksToggle] = useState<IAddressBooksToggle>({});
    const [addressBooksEntries, setAddressBooksEntries] = useState<IAddressBooksEntries>({});
    const { account } = useEthers();

    useEffect(() => {
        console.log(`AddressBookList.tsx: useEffect: account: ${account}`);

        if (!account) return;
        IAddressBookFactory.getAddressBooksByOwner(account).then(setAddressBooks);

    }, [account, IAddressBookFactory]);

    function toggleAddressBook () {
      
    }

    async function handleItemClick (addressBook: string, i: number) {
      let copy:IAddressBooksToggle = {...toggleAddressBook}
      await getEntries(addressBook, i)
      copy[i] = !copy[i]
      setAddressBooksToggle(copy)
      console.log(addressBooksToggle)
    }
    
    async function getEntries (addressBook: string, i: number) {
      const IAddressBook = AddressBook__factory.connect(addressBook, library!);
      console.log('meow: ',IAddressBook)
      const entries:getEntriesOutput[] = await IAddressBook.getEntries()
      let copy:IAddressBooksEntries = {...addressBooksEntries}
      copy[i] = entries
      setAddressBooksEntries(copy)
    }


    return (
        <>{
        addressBooks.map((addressBook, i) => (
          <ItemContainer key={addressBook}>
            <Item onClick={() => {handleItemClick(addressBook, i)}}>{addressBook}</Item>
            {
              addressBooksToggle[i] ?
              <ListContainer>
              {addressBooksEntries[i].map((list) => (
                <ListItem key={'entry' + i}>
                  <div>{list[0]}</div>
                  {/* <div>{list.tipology == 0 ? 'EOA' : 'Contract'}</div> */}
                  <Link href={`https://goerli.etherscan.io/address/${list[1]}`}>{list[1].toString().slice(0,5) + '...' + list[1].toString().slice(-3)}</Link>
                  {/* <Flex>{list[2].map((label:string) => (  
                    <Label key={'entry' + `${i ,label}`}>{label}</Label>
                    ))}</Flex> */}
                </ListItem>
              ))}
            </ListContainer>
              :
              <></>
            }
          </ItemContainer>
        ))
      }</>
      )
};

export default AddressBookList;