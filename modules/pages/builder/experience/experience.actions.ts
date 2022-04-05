import { IterativeExperienceSections } from "./experience-sections.enum";

export const SET_DESCRIPTION = '[EXPERIENCE] Change Description';
export const SET_FORM_FIELD = '[EXPERIENCE][SECTION] Change Field';
export const ADD_FORM = '[EXPERIENCE][SECTION] Add Form';
export const DELETE_FORM = '[EXPERIENCE][SECTION] Delete Form';
export const UPDATE_FORM = '[EXPERIENCE][SECTION] Update Form';
export const SAVE_FORM = '[EXPERIENCE][SECTION] Save Form';
export const MOVE_FORM_UP = '[EXPERIENCE][SECTION] Move Form Up';
export const MOVE_FORM_DOWN = '[EXPERIENCE][SECTION] Move Form Down';

export class SetDescription {
  readonly type = SET_DESCRIPTION;
  constructor(public payload: string) { }
}

export class SetFormField {
  readonly type = SET_FORM_FIELD;
  constructor(public payload: string, public field: string, public section: IterativeExperienceSections) { }
}

export class AddForm {
  readonly type = ADD_FORM;
  constructor(public section: IterativeExperienceSections) { }
}

export class DeleteForm {
  readonly type = DELETE_FORM;
  constructor(public payload: string, public section: IterativeExperienceSections) { }
}

export class UpdateForm {
  readonly type = UPDATE_FORM;
  constructor(public payload: string, public section: IterativeExperienceSections) { }
}

export class SaveForm {
  readonly type = SAVE_FORM;
  constructor(public section: IterativeExperienceSections) { }
}

export class MoveFormUp {
  readonly type = MOVE_FORM_UP;
  constructor(public payload: string, public section: IterativeExperienceSections) { }
}

export class MoveFormDown {
  readonly type = MOVE_FORM_DOWN;
  constructor(public payload: string, public section: IterativeExperienceSections) { }
}

export type EXPERIENCEactions =
  SetDescription |
  SetFormField |
  AddForm |
  DeleteForm |
  UpdateForm |
  SaveForm |
  MoveFormUp |
  MoveFormDown;