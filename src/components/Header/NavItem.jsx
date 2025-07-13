import propTypes from 'prop-types';



function NavItem ({ children, href, className = '', ...props }) {
  return (
    <li className={`nav-item pr-2 pb-1 justify-center items-center text-end md:text-center ${className}`} {...props}>
      <a href={href} className="text-text md:text-jungle-green-100 hover:text-amber-200 font-bold font-playfair transition-colors ease-in duration-300">
        {children} </a>
    </li>
    );
}

NavItem.propTypes = {
  children: propTypes.node.isRequired,
  href: propTypes.string.isRequired,
  className: propTypes.string,
};

export default NavItem;

