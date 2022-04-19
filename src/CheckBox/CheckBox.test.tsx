import React from "react";
import {act, render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import CheckBox, {CheckBoxProps} from "./CheckBox";

// Test Infrastructure -------------------------------------------------------

const elements = (label: string | undefined): {
    inputElement: HTMLElement,
} => {
    const inputElement = screen.getByLabelText(label ? label : "Search For:");
    return {
        inputElement
    };
}

// Test Methods --------------------------------------------------------------

test("renders correctly with maximal properties", async () => {

    const PROPS: CheckBoxProps = {
        autoFocus: true,
        disabled: true,
        handleChange: jest.fn(),
        label: "My Label",
        name: "myCheckbox",
        value: true,
    }
    await act(async () => {
        render(<CheckBox {...PROPS}/>);
    });

    const inputElement = screen.getByLabelText(PROPS.label);
    expect(inputElement).toBeInTheDocument();
    // NOTE - console.log("inputElement", prettyDOM(inputElement));
    // NOTE - autoFocus is a Javascript thing
    expect(inputElement).toBeChecked();
    expect(inputElement).toBeDisabled();
    expect(inputElement).toHaveAttribute("id", PROPS.name);
    expect(inputElement).toHaveAttribute("type", "checkbox");

    // Cannot click on a disabled element, so do not check for that

});

test("renders correctly with minimal properties", async () => {

    const PROPS: CheckBoxProps = {
        handleChange: jest.fn(),
        label: "My Label",
    }
    await act(async () => {
        render(<CheckBox {...PROPS}/>);
    });

    const inputElement = screen.getByLabelText(PROPS.label);
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).not.toBeChecked();
    expect(inputElement).toBeEnabled();
    expect(inputElement).toHaveAttribute("id", "checkBox"); // Default value
    expect(inputElement).toHaveAttribute("type", "checkbox");

    const client = userEvent.setup();
    await client.click(inputElement);
    expect(inputElement).toBeChecked();

    await client.click(inputElement);
    expect(inputElement).not.toBeChecked();

});
