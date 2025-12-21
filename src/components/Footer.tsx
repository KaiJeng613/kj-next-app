import React from 'react';

const Footer = () => {
    const siteName = 'Kai Jeng';

    return (
        <footer className='myfooter w-full border-t-2 border-solid border-dark font-medium text-lg'>
            <div className='py-8 text-xs flex items-center justify-between'>
                <span>{new Date().getFullYear()} &copy; {siteName}</span>
                <span>Best viewed in Chrome, Safari, Firefox and Edge.</span>
            </div>
        </footer>
    )
    
}
export default Footer