// TextButton ----------------------------------------------------------------

// Generic button using a specified text label.

// External Modules ----------------------------------------------------------

import React from "react";
import Button from "react-bootstrap/Button";

// Internal Modules ----------------------------------------------------------

import {ButtonSize, ButtonSizes, ButtonVariant, HandleAction} from "../types";

// Incoming Properties -------------------------------------------------------

export interface TextButtonProps {
    disabled?: boolean;                 // Render button as disabled? [false]
    handleText?: HandleAction;          // Handle a click on this button [no handler]
    size?: ButtonSize;                  // Display size [small]
    testId?: string;                    // data-testid value [text]
    text: string;                       // Textual button label [no default]
    variant?: ButtonVariant;            // Display style [dark]
}

// Component Details ---------------------------------------------------------

const TextButton = (props: TextButtonProps) => {

    let size: string | undefined = undefined;
    if (props.size === "small") {
        size = "sm"
    } else if (props.size === "large") {
        size = "lg";
    }
    const variant: string = props.variant ? "outline-" + props.variant : "outline-dark";

    return (
        <Button
            aria-label={props.text}
            data-testid={props.testId ? props.testId : "text"}
            disabled={(props.disabled !== undefined) ? props.disabled : undefined}
            onClick={props.handleText ? props.handleText : undefined}
            title={props.text}
            variant={variant}
        >
            {props.text}
        </Button>
    )

}

export default TextButton;
