// CheckBoxField -------------------------------------------------------------

// Render a <Form.Group> (from react-bootstrap) for a checkbox input field
// that is processed by react-hook-form.  Field names MUST be unique within
// a single Form.

// External Modules ----------------------------------------------------------

import React, {ElementType} from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import {FieldErrors, UseFormRegister} from "react-hook-form";

// Internal Modules ----------------------------------------------------------

// Incoming Properties -------------------------------------------------------

export interface CheckBoxFieldProps {
    as?: ElementType;                   // Render Form.Group as this component [Col]
    autoFocus?: boolean;                // This field to receive autoFocus? [false]
    className?: string;                 // CSS class(es) for the Form.Group [none]
    disabled?: boolean;                 // Disable this field? [false]
    errors: FieldErrors;                // errors object from useForm()
    invalid?: string;                   // Error message if input is invalid [none]
    label: string;                      // Field label [required]
    name: string;                       // Name of this field [required]
    readOnly?: boolean;                 // Mark field as read only? [false]
    register: UseFormRegister<any>;     // register object from useForm() // NOTE - <any> ???
    type?: "checkbox" | "radio";        // Input control type [checkbox]
}

// Component Details ---------------------------------------------------------

const CheckBoxField = (props: CheckBoxFieldProps) => {

    return (
        <Form.Group
            as={props.as ? props.as : Col}
            className={props.className ? props.className : undefined}
            controlId={props.name}
            id={props.name + "Group"}
        >
            <Form.Check>
                <Form.Check.Input
                    autoFocus={props.autoFocus ? props.autoFocus : undefined}
                    className="me-2"
                    disabled={(props.disabled !== undefined) ? props.disabled : undefined}
                    isInvalid={!!props.errors[props.name]}
                    isValid={!props.errors[props.name]}
                    readOnly={(props.readOnly !== undefined) ? props.readOnly : undefined}
                    type={props.type ? props.type : undefined}
                    {...props.register(props.name)}

                />
                <Form.Check.Label>{props.label}</Form.Check.Label>
                {(props.invalid) ? (
                    <Form.Control.Feedback type="invalid">
                        {props.invalid}
                    </Form.Control.Feedback>
                ) : null }
            </Form.Check>
        </Form.Group>
    )

}

export default CheckBoxField;
