import { Link } from '@nextui-org/react';
import React from 'react';

const FooterNav = () => {
    const menuItems = [
        { name: "Home", path: "/" },
        { name: "About Me", path: "/about" },
        { name: "Research & Publications", path: "/research" },
        { name: "Hazra Foundation", path: "/hazra" },
    ];

    const linkItems = [
        { name: "Blogs", path: "/blogs" },
        { name: "Contact", path: "/contact" },
        { name: "Appointments", path: "/appointments" },
        { name: "Privacy Policy", path: "/privacy" },
        { name: "Terms & Conditions", path: "/terms" },
    ];

    return (
        <>
            <div className='footer-nav'>
                <h3>Quick Links</h3>
                {menuItems.map((item, index) => (
                    <Link key={index} to={item.path}>
                        {item.name}
                    </Link>
                ))}
            </div>
            <div className='footer-nav'>
                {linkItems.map((item, index) => (
                    <Link key={index} to={item.path}>
                        {item.name}
                    </Link>
                ))}
            </div>
        </>
    );
};

export default FooterNav;
