import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import toast, { Toaster } from 'react-hot-toast';
import { Button, Container, Form, Row, Col } from 'react-bootstrap';
import Snippet from "../components/shared/Snippet";

const validationSchema = yup.object({
  name: yup.string().required('El nombre es obligatorio'),
  email: yup.string().email('Ingresa un email válido').required('El email es obligatorio'),
  subject: yup.string().required('El asunto es obligatorio'),
  message: yup.string().required('El mensaje es obligatorio'),
});

export const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      toast.success('Mensaje enviado con éxito');
      resetForm();
    },
  });

  return (
    <Container className="p-5">
      <Snippet pageName="Contacto" />
      <Toaster />
      <Row className="mt-3 mb-3">
        <Col>
          <h1 className="mb-2">Contacto</h1>
        </Col>
      </Row>

      <Form onSubmit={formik.handleSubmit} className="mt-5">
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            id="name"
            placeholder="Nombre"
            {...formik.getFieldProps('name')}
            isInvalid={formik.touched.name && formik.errors.name}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.name}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="email"
            id="email"
            placeholder="Email"
            {...formik.getFieldProps('email')}
            isInvalid={formik.touched.email && formik.errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.email}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            id="subject"
            placeholder="Asunto"
            {...formik.getFieldProps('subject')}
            isInvalid={formik.touched.subject && formik.errors.subject}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.subject}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            as="textarea"
            id="message"
            rows={3}
            placeholder="Mensaje"
            {...formik.getFieldProps('message')}
            isInvalid={formik.touched.message && formik.errors.message}
            style={{ resize: 'none' }}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Button type="submit" variant="success" className="rounded-pill">
          Enviar
        </Button>
      </Form>
    </Container>
  );
};

export default Contact;
