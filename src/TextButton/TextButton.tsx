// TextButton ----------------------------------------------------------------

// Generic button using a specified text label.

// External Modules ----------------------------------------------------------

import React from "react";
import Button from "react-bootstrap/Button";

// Internal Modules ----------------------------------------------------------

import {ButtonSize, ButtonSizes, ButtonVariant, HandleAction} from "../types";

// Incoming Properties -------------------------------------------------------

export interface TextButtonProps {

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
    handleText?: HandleAction;

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
     * Label text for this button.
     */
    text: string;

    /**
     * Base display style for this button.
     *
     * @default dark
     */
    variant?: ButtonVariant;

}

// Component Details ---------------------------------------------------------

/**
 * Generic button using a specified text label.
 *
 * @param props
 * @constructor
 */
const TextButton = (props: TextButtonProps) => {

    let size: "sm" | "lg" | undefined = "sm";
    if (props.size === "small") {
        size = "sm"
    } else if (props.size === "medium") {
        size = undefined;
    } else if (props.size === "large") {
        size = "lg";
    } else {
        size = "sm";
    }
    const variant: string = props.variant ? "outline-" + props.variant : "outline-dark";

    return (
        <Button
            aria-label={props.text}
            className={props.className ? props.className : undefined}
            data-testid={props.testId ? props.testId : "text"}
            disabled={(props.disabled !== undefined) ? props.disabled : undefined}
            onClick={props.handleText ? props.handleText : undefined}
            size={size}
            title={props.text}
            variant={variant}
        >
            {props.text}
        </Button>
    )

}

export default TextButton;
