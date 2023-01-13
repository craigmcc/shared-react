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
    children: ReactNode;                // Children composing the callout message
    icon?: boolean;                     // Show title icon (if any)? [true]
    title?: string;                     // Callout title [none]
    variant?: CalloutVariant;           // Display style [info]
}

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
