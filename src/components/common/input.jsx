import React, { Component } from 'react';
const Input = ({ name, label,  error, ...rest}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      {/* <input autoFocus ref={this.username} id="username" type="text" className="form-control" /> */}
      {/* {...rest} it means all other props  but every prop must be like this prop={prop} */}
      <input
       {...rest}
        name={name}
        id={name}
        className="form-control"
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
