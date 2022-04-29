// MutatingProgress ----------------------------------------------------------

// Show a "mutating" notification when props.executing switches from false to
// true, and remove it when props.executing switches from true to false.

// Show an "error" notification when props.error switches from null to
// non-null, and remove it when props.error switches from non-null to null.

// In both cases, the notification can be closed with a click.

// External Modules ----------------------------------------------------------

import React, {useEffect, useState} from "react";
import {toast} from "react-toastify";

// Internal Modules ----------------------------------------------------------

// Incoming Properties -------------------------------------------------------

export interface MutatingProgressProps {
    duration?: number;                  // Show duration in ms (0=forever) [default value]
    error?: Error | null;               // Error result (from mutate hook) [no notification]
    executing?: boolean;                // Executing flag (from mutate hook) [no notification]
    message: string;                    // Message while mutating in progress
}

// Component Details ---------------------------------------------------------

const MutatingProgress = (props: MutatingProgressProps) => {

    const [errorId, setErrorId] = useState<React.ReactText | null>(null);
    const [executingId, setExecutingId] = useState<React.ReactText | null>(null);

    // Handle Error Notification ---------------------------------------------
    useEffect(() => {
        if (props.error !== undefined) {
            if (props.error && (errorId === null)) {
                const theErrorId = toast.error(props.error.message, {
                    autoClose: false,
                });
                setErrorId(theErrorId);
            } else if (!props.error && (errorId !== null)) {
                toast.dismiss(errorId);
                setErrorId(null);
            }
        }
    }, [props.duration, props.error,  props.executing, props.message, errorId]);

    // Handle Executing Notification -----------------------------------------
    useEffect(() => {
        if (props.executing !== undefined) {
            if (props.executing && (executingId === null)) {
                const theExecutingId = toast.info(props.message, {
                    autoClose: false,
                });
                setExecutingId(theExecutingId);
            } else if (!props.executing && (executingId !== null)) {
                toast.dismiss(executingId);
                setExecutingId(null);
            }
        }
    }, [props.duration, props.error,  props.executing, props.message, executingId]);

    return (<div></div>);

}

export default MutatingProgress;
