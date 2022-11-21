import React from 'react';
import PropTypes from 'prop-types';
import { MdMic, MdSettings } from 'react-icons/md';
// import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
  const { title, left } = props;
  
  return (
    <div className="d-flex justify-content-between align-items-center navbar">
      <p>{left}</p>
      <p>{title}</p>
      <div className="fs-4">
        <MdMic className="me-3" />
        <MdSettings />
      </div>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  left: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]).isRequired,
};

export default Navbar;