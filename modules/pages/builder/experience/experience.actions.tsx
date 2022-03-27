export const SET_DESCRIPTION = '[EXPERIENCE] Change Description';

export class SetDescription {
  readonly type = SET_DESCRIPTION;
  constructor(public payload: string) { }
}

export type EXPERIENCEactions = SetDescription;
