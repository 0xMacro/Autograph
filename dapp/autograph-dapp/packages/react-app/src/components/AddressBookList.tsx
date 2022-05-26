import { useEffect, useState } from 'react';
import Entries from './Entries';
import { useEthers } from '@usedapp/core';
import { ItemContainer, Item } from ".";
import { AddressBookFactory, AddressBook__factory, } from '../types';



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
        if (!account) return;
        IAddressBookFactory.getAddressBooksByOwner(account).then(setAddressBooks);

    }, [account, IAddressBookFactory]);

    function toggleAddressBook () {
      
    }

    async function handleItemClick (addressBook: string, i: number) {
      let copy:IAddressBooksToggle = {...addressBooksToggle}
      await getEntries(addressBook, i)
      copy[i] === undefined ? copy[i] = true : copy[i] = !copy[i]
      setAddressBooksToggle(copy)
    }
    
    async function getEntries (addressBook: string, i: number) {
      const IAddressBook = AddressBook__factory.connect(addressBook, library!);
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
              <Entries addressBooksEntries={addressBooksEntries} i={i} />
              :
              <></>
            }
          </ItemContainer>
        ))
      }</>
      )
};

export default AddressBookList;