/* eslint-disable no-class-assign */
/* eslint-disable quote-props */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import Button from '@material-ui/core/Button';
import { reduxForm, Field } from 'redux-form';
import PropTypes from 'prop-types';

import './index.scss';

function Form(props) {
  const {
    handleSubmit,
    filters,
    handleApply,
  } = props;

  const submit = (values) => {
    const categoriesWithPhotos = [];
    Object.keys(values).forEach((key) => {
      if (values[key]) {
        const filter = filters.find((newFilter) => newFilter.strCategory === key);
        categoriesWithPhotos.push({ strCategory: key, items: filter.items });
      }
    });

    handleApply(categoriesWithPhotos);
  };

  let num = 0;
  return (
    <form className="form" onSubmit={handleSubmit(submit)}>
      {filters.length && filters.map((filter) => {
        num += 1;
        const title = filter.strCategory;
        return (
          <React.Fragment key={title}>
            <Field
              className="input"
              id={`input${num}`}
              name={title}
              type="checkbox"
              component="input"
            />
            <label className="input" htmlFor={`input${num}`}>{title}</label>
            <br />
          </React.Fragment>
        );
      })}
      <Button
        type="submit"
        color="primary"
        className="submit"
        style={{
          background: '#4E4E4E',
          borderRadius: '10px',
          color: '#fff',
          width: '180px',
        }}
        variant="contained"
      >
        Apply
      </Button>
    </form>
  );
}

export default Form = reduxForm({
  form: 'group',
  initialValues: {
    'Ordinary Drink': true,
    'Milk / Float / Shake': true,
    'Cocktail': true,
    'Other/Unknown': true,
    'Cocoa': true,
    'Shot': true,
    'Coffee / Tea': true,
    'Homemade Liqueur': true,
    'Punch / Party Drink': true,
    'Beer': true,
    'Soft Drink / Soda': true,
  },
})(Form);

Form.propTypes = {
  handleSubmit: PropTypes.any,
  handleApply: PropTypes.func.isRequired,
  filters: PropTypes.any.isRequired,
};
