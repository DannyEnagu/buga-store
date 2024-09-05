'use client';  

import { clx } from '@medusajs/ui';
import React, { useEffect, useState } from 'react';  

const ScrollHeader = ({children}: {
    children: React.ReactNode;
}) => {  
    const [isScrolled, setIsScrolled] = useState(false);  

    const handleScroll = () => {  
        if (window.scrollY > 65) {
            setIsScrolled(true);  
        } else {  
            setIsScrolled(false);  
        }  
    };  

    useEffect(() => {  
        window.addEventListener('scroll', handleScroll);  
        return () => {  
            window.removeEventListener('scroll', handleScroll);  
        };  
    }, []);  

    return (  
        <header className={clx("fixed top-0 left-0 right-0 h-16 transition-transform duration-300 ease-in-out border-ui-border-base mx-auto border-b z-50",
        isScrolled ? 'visible bg-neutral-100/50 backdrop-blur-md translate-y-0' : 'invisible bg-white -translate-y-full',
        )}
        >  
            {children}
        </header>  
    );  
};  

export default ScrollHeader;