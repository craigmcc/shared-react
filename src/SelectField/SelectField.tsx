// SelectField ---------------------------------------------------------------

// Render a <Form.Group> element (from react-bootstrap) for a select dropdown
// input field that is processed by react-hook-form.  Field names MUST be unique
// within a single Form.

// External Modules ----------------------------------------------------------

import React, {ElementType} from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import {FieldError, UseFormRegister} from "react-hook-form";

// Internal Modules ----------------------------------------------------------

import {SelectOption} from "../types";

// Incoming Properties -------------------------------------------------------

export interface SelectFieldProps {
    as?: ElementType;                   // Render Form.Group as this component [Col]
    autoFocus?: boolean;                // This field to receive autoFocus? [false]
    className?: string;                 // CSS class(es) for the Form.Group [none]
    disabled?: boolean;                 // Disable this field? [false]
    error?: FieldError;                 // FieldError object for this field [none]
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
                isInvalid={!!props.error}
                isValid={!props.error}
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
                {props.error?.message}
            </Form.Control.Feedback>
        </Form.Group>
    )

}

export default SelectField;
