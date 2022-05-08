const data = [
  {
    heading: "Contact Information",
    fields: [
      {
        label: "First Name",
        required: true,
        type: "text",
        dropdown: true,
        options: ["None", "Mr.", "Mrs."],
      },
      { label: "Last Name", required: true, type: "text" },
      { label: "Account Name", required: true, type: "text" },
      { label: "Company Name", required: false, type: "text" },
      { label: "Phone", required: true, type: "tel" },
      { label: "Fax", required: false, type: "number" },
      { label: "Title", required: false, type: "text" },
      { label: "Email", required: true, type: "email" },
      { label: "Email Opt Out", required: false, type: "checkbox" },
    ],
  },
  {
    heading: "Address Information",
    fields: [
      { label: "Street No. & Street", required: true, type: "text" },
      { label: "City", required: true, type: "text" },
      {
        label: "State",
        required: true,
        type: "dropdown",
        dropdown: true,
        options: [
          "Tasmania",
          "Queensland",
          "Western Australia",
          "Southern Australia",
          "Victoria",
          "New South Wales",
        ],
      },
      { label: "Postcode", required: false, type: "number" },
    ],
  },
  {
    heading: "Description Information",
    fields: [{ label: "Description", required: true, type: "textarea" }],
  },
];

export default data;
