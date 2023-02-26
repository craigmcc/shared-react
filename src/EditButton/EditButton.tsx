// EditButton ----------------------------------------------------------------

// Generic button using an "edit" icon as its content.

// External Modules ----------------------------------------------------------

import React from "react";
import Button from "react-bootstrap/Button";
import {PencilFill} from "react-bootstrap-icons";

// Internal Modules ----------------------------------------------------------

import {ButtonSize, ButtonSizes, ButtonVariant, HandleAction} from "../types";

// Incoming Properties -------------------------------------------------------

export interface EditButtonProps {

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
    handleEdit?: HandleAction;

    /**
     * Display size of this button.
     *
     * @default small
     */
    size?: ButtonSize;

    /**
     * A data-testid value for this component instance.
     *
     * @default edit
     */
    testId?: string;

    /**
     * Base display style for this button.
     *
     * @default dark
     */
    variant?: ButtonVariant;

}

/**
 * Generic button using an "Edit" icon as its content.
 *
 * @param props
 * @constructor
 */
const EditButton = (props: EditButtonProps) => {

    let size: number | undefined = props.size ? ButtonSizes[props.size] : ButtonSizes["small"];
    const variant: string = props.variant ? "outline-" + props.variant : "outline-dark";

    return (
        <Button
            aria-label="Edit"
            className={props.className ? props.className : undefined}
            data-testid={props.testId ? props.testId : "edit"}
            disabled={(props.disabled !== undefined) ? props.disabled : undefined}
            onClick={props.handleEdit ? props.handleEdit : undefined}
            title="Edit"
            variant={variant}
        >
            <PencilFill
                size={size}
            />
        </Button>
    )

}

export default EditButton;
