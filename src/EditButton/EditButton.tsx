// EditButton ----------------------------------------------------------------

// Generic button using an "edit" icon as its content.

// External Modules ----------------------------------------------------------

import React from "react";
import Button from "react-bootstrap/Button";
import {PencilFill} from "react-bootstrap-icons";

// Internal Modules ----------------------------------------------------------

import {HandleAction} from "../types";

// Incoming Properties -------------------------------------------------------

type VARIANT = "primary" | "secondary" | "success" | "danger" | "warning" |
    "info" | "light" | "dark" | "muted";

export interface EditButtonProps {
    disabled?: boolean;                 // Render button as disabled? [false]
    handleEdit?: HandleAction;          // Handle a click on this button [no handler]
    testId?: string;                    // data-testid value [edit]
    variant?: VARIANT;                  // Display (color) style [dark]
}

const EditButton = (props: EditButtonProps) => {

    const variant = props.variant ? props.variant : "dark";

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
