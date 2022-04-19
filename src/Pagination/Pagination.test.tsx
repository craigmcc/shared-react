import React from "react";
import {act, /*prettyDOM, */render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Pagination, {PaginationProps} from "./Pagination";

// Test Infrastructure -------------------------------------------------------

const checkButtonElements = (buttonElements: HTMLElement[], currentPage: number): void => {
    expect(buttonElements.length).toBe(3);
    buttonElements.forEach(buttonElement => {
        if (buttonElement.textContent === ("" + currentPage)) {
            expect(buttonElement).toBeDisabled();
        } else {
            expect(buttonElement).toBeEnabled();
        }
    });
}

const elements = (): {
    buttonElements: HTMLElement[],
} => {
    const buttonElements = screen.getAllByRole("button");  // Relies on HTML default
    return {
        buttonElements
    };
}

// Test Methods --------------------------------------------------------------

test("renders correctly with handler functions", async () => {

    const PROPS: PaginationProps = {
        currentPage: 2,
        handleNext: jest.fn(),
        handlePrevious: jest.fn(),
        lastPage: false,
    }
    await act(async () => {
        render(<Pagination {...PROPS}/>);
    });

    const {buttonElements} = elements();
    checkButtonElements(buttonElements, PROPS.currentPage);

    const client = userEvent.setup();
    await client.click(buttonElements[0]);
    await client.click(buttonElements[2]);

    expect(PROPS.handleNext).toBeCalledTimes(1);
    expect(PROPS.handlePrevious).toBeCalledTimes(1);

});

test("renders correctly with minimal properties", async () => {

    const PROPS: PaginationProps = {
        currentPage: 2,
        lastPage: false,
    }
    await act(async () => {
        render(<Pagination {...PROPS}/>);
    })

    const {buttonElements} = elements();
    checkButtonElements(buttonElements, PROPS.currentPage);


});

