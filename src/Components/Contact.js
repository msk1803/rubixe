import { useState, useEffect } from "react";

function Contact() {

  const initialValues = { username: "", email: "", number: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    console.log(e.target)
    const { name, value } = e.target;
    setFormValues({...formValues, [name]: value });
    console.log(formValues)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  if(formValues.username&&formValues.email&&formValues.number){
    setFormValues(initialValues);
  };
  }
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, );
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.number) {
      errors.number = "number is required";
    } else if (values.number.length < 10) {
      errors.number = "number must be more than 4 characters";
    } else if (values.number.length > 10) {
      errors.number = "number cannot exceed more than 10 characters";
    }
    return errors;
  };

  return (
    <div className="contact">
    <div className="contact_header">
     <h1>GET IN TOUCH</h1>
     <br/>
     <p>Please complete the form and we will get back to you.</p>
    </div>
    <div class = "vertical"></div>
       <form onSubmit={handleSubmit}>
       <h4>Name*</h4>
       <input type="text" placeholder='Enter Your Name'
       name="username"
       value={formValues.username}
       onChange={handleChange}
       />
        <p className="para">{formErrors.username}</p>
       <h4>Email*</h4>
       <input type="email" placeholder="Enter Your Email" 
       name="email"
        value={formValues.email}
        onChange={handleChange}/>
          <p className="para">{formErrors.email}</p>
       <h4>Mobile number*</h4>
       <input type="number" placeholder='Enter Your Mobile number'
       name="number"
       value={formValues.number}
       onChange={handleChange}/>
        <p className="para">{formErrors.number}</p>
      <button className="btn2" type='submit'>Register Now</button>
      </form>
      </div>
  )
}

export default Contact
