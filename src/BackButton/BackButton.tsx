// BackButton ----------------------------------------------------------------

// Generic button using a "back" icon as its content.

// External Modules ----------------------------------------------------------

import React from "react";
import Button from "react-bootstrap/Button";
import {CaretLeftFill} from "react-bootstrap-icons";

// Internal Modules ----------------------------------------------------------

import {ButtonSize, ButtonSizes, ButtonVariant, HandleAction} from "../types";

// Incoming Properties -------------------------------------------------------

export interface BackButtonProps {
    disabled?: boolean;                 // Render button as disabled? [false]
    handleBack?: HandleAction;          // Handle a click on this button [no handler]
    size?: ButtonSize;                  // Display size [small]
    testId?: string;                    // data-testid value [back]
    variant?: ButtonVariant;            // Display style [dark]
}

// Component Details ---------------------------------------------------------

const BackButton = (props: BackButtonProps) => {

    let size: number | undefined = props.size ? ButtonSizes[props.size] : ButtonSizes["small"];
    const variant: string = props.variant ? "outline-" + props.variant : "outline-dark";

    return (
        <Button
            aria-label="Back"
            data-testid={props.testId ? props.testId : "back"}
            disabled={(props.disabled !== undefined) ? props.disabled : undefined}
            onClick={props.handleBack ? props.handleBack : undefined}
            title="Back"
            variant={variant}
        >
            <CaretLeftFill size={size}/>
        </Button>

    )

}

export default BackButton;
