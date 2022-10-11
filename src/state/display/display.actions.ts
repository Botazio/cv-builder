import { SnackBarDisplayState } from "./display-utils";

export const SET_DISPLAY_SNACKBAR = '[DISPLAY] Display SnackBar';
export const RESET_DISPLAY_SNACKBAR = '[DISPLAY] Reset Display SnackBar';
export const SET_DISPLAY_REQUIRED_FIELDS_ERROR = '[DISPLAY] Set Display Required Fields Error';
export const SET_DISPLAY_SAMPLE_DATA_IN_TEMPLATES = '[DISPLAY] Set Display Sample Data In Templates';

export class SetDisplaySnackBar {
  readonly type = SET_DISPLAY_SNACKBAR;
  constructor(public payload: SnackBarDisplayState) { }
}

export class ResetDisplaySnackBar {
  readonly type = RESET_DISPLAY_SNACKBAR;
}

export class SetDisplayRequiredFieldsError {
  readonly type = SET_DISPLAY_REQUIRED_FIELDS_ERROR;
  constructor(public payload: boolean) { }
}

export class SetDisplaySampleDataInTemplates {
  readonly type = SET_DISPLAY_SAMPLE_DATA_IN_TEMPLATES;
  constructor(public payload: boolean) { }
}


export type DISPLAYactions =
  SetDisplaySnackBar |
  ResetDisplaySnackBar |
  SetDisplayRequiredFieldsError |
  SetDisplaySampleDataInTemplates;
