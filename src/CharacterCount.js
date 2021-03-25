import React from 'react';
import { useRecoilValue } from 'recoil';
import charCountState from './charCountState';

function CharacterCount() {
    const count = useRecoilValue(charCountState);

    return <div>Character Count: {count}</div>
}

export default CharacterCount;