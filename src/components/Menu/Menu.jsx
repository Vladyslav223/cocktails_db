/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import Form from '../Form';
import './index.scss';

const Menu = (props) => {
  const {
    filters, handleApply, filteredCat,
  } = props;

  return (
    <div className="menu">
      <Form filteredCat={filteredCat} handleApply={handleApply} filters={filters} />
    </div>
  );
};
export default Menu;

Menu.propTypes = {
  filters: PropTypes.any.isRequired,
  handleApply: PropTypes.func.isRequired,
  filteredCat: PropTypes.any.isRequired,
};
