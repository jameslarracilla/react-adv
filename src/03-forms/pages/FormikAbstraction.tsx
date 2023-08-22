import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { MyCheckBox, MySelect, MyTextInput } from '../components';

import '../styles/styles.css';

export function FormikAbstraction() {
  return (
    <div>
      <h1>Formik Asbtraction</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          terms: false,
          jobType: '',
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, 'Debe de tener 15 characteres o menos')
            .required('Requerido'),
          lastName: Yup.string()
            .max(10, 'Debe de tener 10 characteres o menos')
            .required('Requerido'),
          email: Yup.string().email('Email Inválido').required('Requerido'),
          terms: Yup.boolean().oneOf([true], 'Debe de aceptar las condiciones'),
          jobType: Yup.string()
            .notOneOf(['it-jr'], 'Esta opción no es permitida')
            .required('Requerido'),
        })}
      >
        {(formik) => (
          <Form>
            <MyTextInput
              label="First Name"
              name="firstName"
              placeholder="Fernanda"
            />
            <MyTextInput
              label="Last Name"
              name="lastName"
              placeholder="Sanchez"
            />

            <MyTextInput
              label="Email Address"
              name="email"
              placeholder="account@google.com"
              type="email"
            />

            <MySelect label="Job Type" name="jobType">
              <option value="">Pick Something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-snr">IT Senior</option>
              <option value="it-jr">IT Junior</option>
            </MySelect>

            <MyCheckBox label="Terms & Conditions" name="terms" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
