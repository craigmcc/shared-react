// AddButton -----------------------------------------------------------------

// Generic button using an "add" icon as its content.

// External Modules ----------------------------------------------------------

import React from "react";
import Button from "react-bootstrap/Button";
import {PlusCircleFill} from "react-bootstrap-icons";

// Internal Modules ----------------------------------------------------------

import {ButtonSize, ButtonSizes, ButtonVariant, HandleAction} from "../types";

// Incoming Properties -------------------------------------------------------

export interface AddButtonProps {
    disabled?: boolean;                 // Render button as disabled? [false]
    handleAdd?: HandleAction;           // Handle a click on this button [no handler]
    size?: ButtonSize;                  // Display size [small]
    testId?: string;                    // data-testid value [add]
    variant?: ButtonVariant;            // Display style [dark]
}

// Component Details ---------------------------------------------------------

const AddButton = (props: AddButtonProps) => {

    let size: number | undefined = props.size ? ButtonSizes[props.size] : ButtonSizes["small"];
    const variant: string = props.variant ? "outline-" + props.variant : "outline-dark";

    return (
        <Button
            aria-label="Add"
            data-testid={props.testId ? props.testId : "add"}
            disabled={(props.disabled !== undefined) ? props.disabled : undefined}
            onClick={props.handleAdd ? props.handleAdd : undefined}
            title="Add"
            variant={variant}
        >
            <PlusCircleFill size={size}/>
        </Button>

    )

}

export default AddButton;
