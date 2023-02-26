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
    handleForward?: HandleAction;

    /**
     * Display size of this button.
     *
     * @default small
     */
    size?: ButtonSize;

    /**
     * A data-testid value for this component instance.
     *
     * @default forward
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
