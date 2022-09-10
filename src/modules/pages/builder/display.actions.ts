export const SET_DISPLAY = '[DISPLAY] Display Component';

export class SetDisplay {
  readonly type = SET_DISPLAY;
  constructor(public payload: boolean, public field: string) { }
}


export type DISPLAYactions = SetDisplay;
