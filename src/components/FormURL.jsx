import React from "react";

const FormURL = (props) => {
  const { formInput, handleChange, handleSubmit } = props;

  return (
    <form className="formInput" onSubmit={handleSubmit}>
      <label htmlFor="taskInput"></label>
      <input required type="text" value={formInput} onChange={handleChange} />
      <button className="btn-add" type="submit" alt="Add task">
        Make QR code<i className="fa-solid fa-plus fa-3x"></i>
      </button>
    </form>
  );
};

export default FormURL;
