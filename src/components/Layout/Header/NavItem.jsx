import {
  Link
} from 'react-router-dom'
import propTypes from 'prop-types';

function NavItem ({ children, link, className = '', ...props }) {
  return (
    <li {...props} className={`pr-2 pb-1 justify-center items-center text-end md:text-center cursor-pointer ${className}`}
      onClick={(e) => {
        if (e.target.tagName !== 'A') {
          window.location.href = link;
        }
      }}
    >
      <Link className="block w-full h-full md:hover:text-jungle-green-900 font-bold font-playfair transition-colors ease-in duration-300" to={link}>{children}</Link>
    </li>
  );
}

NavItem.propTypes = {
  children: propTypes.node.isRequired,
  href: propTypes.string.isRequired,
  className: propTypes.string,
};

export default NavItem;

