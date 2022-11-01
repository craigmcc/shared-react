// AddButton -----------------------------------------------------------------

// Generic button using an "add" icon as its content.

// External Modules ----------------------------------------------------------

import React from "react";
import Button from "react-bootstrap/Button";
import {PlusCircleFill} from "react-bootstrap-icons";

// Internal Modules ----------------------------------------------------------

import {HandleAction} from "../types";

// Incoming Properties -------------------------------------------------------

export interface AddButtonProps {
    disabled?: boolean;                 // Render button as disabled? [false]
    handleAdd?: HandleAction;           // Handle a click on this button [no handler]
    testId?: string;                    // data-testid value [add]
}

// Component Details ---------------------------------------------------------

const AddButton = (props: AddButtonProps) => {

    return (
        <Button
            aria-label="Add"
            data-testid={props.testId ? props.testId : "add"}
            disabled={(props.disabled !== undefined) ? props.disabled : undefined}
            onClick={props.handleAdd ? props.handleAdd : undefined}
            title="Add"
            variant="outline-dark"
        >
            <PlusCircleFill size={32}/>
        </Button>

    )

}

export default AddButton;
