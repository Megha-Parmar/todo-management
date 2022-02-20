

export const usersDataList = [
  {
    id: 1,
    username: "bomo_fok",
    firstName: "bomofok",
    lastName: "bomofok",
    uniqueId: "U001",
    phoneNumber: "5343333333",
    email: "bomofok933@gmail.com",
    dob:"Wed Jun 12 1996 00:00:00 GMT+0530 (India Standard Time)",
    dateOfBirth:"",
    role: { id: 1, name: "SUB_USER",value:"Sub User" },
    status: "ACTIVE",
  },
  {
    id: 2,
    username: "PatelD",
    firstName: "Dip",
    lastName: "Patel",
    uniqueId: "U002",
    phoneNumber: "5343333333",
    email: "deeppatel@gmail.com",
    dob:"Wed Jun 12 1996 00:00:00 GMT+0530 (India Standard Time)",
    dateOfBirth:"",
    role: { id: 2, name: "SUB_ADMIN",value:"Sub Admin" },
    status: "ACTIVE",
  },
  {
    id: 3,
    username: "majid.beim",
    firstName: "majid",
    lastName: "belim",
    uniqueId: "U003",
    phoneNumber: "0942673742",
    email: "majid@gmail.com",
    dob:"Wed Jun 12 1996 00:00:00 GMT+0530 (India Standard Time)",
    dateOfBirth:"",
    role: { id: 1, name: "SUB_USER",value:"Sub User" },
    status: "ACTIVE",
  },
  {
    id: 4,
    username: "Megha",
    firstName: "megha",
    lastName: "parmar",
    uniqueId: "U004",
    phoneNumber: "4546576879",
    email: "1997meghal@gmail.com",
    dob:"Wed Jun 12 1996 00:00:00 GMT+0530 (India Standard Time)",
    dateOfBirth:"",
    role: { id: 2, name: "SUB_ADMIN",value:"Sub Admin" },
    status: "ACTIVE",
  },
  {
    id: 5,
    username: "ajay.patel",
    firstName: "Ajay",
    lastName: "Patel",
    uniqueId: "U005",
    phoneNumber: "9879879879",
    email: "ajay@gmail.com",
    dob:"Wed Jun 12 1996 00:00:00 GMT+0530 (India Standard Time)",
    dateOfBirth:"",
    role: { id: 1, name: "SUB_USER",value:"Sub User" },
    status: "ACTIVE",
  }
  
];

export const currentUser = {
  id: 9,
  username: "Megha.Parmar",
  firstName: "Megha",
  lastName: "Parmar",
  accessToken:
    "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJTYW5kZWVwLlBhdGVsIiwic2NvcGVzIjoiUk9MRV91c2VyIiwiaWF0IjoxNjE2OTkxMDM2LCJleHAiOjE2NDg1MjcwMzZ9.Dh6BmKN8IDXwEAfP_tudZyBrdSZVUqPMTgV7mX2-LxM",
  uniqueId: "U0007",
  phoneNumber: "+919764312585",
  email: "megha.parmar@gmail.com",
  role: "user",
  roleId: 2,
  status: "ACTIVE",
  authorities: [
    {
      createdDate: null,
      createdBy: null,
      updatedDate: null,
      updatedBy: null,
      id: 2,
      name: "user",
      role: "USER",
      approvableAmount: null,
      status: null,
    },
  ],
};

  export const DD_MM_YYYY_Format = {
    parse: {
      dateInput: 'DD/MM/YYYY',
    },
    display: {
        dateInput: 'DD/MM/YYYY',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'DD/MM/YYYY',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};