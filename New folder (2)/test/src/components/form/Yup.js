import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
});

// ...

<Formik
  initialValues={{ name: '', email: '' }}
  validationSchema={validationSchema}
  onSubmit={handleSubmit}
>
  {/* Form content */}
</Formik>