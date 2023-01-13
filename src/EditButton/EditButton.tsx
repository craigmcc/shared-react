// EditButton ----------------------------------------------------------------

// Generic button using an "edit" icon as its content.

// External Modules ----------------------------------------------------------

import React from "react";
import Button from "react-bootstrap/Button";
import {PencilFill} from "react-bootstrap-icons";

// Internal Modules ----------------------------------------------------------

import {EditButtonVariant, HandleAction} from "../types";

// Incoming Properties -------------------------------------------------------

export interface EditButtonProps {
    disabled?: boolean;                 // Render button as disabled? [false]
    handleEdit?: HandleAction;          // Handle a click on this button [no handler]
    testId?: string;                    // data-testid value [edit]
    variant?: EditButtonVariant;        // Display style [dark]
}

const EditButton = (props: EditButtonProps) => {

    const variant: string = props.variant ? "outline-" + props.variant : "outline-dark";

    return (
        <Button
            aria-label="Edit"
            data-testid={props.testId ? props.testId : "edit"}
            disabled={(props.disabled !== undefined) ? props.disabled : undefined}
            onClick={props.handleEdit ? props.handleEdit : undefined}
            title="Edit"
            variant={variant}
        >
            <PencilFill
                size={16}
            />
        </Button>
    )

}

export default EditButton;
