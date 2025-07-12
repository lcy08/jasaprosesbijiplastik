import propTypes from 'prop-types';



function NavItem ({ children, href, className = '', ...props }) {
  return (
    <li className={`nav-item pr-2 pb-1 border-background border-b-1 justify-center items-center text-end md:text-center ${className}`} {...props}>
      <a href={href} className="text-text hover:text-blue-100 font-bold font-playfair">
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

