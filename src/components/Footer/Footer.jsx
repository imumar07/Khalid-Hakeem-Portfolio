import FooterNav from "./FooterNav";
import FollowMe from "./FollowMe";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-main">
        <FooterNav />
        <FollowMe />
      </div>
      <div className="footer-bottom text-center flex flex-col ">
        <div>
          <p>
            Build with <span className="text-red-500">♥</span> by Techies
          </p>
        </div>
        <div>
          <p>© 2024 Dr. Khalid Hakeem Foundation. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
