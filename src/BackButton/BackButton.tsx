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

    /**
     * Additional CSS classes (space separated)
     *
     * @default None
     */
    className?: string;

    /**
     * Render this button as disabled?
     *
     * @default false
     */
    disabled?: boolean;

    /**
     * Handle a click on this button.
     *
     * @default None
     */
    handleBack?: HandleAction;

    /**
     * Display size of this button.
     *
     * @default small
     */
    size?: ButtonSize;

    /**
     * A data-testid value for this component instance.
     *
     * @default back
     */
    testId?: string;

    /**
     * Base display style for this button.
     *
     * @default dark
     */
    variant?: ButtonVariant;

}

// Component Details ---------------------------------------------------------

/**
 * Generic button using a "Back" icon as its content.
 *
 * @param props
 * @constructor
 */
const BackButton = (props: BackButtonProps) => {

    let size: number | undefined = props.size ? ButtonSizes[props.size] : ButtonSizes["small"];
    const variant: string = props.variant ? "outline-" + props.variant : "outline-dark";

    return (
        <Button
            aria-label="Back"
            className={props.className ? props.className : undefined}
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
