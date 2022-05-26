import React, { useState } from 'react';
import { Label, Input, Selector, Button, FlexAlignCenter } from ".";
import { IAddressBook } from '../types/AddressBook';
import LabelList from './LabelList';

interface AddressBookFormEntryProps {
    onSubmit: (entry: IAddressBook.EntryStruct) => void;
};

const AddressBookFormEntry = ({onSubmit}: AddressBookFormEntryProps) => {
    const [name, setName] = useState<string>('');
    const [entryAddress, setEntryAddress] = useState<string>('');
    const [tipology, setTipology] = useState<number>(0);
    const [labels, setLabels] = useState<string[]>([]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const entry: IAddressBook.EntryStruct = {
            name,
            entryAddress,
            tipology,
            labels
        }
        onSubmit(entry);
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <Label>Add new address book:</Label>
            <FlexAlignCenter>
                <Label>Name:</Label>
                <Input type="text" value={name} onChange={e => setName(e.target.value)}></Input>
            </FlexAlignCenter>
            <FlexAlignCenter>
                <Label>Address:</Label>
                <Input type="text" value={entryAddress} onChange={e => setEntryAddress(e.target.value)}></Input>
            </FlexAlignCenter>
            <FlexAlignCenter>
                <Label>Tipology:</Label>
                <Selector onClick={_ => setTipology(0)} isSelected={tipology=== 0}>😁</Selector>
                <Selector onClick={_ => setTipology(1)} isSelected={tipology=== 1}>📄</Selector>
            </FlexAlignCenter>
                <Label>Labels</Label>
                <LabelList list={labels} editable={true} onChange={setLabels}></LabelList>
            <FlexAlignCenter>

            </FlexAlignCenter>
            <FlexAlignCenter>
                <Button type="submit">Add</Button>
            </FlexAlignCenter>
        </form>
    )
};

export default AddressBookFormEntry;