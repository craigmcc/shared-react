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

