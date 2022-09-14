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
    checkBoxField: HTMLElement,
    firstField: HTMLElement,
    secondField: HTMLElement,
    selectField: HTMLElement,
    // Buttons
    submit: HTMLElement,
} => {

    const checkBoxField = screen.getByLabelText("Active?");
    const firstField = screen.getByLabelText("First Field:");
    const secondField = screen.getByLabelText("Second Field:");
    const selectField = screen.getByLabelText("Select Field:");

    const submit = screen.getByRole("button", { name: "Submit" });

    return {
        checkBoxField,
        firstField,
        secondField,
        selectField,
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
//    screen.debug();

    const {checkBoxField, firstField, secondField, selectField, submit} = elements();
    expect(checkBoxField).toBeInTheDocument();
    expect(firstField).toBeInTheDocument();
    expect(secondField).toBeInTheDocument();
    expect(selectField).toBeInTheDocument();
    expect(submit).toBeInTheDocument();

});
