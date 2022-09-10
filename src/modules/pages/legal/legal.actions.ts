export const SET_CONDITIONS = '[LEGAL] Accept Conditions';

export class SetConditions {
  readonly type = SET_CONDITIONS;
  constructor(public payload: boolean) { }
}


export type LEGALactions = SetConditions;
