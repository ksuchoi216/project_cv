import React from "react";
import styled from "styled-components";


export default function PersonalForm({}) {
  return (
    <PersonalInputForm>
      <h3>Personal Information</h3>
      <input
        name="firstName"
        type="text"
        placeholder="First name"
      />
      <input
        name="lastName"
        type="text"
        placeholder="Last name"
      />
      <input
        name="title"
        type="text"
        placeholder="Title"
      />
      <input
        name="address"
        type="text"
        placeholder="Address"
      />
      <input
        name="mobile"
        type="text"
        placeholder="Mobile"
      />
      <input
        name="email"
        type="text"
        placeholder="Email"
      />
    </PersonalInputForm>
  );
}

const PersonalInputForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
`;