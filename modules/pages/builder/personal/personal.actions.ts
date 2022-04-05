export const SET_FORM_FIELD = '[PERSONAL] Change Field';

export class SetFormField {
  readonly type = SET_FORM_FIELD;
  constructor(public payload: string, public field: string) { }
}


export type PERSONALactions = SetFormField;
