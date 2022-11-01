// BackButton ----------------------------------------------------------------

// Generic button using a "back" icon as its content.

// External Modules ----------------------------------------------------------

import React from "react";
import Button from "react-bootstrap/Button";
import {CaretLeftFill} from "react-bootstrap-icons";

// Internal Modules ----------------------------------------------------------

import {HandleAction} from "../types";

// Incoming Properties -------------------------------------------------------

export interface BackButtonProps {
    disabled?: boolean;                 // Render button as disabled? [false]
    handleBack?: HandleAction;          // Handle a click on this button [no handler]
    testId?: string;                    // data-testid value [back]
}

// Component Details ---------------------------------------------------------

const BackButton = (props: BackButtonProps) => {

    return (
        <Button
            aria-label="Back"
            data-testid={props.testId ? props.testId : "back"}
            disabled={(props.disabled !== undefined) ? props.disabled : undefined}
            onClick={props.handleBack ? props.handleBack : undefined}
            title="Back"
            variant="outline-dark"
        >
            <CaretLeftFill size={32}/>
        </Button>

    )

}

export default BackButton;
