// Pagination ----------------------------------------------------------------

// Simple pagination controls for a multiple page response

// External Modules ----------------------------------------------------------

import React, {useState} from "react";
import Button from "react-bootstrap/Button";

// Internal Modules ----------------------------------------------------------

import {HandleAction} from "../types";

// Incoming Properties -------------------------------------------------------

export interface PaginationProps {
    currentPage: number;                // One-relative current page number [1]
    handleNext?: HandleAction;          // Handle "next" clicked [no handler]
    handlePrevious?: HandleAction;      // Handle () for previous clicked [no handler]
    lastPage: boolean;                  // Is this the last page? [false]
    variant?: string;                   // Button variant style [outline-secondary]
}

// Component Details ---------------------------------------------------------

const Pagination = (props: PaginationProps) => {

    const [variant] = useState<string>(props.variant ? props.variant : "outline-secondary");

    return (
        <>
            <Button
                className="me-1"
                disabled={props.currentPage === 1}
                onClick={props.handlePrevious ? props.handlePrevious : undefined}
                variant={variant}
            >
                &lt;
            </Button>
            <Button
                className="me-1"
                disabled
                variant={variant}
            >
                {props.currentPage}
            </Button>
            <Button
                disabled={props.lastPage}
                onClick={props.handleNext ? props.handleNext : undefined}
                variant={variant}
            >
                &gt;
            </Button>
        </>
    )

}

export default Pagination;
