// types ---------------------------------------------------------------------

// Common data types shared by various components.

// External Modules ----------------------------------------------------------

import React from "react";

// Generic Data Handlers -----------------------------------------------------

export type HandleAction = () => void;
export type HandleBoolean = (newBoolean: boolean) => void;
export type HandleValue = (newValue: string) => void;

// HTML Event Handlers -------------------------------------------------------

export type OnBlur = (event: React.FocusEvent<HTMLElement>) => void;
export type OnChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => void;
export type OnChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => void;
export type OnChangeTextArea = (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
export type OnClick = (event: React.MouseEvent<HTMLElement>) => void;
export type OnFocus = (event: React.FocusEvent<HTMLElement>) => void;
export type OnKeyDown = (event: React.KeyboardEvent<HTMLElement>) => void;

// Component Detail Objects --------------------------------------------------

export type SelectOption = {
    label: string;                      // Label displayed for this option
    value: string;                      // Value to return when option selected
}

// Component Detail Types ----------------------------------------------------

/**
 * Button size labels for various Button components
 */
export type ButtonSize =
    "small" | "medium" | "large";

/**
 * Mapping of button size labels to corresponding length/width.
 */
export const ButtonSizes = {
    "small": 16,
    "medium": 32,
    "large": 48,
}

/**
 * Variant styles for various Button components (based on Bootstrap variants)
 */
export type ButtonVariant =
    "primary" | "secondary" | "success" | "danger" | "warning" |
    "info" | "light" | "dark" | "muted";


/**
 * Display styles for Callout components.
 */
export type CalloutVariant =
    "primary" | "secondary" | "success" | "danger" | "warning" |
    "info" | "light" | "dark";

