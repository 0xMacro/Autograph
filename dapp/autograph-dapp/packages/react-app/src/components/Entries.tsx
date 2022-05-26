import React from 'react';
import {ListContainer, ListItem, Link, Flex, FlexAlignCenter, Label, Indent } from ".";
import { IAddressBook } from '../types/AddressBook';

interface EntriesProps {
    addressBooksEntries: IAddressBook.EntryStruct[];
}

const flexGrowStyle = {flexGrow: 1, flexBasis: 0}

function Entries ({addressBooksEntries}: EntriesProps) {

    return (
        <ListContainer>
            {addressBooksEntries.length === 0 && "No Entries"}
            {addressBooksEntries.map(({name, tipology, entryAddress, labels}) => (
                <ListItem key={'entry' + entryAddress}>
                    <FlexAlignCenter style={flexGrowStyle}>
                        <Indent />
                        <div style={flexGrowStyle}>
                            {tipology === 0 ? '😁' : '📄'}
                            {name}
                        </div>
                    </FlexAlignCenter>
                    <Link href={`https://goerli.etherscan.io/address/${entryAddress}`}>{entryAddress.toString().slice(0,6) + '...' + entryAddress.toString().slice(-4)}</Link>
                    <Flex style={{...flexGrowStyle, justifyContent: 'right'}}>{labels.map((label:string, i:number) => (  
                        <Label key={'entry' + entryAddress + i.toString()}>{label}</Label>
                    ))}</Flex>
                </ListItem>
            ))}
        </ListContainer>
    )
}

export default Entries