// CheckBox ------------------------------------------------------------------

// General purpose standalone checkbox input, with optional decorations.

// External Modules ----------------------------------------------------------

import React, {useEffect, useState} from "react";
import Form from "react-bootstrap/Form";

// Internal Modules ----------------------------------------------------------

import {HandleBoolean, OnChangeInput} from "../types";

// Incoming Properties -------------------------------------------------------

export interface CheckBoxProps {
    autoFocus?: boolean;                // Should element receive autoFocus? [false]
    disabled?: boolean;                 // Should element be disabled? [false]
    handleChange: HandleBoolean;        // Handle change in value
    label: string;                      // Element label [NO DEFAULT]
    name?: string;                      // Input control name [checkBox]
    value?: boolean;                    // Initial state [false]
}

// Component Details ---------------------------------------------------------

const CheckBox = (props: CheckBoxProps) => {

    const [name] = useState<string>(props.name ? props.name : "checkBox");
    const [value, setValue] = useState<boolean>(props.value !== undefined ? props.value : false);

    useEffect(() => {
        // Force rerender when props.value changes
    }, [value, props.value]);


    const handleChange: OnChangeInput = (event): void => {
        const theValue = event.target.checked;
        setValue(theValue);
        if (props.handleChange) {
            props.handleChange(theValue);
        }
    }

    return (
        <Form className="align-items-center">
            <Form.Group id={`${name}Group`}>
                <Form.Check.Input
                    autoFocus={props.autoFocus !== undefined ? props.autoFocus : undefined}
                    defaultChecked={value}
                    disabled={props.disabled !== undefined ? props.disabled : undefined}
                    id={name}
                    onChange={handleChange}
                />
                <Form.Check.Label className="ms-2" htmlFor={name}>
                    {props.label ? props.label : "Check?"}
                </Form.Check.Label>
            </Form.Group>
        </Form>
    )

}

export default CheckBox;
