// AddButton -----------------------------------------------------------------

// Generic button using an "add" icon as its content.

// External Modules ----------------------------------------------------------

import React from "react";
import Button from "react-bootstrap/Button";
import {PlusCircleFill} from "react-bootstrap-icons";

// Internal Modules ----------------------------------------------------------

import {AddButtonVariant, HandleAction} from "../types";

// Incoming Properties -------------------------------------------------------

export interface AddButtonProps {
    disabled?: boolean;                 // Render button as disabled? [false]
    handleAdd?: HandleAction;           // Handle a click on this button [no handler]
    testId?: string;                    // data-testid value [add]
    variant?: AddButtonVariant;         // Display style [dark]
}

// Component Details ---------------------------------------------------------

const AddButton = (props: AddButtonProps) => {

    const variant: string = props.variant ? props.variant : "dark";

    return (
        <Button
            aria-label="Add"
            data-testid={props.testId ? props.testId : "add"}
            disabled={(props.disabled !== undefined) ? props.disabled : undefined}
            onClick={props.handleAdd ? props.handleAdd : undefined}
            title="Add"
            variant={`outline-{variant}`}
        >
            <PlusCircleFill size={32}/>
        </Button>

    )

}

export default AddButton;
