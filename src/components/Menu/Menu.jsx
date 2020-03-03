import React from 'react';
import Button from '@material-ui/core/Button';
import Form from '../Form';
import './index.scss';

class Menu extends React.Component {
    state = {
      newArr: [],
    }


    render() {
      const {
        filters, handleApply, filteredCat,
      } = this.props;

      return (
        <div className="menu">
          <Form filteredCat={filteredCat} handleApply={handleApply} filters={filters} />
        </div>
      );
    }
}
export default Menu;
