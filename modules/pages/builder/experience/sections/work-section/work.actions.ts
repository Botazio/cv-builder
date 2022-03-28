export const SET_TITLE = '[EXPERIENCE][WORK] Change Title';
export const SET_LOCATION = '[EXPERIENCE][WORK] Change Location';
export const SET_PLACE = '[EXPERIENCE][WORK] Change Place';
export const SET_START_DATE = '[EXPERIENCE][WORK] Change Start Date';
export const SET_END_DATE = '[EXPERIENCE][WORK] Change End Date';
export const SET_DESCRIPTION = '[EXPERIENCE][WORK] Change Description';

export class SetTitle {
  readonly type = SET_TITLE;
  constructor(public payload: string) { }
}

export class SetLocation {
  readonly type = SET_LOCATION;
  constructor(public payload: string) { }
}

export class SetPlace {
  readonly type = SET_PLACE;
  constructor(public payload: string) { }
}

export class SetStartDate {
  readonly type = SET_START_DATE;
  constructor(public payload: string) { }
}

export class SetEndDate {
  readonly type = SET_END_DATE;
  constructor(public payload: string) { }
}

export class SetDescription {
  readonly type = SET_DESCRIPTION;
  constructor(public payload: string) { }
}

export type WORKactions = SetTitle | SetLocation | SetPlace | SetStartDate | SetEndDate | SetDescription;
