import React, { useState } from 'react';
import { useEthers } from '@usedapp/core';
import { Label, Input } from ".";
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
    const [name, setName] = useState<string>('');
    const { account, library } = useEthers();

    const handleSubmit = async (e: React.FormEvent<AddressBookCreateForm>) => {
        console.log('test');
        e.preventDefault();
        const result = await IAddressBookFactory.connect(library!.getSigner(account!)).createAddressBook();
        console.log(`AddressBookForm.tsx: handleSubmit: result: ${result}`);
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <Label>Add new address book:</Label>
            <Input type="text" value={name} onChange={e => setName(e.target.value)}></Input>
            <button type="submit">Add</button>
        </form>
    )
};

export default AddressBookForm;