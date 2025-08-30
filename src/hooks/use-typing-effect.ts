
'use client';

import { useState, useEffect } from 'react';

export const useTypingEffect = (text: string, duration: number) => {
    const [typedText, setTypedText] = useState('');
  
    useEffect(() => {
        setTypedText('');
        if (text) {
            let i = 0;
            const intervalId = setInterval(() => {
                setTypedText(text.slice(0, i + 1));
                i++;
                if (i >= text.length) {
                    clearInterval(intervalId);
                }
            }, duration);
            return () => clearInterval(intervalId);
        }
    }, [text, duration]);
  
    return typedText;
  };
