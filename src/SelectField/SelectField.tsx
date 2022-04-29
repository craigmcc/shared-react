// SelectField ---------------------------------------------------------------

// Render a <Form.Group> element (from react-bootstrap) for a select dropdown
// input field that is processed by react-hook-form.  Field names MUST be unique
// within a single Form.

// External Modules ----------------------------------------------------------

import React, {ElementType} from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import {FieldErrors, UseFormRegister} from "react-hook-form";

// Internal Modules ----------------------------------------------------------

// Incoming Properties -------------------------------------------------------

export type SelectOption = {
    label: string;                      // Label displayed for this option
    value: string;                      // Value to return when option selected
}

export interface SelectFieldProps {
    as?: ElementType;                   // Render Form.Group as this component [Col]
    autoFocus?: boolean;                // This field to receive autoFocus? [false]
    className?: string;                 // CSS class(es) for the Form.Group [none]
    disabled?: boolean;                 // Disable this field? [false]
    errors: FieldErrors;                // errors object from useForm()
    header?: SelectOption;              // Optional header option for above the list [none]
    label: string;                      // Field label [required]
    name: string;                       // Name of this field [required]
    options: SelectOption[];            // Selection options to be displayed
    register: UseFormRegister<any>;     // register object from useForm() // NOTE - <any> ???
    valid?: string;                     // Help message for valid input [none]
}

// Component Details ---------------------------------------------------------

const SelectField = (props: SelectFieldProps) => {

    return (
        <Form.Group
            as={props.as ? props.as : Col}
            className={props.className ? props.className : undefined}
            controlId={props.name}
            id={props.name + "Group"}
        >
            <Form.Label>{props.label}</Form.Label>
            <Form.Select
                autoFocus={props.autoFocus ? props.autoFocus : undefined}
                disabled={(props.disabled !== undefined) ? props.disabled : undefined}
                isInvalid={!!props.errors[props.name]}
                isValid={!props.errors[props.name]}
                size="sm"
                {...props.register(props.name)}
            >
                {(props.header) ? (
                    <option key="-1" value={props.header.value}>
                        {props.header.label}
                    </option>
                ) : null}
                {props.options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </Form.Select>
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

export default SelectField;
