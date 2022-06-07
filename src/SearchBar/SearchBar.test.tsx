import React from "react";
import {act, render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import SearchBar, {SearchBarProps} from "./SearchBar";

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

test("renders correctly with disabled", async () => {

    const PROPS: SearchBarProps = {
        disabled: true,
        handleChange: jest.fn(),
        handleValue: jest.fn(),
        label: "Search Bar Label:",
        name: "mySearchBar",
    }
    await act(async () => {
        render(<SearchBar {...PROPS}/>);
    });

    const {inputElement} = elements(PROPS.label);
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("disabled");

    const client = userEvent.setup();
    await client.type(inputElement,"abc{enter}");

    expect(inputElement).toHaveValue(""); // Should not have typed anything

})

test("renders correctly with most properties (not disabled or value)", async () => {

    const PROPS: SearchBarProps = {
        autoFocus: true,
        // disabled -- cannot test input if this was set
        handleChange: jest.fn(),
        handleValue: jest.fn(),
        htmlSize: 50,
        label: "My Label",
        name: "myName",
        placeholder: "Enter search text here",
    };
    await act(async () => {
        render(<SearchBar {...PROPS}/>);
    });

    const {inputElement} = elements(PROPS.label ? PROPS.label : "Search For:");

    expect(inputElement).toBeInTheDocument();
    // NOTE - console.log("inputElement", prettyDOM(inputElement));
    // NOTE - autoFocus is a Javascript thing
    expect(inputElement).toBeEnabled();
    expect(inputElement).toHaveAttribute("id", PROPS.name);
    expect(inputElement).toHaveAttribute("placeholder", PROPS.placeholder);
    expect(inputElement).toHaveAttribute("size", "" + PROPS.htmlSize);
    expect(inputElement).toHaveValue("");

    const client = userEvent.setup();
    await client.type(inputElement, "abc{enter}");

    expect(inputElement).toHaveValue("abc");
    expect(PROPS.handleChange).toBeCalledWith("abc");
    expect(PROPS.handleChange).toBeCalledWith("abc");

});

test("renders correctly with more properties (not disabled)", async () => {

    const PROPS: SearchBarProps = {
        autoFocus: true,
        // disabled -- cannot test input if this was set
        handleChange: jest.fn(),
        handleValue: jest.fn(),
        htmlSize: 50,
        label: "My Label",
        name: "myName",
        placeholder: "Enter search text here",
        value: "abc",
    };
    await act(async () => {
        render(<SearchBar {...PROPS}/>);
    });

    const {inputElement} = elements(PROPS.label ? PROPS.label : "Search For:");

    expect(inputElement).toBeInTheDocument();
    // NOTE - console.log("inputElement", prettyDOM(inputElement));
    // NOTE - autoFocus is a Javascript thing
    expect(inputElement).toBeEnabled();
    expect(inputElement).toHaveAttribute("id", PROPS.name);
    expect(inputElement).toHaveAttribute("placeholder", PROPS.placeholder);
    expect(inputElement).toHaveAttribute("size", "" + PROPS.htmlSize);
    expect(inputElement).toHaveValue(PROPS.value);

});

test("renders correctly with minimal properties", async () => {

    await act(async () => {
        render(<SearchBar/>);
    });

    const {inputElement} = elements(undefined);
    expect(inputElement).toBeInTheDocument();
    // NOTE - console.log("inputElement", prettyDOM(inputElement));
    expect(inputElement).toHaveAttribute("id", "searchBar"); // Default value
    expect(inputElement).toHaveAttribute("value", "");

});
