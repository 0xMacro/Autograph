import { useEffect, useState } from 'react';
import Entries from './Entries';
import { ItemContainer, Item, Button } from ".";
import Popup from 'reactjs-popup';
import { AddressBookFactory, AddressBook__factory } from '../types';
import { Signer } from 'ethers';
import AddressBookEntryForm from './AddressBookEntryForm';
import { IAddressBook } from '../types/AddressBook';


interface AddressBookListProps {
  IAddressBookFactory: AddressBookFactory;
  account: string;
  signer: Signer;
};

interface IAddressBooksToggle {
  [key: number]: boolean;
}

interface IAddressBooksEntries {
  [key: number]: IAddressBook.EntryStructOutput[];
}

const AddressBookList = ({IAddressBookFactory, account, signer}: AddressBookListProps) => {
    const [addressBooks, setAddressBooks] = useState<string[]>([]);
    const [addressBooksToggle, setAddressBooksToggle] = useState<IAddressBooksToggle>({});
    const [addressBooksEntries, setAddressBooksEntries] = useState<IAddressBooksEntries>({});

    useEffect(() => {
        if (!account) return;
        IAddressBookFactory.getAddressBooksByOwner(account).then(setAddressBooks);

    }, [account, IAddressBookFactory]);

    const handleItemClick = async (addressBook: string, i: number) => {
      let copy:IAddressBooksToggle = {...addressBooksToggle}
      await getEntries(addressBook, i)
      copy[i] = copy[i] === undefined ? true : !copy[i];
      setAddressBooksToggle(copy)
    }

    const onFormSubmitted = async (addressBook: string, i: number, entry: IAddressBook.EntryStruct, close: () => void) => {
      const contract = AddressBook__factory.connect(addressBook, signer);
      contract.addEntry(entry.name, entry.tipology, entry.entryAddress, entry.labels).then(() => {
        pushEntry(i, entry);
        close();
      });
    }
    
    const getEntries = async (addressBook: string, i: number) => {
      const contract = AddressBook__factory.connect(addressBook, signer);
      const entries = await contract.getEntries();
      updateEntries(i, entries);
    }

    const pushEntry = (i: number, entry: IAddressBook.EntryStruct) => {
      let copy:IAddressBooksEntries = {...addressBooksEntries};
      copy[i].push(entry as IAddressBook.EntryStructOutput);
      setAddressBooksEntries(copy);
    }

    const updateEntries = (i: number, entries: IAddressBook.EntryStructOutput[]) => {
      let copy:IAddressBooksEntries = {...addressBooksEntries};
      copy[i] = entries;
      setAddressBooksEntries(copy);
    }


    return (
        <>{
        addressBooks.map((addressBook, i) => (
          <ItemContainer key={addressBook}>
            <Item>
              {addressBook}
              <Button onClick={() => {handleItemClick(addressBook, i)}}>{addressBooksToggle[i] ? 'Hide' : 'Show'}</Button>
              <Popup
                trigger={<Button>➕</Button>}
                modal
                closeOnDocumentClick
              >
                {(close: () => void) => (
                    <AddressBookEntryForm onSubmit={(entry) => {
                      onFormSubmitted(addressBook, i, entry, close);
                    }}></AddressBookEntryForm>
                )}
              </Popup>
            </Item>
            {
              addressBooksToggle[i] && <Entries addressBooksEntries={addressBooksEntries[i]} />
            }
          </ItemContainer>
        ))
      }</>
      )
};

export default AddressBookList;