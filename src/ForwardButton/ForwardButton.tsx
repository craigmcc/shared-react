// ForwardButton ----------------------------------------------------------------

// Generic button using a "forward" icon as its content.

// External Modules ----------------------------------------------------------

import React from "react";
import Button from "react-bootstrap/Button";
import {CaretRight, CaretRightFill} from "react-bootstrap-icons";

// Internal Modules ----------------------------------------------------------

import {ButtonSize, ButtonSizes, ButtonVariant, HandleAction} from "../types";

// Incoming Properties -------------------------------------------------------

export interface ForwardButtonProps {
    className?: string;                 // Additional CSS classes [none]
    disabled?: boolean;                 // Render button as disabled? [false]
    handleForward?: HandleAction;       // Handle a click on this button [no handler]
    size?: ButtonSize;                  // Display size [small]
    testId?: string;                    // data-testid value [forward]
    variant?: ButtonVariant;            // Display style [dark]
}

// Component Details ---------------------------------------------------------

const ForwardButton = (props: ForwardButtonProps) => {

    let size: number | undefined = props.size ? ButtonSizes[props.size] : ButtonSizes["small"];
    const variant: string = props.variant ? "outline-" + props.variant : "outline-dark";

    return (
        <Button
            aria-label="Forward"
            className={props.className ? props.className : undefined}
            data-testid={props.testId ? props.testId : "forward"}
            disabled={(props.disabled !== undefined) ? props.disabled : undefined}
            onClick={props.handleForward ? props.handleForward : undefined}
            title="Forward"
            variant={variant}
        >
            <CaretRightFill size={size}/>
        </Button>

    )

}

export default ForwardButton;
