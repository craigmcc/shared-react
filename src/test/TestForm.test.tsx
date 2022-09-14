// TestForm.test -------------------------------------------------------------

// Tests for React Hook Form field components.

// External Modules ----------------------------------------------------------

import React from "react";
import {act, render, screen} from "@testing-library/react";
//import userEvent from "@testing-library/user-event";

// Internal Modules ----------------------------------------------------------

import TestForm, {TestFormProps} from "./TestForm";

// Test Infrastructure -------------------------------------------------------

const elements = (): {
    // Fields
    firstField: HTMLElement,
    secondField: HTMLElement,
    // Buttons
    submit: HTMLElement,
} => {

    const firstField = screen.getByLabelText("First Field:");
    const secondField = screen.getByLabelText("Second Field:");

    const submit = screen.getByRole("button", { name: "Submit" });

    return {
        firstField,
        secondField,
        submit: submit,
    }

}

// Test Methods --------------------------------------------------------------

test("renders correctly", async () => {

    const PROPS: TestFormProps = {
        handleSubmit: jest.fn(),
    }

    await act(async () => {
        render(<TestForm {...PROPS}/>);
    });
    screen.debug();

    const {firstField, secondField, submit} = elements();
    expect(firstField).toBeInTheDocument();
    expect(secondField).toBeInTheDocument();
    expect(submit).toBeInTheDocument();

});
