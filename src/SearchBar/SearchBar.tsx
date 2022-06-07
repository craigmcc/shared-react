// SearchBar -----------------------------------------------------------------

// General purpose search bar, with optional decorations.

// External Modules ----------------------------------------------------------

import React, {useEffect, useState} from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

// Internal Modules ----------------------------------------------------------

import {HandleValue, OnChangeInput, OnKeyDown} from "../types";

// Incoming Properties -------------------------------------------------------

export interface SearchBarProps {
    autoFocus?: boolean;                // Should element receive autoFocus? [false]
    disabled?: boolean;                 // Should element be disabled? [false]
    handleChange?: HandleValue;         // Handle value on each change [no handler]
    handleValue?: HandleValue;          // Handle value on enter [no handler]
    htmlSize?: number;                  // Number of characters to show [no setting]
    label?: string;                     // Element label [Search For:]
    name?: string;                      // Input control name [searchBar]
    placeholder?: string;               // Placeholder text [none]
    value?: string;                     // Initial value to display [""]
}

// Component Details ---------------------------------------------------------

const SearchBar = (props: SearchBarProps) => {

    const [name] = useState<string>(props.name ? props.name : "searchBar");
    const [value, setValue] = useState<string>(props.value ? props.value : "");

    useEffect(() => {
        // Force rerender if props.value changes
        if (props.value !== undefined) {
            setValue(props.value);
        }
    }, [value, props.value]);

    const handleChange: OnChangeInput = (event): void => {
        const newValue: string = event.target.value;
        setValue(newValue);
        if (props.handleChange) {
            props.handleChange(newValue);
        }
    }

    const handleKeyDown: OnKeyDown = (event): void => {
        if (event.key === "Enter" && props.handleValue) {
            props.handleValue(value);
        }
    }

    return (
        <Form className="align-items-center">
            <Form.Group as={Row} id={`${name}Group`}>
                <Form.Label column htmlFor={name} xs="auto">
                    {props.label ? props.label : "Search For:"}
                </Form.Label>
                <Col xs="auto">
                    <Form.Control
                        autoFocus={props.autoFocus ? props.autoFocus : undefined}
                        disabled={props.disabled ? props.disabled : undefined}
                        htmlSize={props.htmlSize ? props.htmlSize : undefined}
                        id={name}
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                        placeholder={props.placeholder ? props.placeholder : undefined}
                        size="sm"
                        value={value}
                    />
                </Col>
            </Form.Group>
        </Form>
    )

}

export default SearchBar;
