// TextField -----------------------------------------------------------------

// Render a <Form.Group> element (from react-bootstrap) for a text input field
// that is processed by react-hook-form.  Field names MUST be unique within
// a single Form.

// External Modules ----------------------------------------------------------

import React, {ElementType} from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import {FieldErrors, UseFormRegister} from "react-hook-form";

// Internal Modules ----------------------------------------------------------

// Incoming Properties -------------------------------------------------------

export interface TextFieldProps {
    as?: ElementType;                   // Render Form.Group as this component [Col]
    autoFocus?: boolean;                // This field to receive autoFocus? [false]
    className?: string;                 // CSS class(es) for the Form.Group [none]
    disabled?: boolean;                 // Disable this field? [false]
    errors: FieldErrors;                // errors object from useForm()
    htmlSize?: number;                  // HTML size of text field [none]
    label?: string;                     // Field label [none]
    name: string;                       // Name of this field [required]
    placeholder?: string;               // Placeholder text [none]
    readOnly?: boolean;                 // Mark field as read only? [false]
    register: UseFormRegister<any>;     // register object from useForm() // NOTE - <any> ???
    type?: "date" | "hidden" | "month" | "number" | "password" | "text" | "time";
    // Input field type [text]
    valid?: string;                     // Help message for valid input [none]
}

// Component Details ---------------------------------------------------------

const TextField = (props: TextFieldProps) => {

    return (
        <Form.Group
            as={props.as ? props.as : Col}
            className={props.className ? props.className : undefined}
            controlId={props.name}
            id={props.name + "Group"}
        >
            {(props.label) ? (
                <Form.Label>{props.label}</Form.Label>
            ) : null }
            <Form.Control
                autoFocus={props.autoFocus ? props.autoFocus : undefined}
                disabled={(props.disabled !== undefined) ? props.disabled : undefined}
                htmlSize={(props.htmlSize !== undefined) ? props.htmlSize : undefined}
                isInvalid={!!props.errors[props.name]}
                isValid={!props.errors[props.name]}
                placeholder={props.placeholder ? props.placeholder : undefined}
                readOnly={(props.readOnly !== undefined) ? props.readOnly : undefined}
                type={props.type ? props.type : undefined}
                {...props.register(props.name)}
            />
            {(props.valid) ? (
                <Form.Control.Feedback type="valid">
                    {props.valid}
                </Form.Control.Feedback>
            ) : null }
            <Form.Control.Feedback type="invalid">
                {props.errors[props.name]?.message}
            </Form.Control.Feedback>
        </Form.Group>
    )

}

export default TextField;
