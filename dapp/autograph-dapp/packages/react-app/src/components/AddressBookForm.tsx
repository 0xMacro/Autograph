import React from 'react';
import { useEthers } from '@usedapp/core';
import { Label, Button, FlexAlignCenter } from ".";
import { AddressBookFactory } from '../types';


interface AddressBookFormProps {
    IAddressBookFactory: AddressBookFactory;

};

interface FormElements extends HTMLFormControlsCollection {
    nameInput: HTMLInputElement
}

interface AddressBookCreateForm extends HTMLFormElement {
    readonly elements: FormElements
}

const AddressBookForm = ({IAddressBookFactory}: AddressBookFormProps) => {
    const { account, library } = useEthers();

    const handleSubmit = async (e: React.FormEvent<AddressBookCreateForm>) => {
        console.log('test');
        e.preventDefault();
        const result = await IAddressBookFactory.connect(library!.getSigner(account!)).createAddressBook();
        console.log(`AddressBookForm.tsx: handleSubmit: result: ${result}`);
    }
    
    return (
        <FlexAlignCenter>
            <Label>Address Books</Label>
            <form onSubmit={handleSubmit}>
                <Button type="submit">Create new one</Button>
            </form>
        </FlexAlignCenter>
    )
};

export default AddressBookForm;