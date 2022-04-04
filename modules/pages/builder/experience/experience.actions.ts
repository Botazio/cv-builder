import { IterativeExperienceSections } from "./experience-sections.enum";

export const SET_DESCRIPTION = '[EXPERIENCE] Change Description';
export const SET_FORM_TITLE = '[EXPERIENCE][SECTION] Change Title';
export const SET_FORM_LOCATION = '[EXPERIENCE][SECTION] Change Location';
export const SET_FORM_PLACE = '[EXPERIENCE][SECTION] Change Place';
export const SET_FORM_START_DATE = '[EXPERIENCE][SECTION] Change Start Date';
export const SET_FORM_END_DATE = '[EXPERIENCE][SECTION] Change End Date';
export const SET_FORM_DESCRIPTION = '[EXPERIENCE][SECTION] Change Description';
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

export class SetFormTitle {
  readonly type = SET_FORM_TITLE;
  constructor(public payload: string, public section: IterativeExperienceSections) { }
}

export class SetFormLocation {
  readonly type = SET_FORM_LOCATION;
  constructor(public payload: string, public section: IterativeExperienceSections) { }
}

export class SetFormPlace {
  readonly type = SET_FORM_PLACE;
  constructor(public payload: string, public section: IterativeExperienceSections) { }
}

export class SetFormStartDate {
  readonly type = SET_FORM_START_DATE;
  constructor(public payload: string, public section: IterativeExperienceSections) { }
}

export class SetFormEndDate {
  readonly type = SET_FORM_END_DATE;
  constructor(public payload: string, public section: IterativeExperienceSections) { }
}

export class SetFormDescription {
  readonly type = SET_FORM_DESCRIPTION;
  constructor(public payload: string, public section: IterativeExperienceSections) { }
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
  SetFormTitle |
  SetFormLocation |
  SetFormPlace |
  SetFormStartDate |
  SetFormEndDate |
  SetFormDescription |
  AddForm |
  DeleteForm |
  UpdateForm |
  SaveForm |
  MoveFormUp |
  MoveFormDown;