// Callout -------------------------------------------------------------------

// Text callout box with several variants useful in documentation.

// External Modules ----------------------------------------------------------

import React, {ReactNode} from "react";
import Alert from "react-bootstrap/Alert";
import {
    CheckSquareFill,
    DashSquareFill,
    ExclamationOctagonFill,
    ExclamationSquareFill,
    InfoSquareFill,
    PatchCheckFill,
} from "react-bootstrap-icons";

// Internal Modules ----------------------------------------------------------

import {CalloutVariant} from "../types";

// Incoming Properties -------------------------------------------------------

export interface CalloutProps {

    /**
     * Child components that are rendered inside the Callout.
     */
    children: ReactNode;                // Children composing the callout message

    /**
     * Show the title icon?
     *
     * @default false
     */
    icon?: boolean;                     // Show title icon (if any)? [true]

    /**
     * The title for this callout.
     *
     * @default None
     */
    title?: string;                     // Callout title [none]

    /**
     * Base display style for this callout.
     *
     * @default info
     */
    variant?: CalloutVariant;           // Display style [info]

}

/**
 * Text callout box, with several variants, useful in documentation.
 * @param props
 * @constructor
 */
const Callout = (props: CalloutProps) => {

    const className = "me-2 alert-heading";
    const variant: string = props.variant ? props.variant : "info";

    return (
        <Alert
            variant={variant}
        >
            {props.title ? (
                <Alert.Heading>
                    <>
                        {variant === "primary" ? (
                            <CheckSquareFill className={className}/>
                        ) : null }
                        {variant === "secondary" ? (
                            <DashSquareFill className={className}/>
                        ) : null }
                        {variant === "success" ? (
                            <PatchCheckFill className={className}/>
                        ) : null }
                        {variant === "danger" ? (
                            <ExclamationOctagonFill className={className}/>
                        ) : null }
                        {variant === "warning" ? (
                            <ExclamationSquareFill className={className}/>
                        ) : null }
                        {variant === "info" ? (
                            <InfoSquareFill className={className}/>
                        ) : null }
                        {props.title}
                    </>
                </Alert.Heading>
            ) : null }
            {props.children}
        </Alert>
    )

}

export default Callout;
