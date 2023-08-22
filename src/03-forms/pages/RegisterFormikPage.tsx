import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';
import { MyTextInput } from '../components';

export function RegisterFormikPage() {
  return (
    <div>
      <h1>Register Formik Page</h1>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password1: '',
          password2: '',
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, 'El nombre debe ser de 3 caracteres o mas')
            .max(15, 'El nombre debe ser menor de 15 caracteres')
            .required('Requerido'),
          email: Yup.string()
            .email('Revise el formato del correo')
            .required('Requerido'),
          password1: Yup.string()
            .min(6, 'Minimo 6 caracteres')
            .required('Requerido'),
          password2: Yup.string()
            .oneOf([Yup.ref('password1')], 'Las contraseñas no son iguales.')
            .required('Requerido'),
        })}
      >
        {({ handleReset }) => (
          <Form>
            <MyTextInput label="Nombre" name="name" placeholder="Fernanda" />
            <MyTextInput
              label="Email"
              name="email"
              placeholder="account@email.com"
            />
            <MyTextInput
              type="password"
              label="Password"
              name="password1"
              placeholder="*****"
            />
            <MyTextInput
              type="password"
              label="Password"
              name="password2"
              placeholder="*****"
            />
            <button type="submit">Create</button>
            <button type="button" onClick={handleReset}>
              Reset
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
