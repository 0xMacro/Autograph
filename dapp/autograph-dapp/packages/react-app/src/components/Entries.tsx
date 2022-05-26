import React from 'react';
import {ListContainer, ListItem, Link, Flex, FlexAlignCenter, Label, Indent } from ".";

type getEntriesOutput = [string, number, string, string[]] & {
    name: string;
    tipology: number;
    entryAddress: string;
    labels: string[];
};

interface EntriesProps {
    addressBooksEntries: getEntriesOutput[];
}

const flexGrowStyle = {flexGrow: 1, flexBasis: 0}

function Entries ({addressBooksEntries}: EntriesProps) {

    return (
        <ListContainer>
            {addressBooksEntries.length === 0 && "No Entries"}
            {addressBooksEntries.map((list) => (
                <ListItem key={'entry' + list[0]}>
                    <FlexAlignCenter style={flexGrowStyle}>
                        <Indent />
                        <div style={flexGrowStyle}>{list[0]}</div>
                    </FlexAlignCenter>
                    {/* <div>{list.tipology == 0 ? 'EOA' : 'Contract'}</div> */}
                    <Link href={`https://goerli.etherscan.io/address/${list[2]}`}>{list[2].toString().slice(0,6) + '...' + list[2].toString().slice(-4)}</Link>
                    <Flex style={{...flexGrowStyle, justifyContent: 'right'}}>{list[3].map((label:string, i:number) => (  
                        <Label key={'entry' + list[0] + i.toString()}>{label}</Label>
                    ))}</Flex>
                </ListItem>
            ))}
        </ListContainer>
    )
}

export default Entries