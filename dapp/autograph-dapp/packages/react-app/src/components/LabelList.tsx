import React, { useEffect, useState } from 'react';
import { useEthers } from '@usedapp/core';
import { Label, Button, FlexAlignCenter, ListContainer, ListItem, Input } from ".";
import { AddressBookFactory } from '../types';


interface LabelListProps {
    list: string[];
    editable: boolean;
    onChange: (list: string[]) => void;
};

const LabelList = ({list: propList, editable, onChange}: LabelListProps) => {    
    const [list, setList] = useState<string[]>(propList);

    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            setList([...list, e.currentTarget.value]);
            e.currentTarget.value = '';
        }
    }

    useEffect(() => {
        onChange(list);
    }, [onChange, list]);

    return (
        <FlexAlignCenter>
            <ListContainer>
                {list.map((label, index) => (
                    <ListItem key={'label' + index}>
                        <Label>{label}</Label>
                        {editable && (
                            <Button borderless small onClick={() => setList(list.filter((_, i) => i !== index))}>❌</Button>
                        )}
                    </ListItem>
                ))}
                {editable && (
                    <Input onKeyDown={onKeyDown}></Input>
                )}
            </ListContainer>
        </FlexAlignCenter>
    )
};

export default LabelList;