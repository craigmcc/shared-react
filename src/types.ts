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
 * Display styles for AddButton components.
 */
export type AddButtonVariant =
    "primary" | "secondary" | "success" | "danger" | "warning" |
    "info" | "light" | "dark" | "muted";

/**
 * Display styles for BackButton components.
 */
export type BackButtonVariant =
    "primary" | "secondary" | "success" | "danger" | "warning" |
    "info" | "light" | "dark" | "muted";

/**
 * Display styles for Callout components.
 */
export type CalloutVariant =
    "primary" | "secondary" | "success" | "danger" | "warning" |
    "info" | "light" | "dark";

/**
 * Display styles for EditButton components.
 */
export type EditButtonVariant =
    "primary" | "secondary" | "success" | "danger" | "warning" |
    "info" | "light" | "dark" | "muted";

