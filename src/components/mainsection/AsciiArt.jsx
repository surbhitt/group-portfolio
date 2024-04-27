import React, { useEffect, useState } from 'react'
import stringify from 'json-stringify-safe';
import figlet from 'figlet';
import standard from 'figlet/importable-fonts/Standard.js';

figlet.parseFont('Standard', standard);

export default function AsciiArt({text, font='Standard', ...props}) {

    const [ascii, setAscii] = useState('');

    useEffect(()=>{
        figlet.text(text,{font},(err, data)=>{
            if (err)return console.log(err);
            setAscii(data);
        })
    },[text,font,stringify(props)]);

    return (
        <pre className='text-white p-4' {...props}>{ascii}</pre>
    )
}
