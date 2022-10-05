import * as React from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as yup from "yup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const validationSchema = yup.object({
  name: yup.string("Please, enter text.").required("Name is required"),
  surname: yup.string("Please, enter text.").required("Surname is required"),
  email:yup.string("Please, enter text.").required("Email is required"),
});


const AddUser = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      surname:"",
      email:"",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const url='http://localhost:5000/users'
   console.log(values);
   axios.post(url, values)

    },
  });


  return (
    <div>
      <form style={{ padding: "40px" }} onSubmit={formik.handleSubmit}>
        <TextField
          className="input"
          fullWidth
          id="name"
          name="name"
          label="name"
          value={formik.values.name}
          type="text"
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
   <TextField
          className="input"
          fullWidth
          id="surname"
          name="surname"
          label="surname"
          type="string"
          value={formik.values.surname}
          onChange={formik.handleChange}
          error={formik.touched.surname && Boolean(formik.errors.surname)}
          helperText={formik.touched.surname && formik.errors.surname}
     />
       <TextField
          className="input"
          fullWidth
          id="name"
          name="email"
          label="email"
          value={formik.values.email}
          type="email"
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <Button
          style={{ marginTop: "20px" ,backgroundColor:"black"}}
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
        >
          Add
        </Button>
      </form>
    </div>
  );
};
export default AddUser;
