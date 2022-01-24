import { v4 as uuidv4 } from "uuid";

const emptyCV = {
  personalInfo: {
    firstName: "",
    lastName: "",
    title: "",
    address: "",
    mobile: "",
    email: "",
  },

  experience: [
    {
      id: uuidv4(),
      position: '',
      company: '',
      city: '',
      from: '',
      to: '',
    }
  ],

  education: [
    {
      id: uuidv4(),
      universityName: '',
      country: '',
      degree: '',
      subject: '',
      from: '',
      to: '',
    }
  ],
};

export default emptyCV;
