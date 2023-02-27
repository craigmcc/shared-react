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

    /**
     * Additional CSS classes (space separated).
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
    handleAdd?: HandleAction;

    /**
     * Display size for this button.
     *
     * @default small
     */
    size?: ButtonSize;

    /**
     * A data-testid value for this component instance.
     *
     * @default add
     */
    testId?: string;

    /**
     * Base display style for this button.
     *
     * @default dark
     */
    variant?: ButtonVariant;            // Display style [dark]
}

// Component Details ---------------------------------------------------------

/**
 * Generic button using an "Add" icon as its content.
 *
 * @param props
 * @constructor
 */
const AddButton = (props: AddButtonProps) => {

    let size: number | undefined = props.size ? ButtonSizes[props.size] : ButtonSizes["small"];
    const variant: string = props.variant ? "outline-" + props.variant : "outline-dark";

    return (
        <Button
            aria-label="Add"
            className={props.className ? props.className : undefined}
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
