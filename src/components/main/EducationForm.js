import React from "react";
import styled from "styled-components";

// const EducationInputForm = styled.form.attrs({
//   onSubmit:props => props.onSubmit
// })`
//   display: flex;
//   /* flex-direction: column; */
//   justify-content: center;
//   align-items: center;
//   margin: 20px 0;
// `;

export default function EducationForm({
  education,
  handleChangeEducation,
  OnSubmit,
}) {
  return (
    <form onSubmit={OnSubmit}>
      <h3>Education Information</h3>
      <input
        onChange={handleChangeEducation}
        value={education.uni_name}
        type="text"
        name="uni_name"
        placeholder="Name of University"
      />
      <input
        onChange={handleChangeEducation}
        value={education.country}
        type="text"
        name="country"
        placeholder="Country"
      />
      <input
        onChange={handleChangeEducation}
        value={education.degree}
        type="text"
        name="degree"
        placeholder="Degree"
      />
      <input
        onChange={handleChangeEducation}
        value={education.start_year}
        type="text"
        name="start_year"
        placeholder="Start year"
      />
      <input
        onChange={handleChangeEducation}
        value={education.end_year}
        type="text"
        name="end_year"
        placeholder="End year"
      />
      <button type="submit">Add</button>
    </form>
  );
}
