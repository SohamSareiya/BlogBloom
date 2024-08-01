import React from 'react';

const Logo = ({ width = '100px', backgroundcolor = "text-zinc-900", children }) => {
    return (
        <div className={`text-2xl scale-125 flex justify-center   items-center p-2 font-bold  ${backgroundcolor}`}>
            {children}
        </div>
    );
}

export default Logo;
