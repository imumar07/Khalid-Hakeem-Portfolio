
import FooterNav from './FooterNav';
import FollowMe from './FollowMe';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-main'>
                <FooterNav />
                <FollowMe />
            </div>
            <div className='footer-bottom'>
                <p>© 2021 Dr. Khalid Hakeem Foundation. All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer;