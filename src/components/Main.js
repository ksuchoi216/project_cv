import styled from "styled-components";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import emptyCV from "./utils/emptyCV";

// [Experience section]------------------------------------------------------------------------------- //
// --------------------------------------------------------------------------------------------------- //

const Main = () => {
  const [cv, setCV] = useState(emptyCV);
  console.log(cv);

  // [PersonalInfo Methods]---------------------------------------------------------------------------- //
  const handleChangePersonalInfo = (e) => {
    const { name, value } = e.target;

    setCV((prevState) => ({
      ...prevState,
      personalInfo: {
        ...prevState.personalInfo,
        [name]: value,
      },
    }));
  };

  // [Experience Methods]---------------------------------------------------------------------------- //
  const handleChangeExperience = (e, id) => {
    const { name, value } = e.target;

    setCV((prevState) => {
      const newExperience = prevState.experience.map((experienceElement) => {
        if (experienceElement.id === id) {
          return { ...experienceElement, [name]: value };
        } else {
          return experienceElement;
        }
      });

      return {
        ...prevState,
        experience: [...newExperience],
      };
    });
  };

  const handleAddExperience = () => {
    setCV((prevState) => ({
      ...prevState,
      experience: [
        ...prevState.experience,
        {
          id: uuidv4(),
          position: "",
          company: "",
          city: "",
          from: "",
          to: "",
        },
      ],
    }));
  };

  const handleDeleteExperience = (e, id) => {
    setCV((prevState) => {
      const remainExperience = prevState.experience.filter(
        (experienceElement) => experienceElement.id !== id
      );
      return {
        ...prevState,
        experience: [...remainExperience],
      };
    });
  };
  // [Education Methods]---------------------------------------------------------------------------- //
  const handleChangeEducation = (e, id) => {
    const { name, value } = e.target;

    setCV((prevState) => {
      const newEducation = prevState.education.map((educationElement) => {
        if (educationElement.id === id) {
          return { ...educationElement, [name]: value };
        } else {
          return educationElement;
        }
      });

      return {
        ...prevState,
        education: [...newEducation],
      };
    });
  };

  const handleAddEducation = () => {
    setCV((prevState) => ({
      ...prevState,
      education: [
        ...prevState.education,
        {
          id: uuidv4(),
          position: "",
          company: "",
          city: "",
          from: "",
          to: "",
        },
      ],
    }));
  };

  const handleDeleteEducation = (e, id) => {
    setCV((prevState) => {
      const remainEducation = prevState.education.filter(
        (educationElement) => educationElement.id !== id
      );
      return {
        ...prevState,
        education: [...remainEducation],
      };
    });
  };


  // --------------------------------------------------------------------------------------------------- //
  return (
    <MainContainer>
      <MainWapper>
        <PersonalInfoSection
          personal={cv.personalInfo}
          onChange={handleChangePersonalInfo}
        />
        <ExperienceSection
          experience={cv.experience}
          onChange={handleChangeExperience}
          addExperience={handleAddExperience}
          deleteExperience={handleDeleteExperience}
        />
        <EducationSection
          education={cv.education}
          onChange={handleChangeEducation}
          addEducation={handleAddEducation}
          deleteEducation={handleDeleteEducation}
        />
      </MainWapper>
    </MainContainer>
  );
};

export default Main;

const MainContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryDark};
`;

const MainWapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  color: white;
`;

// [Personal info section]---------------------------------------------------------------------------- //
const PersonalInfoSection = ({ personal, onChange }) => {
  return (
    <PersonalInfoWapper>
      <h3>Personal Information</h3>
      <input
        value={personal.firstName}
        onChange={onChange}
        type="text"
        name="firstName"
        placeholder="firstName"
      />
      <input
        value={personal.lastName}
        onChange={onChange}
        type="text"
        name="lastName"
        placeholder="lastName"
      />
      <input
        value={personal.address}
        onChange={onChange}
        type="text"
        name="address"
        placeholder="address"
      />
      <input
        value={personal.mobile}
        onChange={onChange}
        type="text"
        name="mobile"
        placeholder="mobile"
      />
      <input
        value={personal.email}
        onChange={onChange}
        type="text"
        name="email"
        placeholder="email"
      />
    </PersonalInfoWapper>
  );
};

const PersonalInfoWapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 4px;
`;
// --------------------------------------------------------------------------------------------------- //

// [Experience section]------------------------------------------------------------------------------- //
const ExperienceSection = ({ experience, onChange, addExperience, deleteExperience }) => {
  const experienceElements = experience.map((experienceElement) => {
    return (
      <ExperienceWapper>
        <input
          value={experienceElement.position}
          onChange={(e) => onChange(e, experienceElement.id)}
          type="text"
          name="position"
          placeholder="position"
        />
        <input
          value={experienceElement.company}
          onChange={(e) => onChange(e, experienceElement.id)}
          type="text"
          name="company"
          placeholder="company"
        />
        <input
          value={experienceElement.city}
          onChange={(e) => onChange(e, experienceElement.id)}
          type="text"
          name="city"
          placeholder="city"
        />
        <input
          value={experienceElement.from}
          onChange={(e) => onChange(e, experienceElement.id)}
          type="text"
          name="from"
          placeholder="from"
        />
        <input
          value={experienceElement.to}
          onChange={(e) => onChange(e, experienceElement.id)}
          type="text"
          name="to"
          placeholder="to"
        />
        <button onClick={(e) => deleteExperience(e, experienceElement.id)}>Delete</button>
      </ExperienceWapper>
    );
  });

  return (
    <ExperienceContainer>
      <h3>Experience</h3>
      {experienceElements}
      <button onClick={addExperience}>Add</button>
    </ExperienceContainer>
  );
};

const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 4px;
`;

const ExperienceWapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 4px;
`;

// --------------------------------------------------------------------------------------------------- //
// [Education section]------------------------------------------------------------------------------- //
const EducationSection = ({ education, onChange, addEducation, deleteEducation }) => {
  const educationElements = education.map((educationElement) => {
    return (
      <EducationWapper>
        <input
          value={educationElement.universityName}
          onChange={(e) => onChange(e, educationElement.id)}
          type="text"
          name="universityName"
          placeholder="universityName"
        />
        <input
          value={educationElement.country}
          onChange={(e) => onChange(e, educationElement.id)}
          type="text"
          name="country"
          placeholder="country"
        />
        <input
          value={educationElement.degree}
          onChange={(e) => onChange(e, educationElement.id)}
          type="text"
          name="degree"
          placeholder="degree(e.g. MSc/master)"
        />
        <input
          value={educationElement.subject}
          onChange={(e) => onChange(e, educationElement.id)}
          type="text"
          name="subject"
          placeholder="subject"
        />
        <input
          value={educationElement.from}
          onChange={(e) => onChange(e, educationElement.id)}
          type="text"
          name="from"
          placeholder="from"
        />
        <input
          value={educationElement.to}
          onChange={(e) => onChange(e, educationElement.id)}
          type="text"
          name="to"
          placeholder="to"
        />
        <button onClick={(e) => deleteEducation(e, educationElement.id)}>Delete</button>
      </EducationWapper>
    );
  });

  return (
    <EducationContainer>
      <h3>Education</h3>
      {educationElements}
      <button onClick={addEducation}>Add</button>
    </EducationContainer>
  );
};

const EducationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 4px;
`;

const EducationWapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 4px;
`;
// --------------------------------------------------------------------------------------------------- //
