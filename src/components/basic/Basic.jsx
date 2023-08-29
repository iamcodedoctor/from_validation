import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { basicFormValidationSchema } from "./basicFormValidationSchema";

const departmentOptions = [
  {
    id: "1",
    label: "Nashik",
  },
  {
    id: "2",
    label: "Nagpur",
  },
  {
    id: "3",
    label: "Pune",
  },
  {
    id: "4",
    label: "Mumbai",
  },
  {
    id: "5",
    label: "Kolhapur",
  },
];

const booleanOptions = [
  {
    value: true,
    label: "True",
  },
  {
    value: false,
    label: "False",
  },
];

const Basic = () => {
  const { register, handleSubmit, formState } = useForm({
   
    resolver: zodResolver(basicFormValidationSchema),
  });

  const handleSave = (formValues) => {
    console.log("Form Submitted");
    console.log(formValues);
  };

  const { errors } = formState;

  return (
    <div className="container mt-4">
      <h1>Basic Form</h1>
      <Form className="mt-4" onSubmit={handleSubmit(handleSave)}>
        <Form.Group className="mb-3" controlId="code">
          <Form.Label>Code</Form.Label>
          <Form.Control
            {...register("code")}
            type="text"
            placeholder="Enter Code"
          />
          {errors?.code?.message && (
            <Form.Text className="text-danger">{errors.code.message}</Form.Text>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            {...register("name")}
            type="text"
            placeholder="Enter Name"
          />
          {errors?.name?.message && (
            <Form.Text className="text-danger">{errors.name.message}</Form.Text>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="displayName">
          <Form.Label>Display Name</Form.Label>
          <Form.Control
            {...register("display_name")}
            type="text"
            placeholder="Enter Display Name"
          />
          {errors?.display_name?.message && (
            <Form.Text className="text-danger">{errors.display_name.message}</Form.Text>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="department">
          <Form.Label>Department</Form.Label>
          <Form.Select
            {...register("department")}
            aria-label="Default select example"
          >
            <option value={""} className="text-muted">
              Open this select menu
            </option>
            {departmentOptions.map((department) => {
              return (
                <option key={department.id} value={department.id}>
                  {department.label}
                </option>
              );
            })}
          </Form.Select>
          {errors?.department?.message && (
            <Form.Text className="text-danger">{errors.department?.message}</Form.Text>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="isActive">
          <Form.Label>Is Active</Form.Label>
          <Form.Select
            {...register("is_active")}
            aria-label="Default select example"
          >
            {booleanOptions.map((option) => {
              return (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              );
            })}
          </Form.Select>
          {/* {errors?.is_active.message && (
            <Form.Text className="text-danger">{errors?.is_active?.message}</Form.Text>
          )} */}
        </Form.Group>
        <Form.Group className="mb-3" controlId="isverified">
          <Form.Label>Is Varified</Form.Label>
          <Form.Select
            {...register("is_verified")}
            aria-label="Default select example"
          >
            {booleanOptions.map((option) => {
              return (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              );
            })}
          </Form.Select>
          {/* {errors?.is_verified?.message && (
            <Form.Text className="text-danger">{errors?.is_verified?.message}</Form.Text>
          )} */}
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Basic;
