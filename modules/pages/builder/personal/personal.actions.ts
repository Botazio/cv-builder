export const SET_NAME = '[PERSONAL] Change Name';
export const SET_SURNAME = '[PERSONAL] Change Surname';
export const SET_PROFESSION = '[PERSONAL] Change Profession';
export const SET_MOBILE = '[PERSONAL] Change Mobile';
export const SET_EMAIL = '[PERSONAL] Change Email';
export const SET_ADDRESS = '[PERSONAL] Change Address';
export const SET_POSTALCODE = '[PERSONAL] Change Postal Code';
export const SET_CITY = '[PERSONAL] Change City';
export const SET_LINKEDIN = '[PERSONAL] Change Linkedin';
export const SET_WEBSITE = '[PERSONAL] Change Website';
export const SET_LICENSE = '[PERSONAL] Change License';
export const SET_NATIONALITY = '[PERSONAL] Change Nationality';

export class SetName {
  readonly type = SET_NAME;
  constructor(public payload: string) { }
}

export class SetSurname {
  readonly type = SET_SURNAME;
  constructor(public payload: string) { }
}

export class SetProfession {
  readonly type = SET_PROFESSION;
  constructor(public payload: string) { }
}

export class SetMobile {
  readonly type = SET_MOBILE;
  constructor(public payload: string) { }
}

export class SetEmail {
  readonly type = SET_EMAIL;
  constructor(public payload: string) { }
}

export class SetAddress {
  readonly type = SET_ADDRESS;
  constructor(public payload: string) { }
}

export class SetPostalCode {
  readonly type = SET_POSTALCODE;
  constructor(public payload: string) { }
}

export class SetCity {
  readonly type = SET_CITY;
  constructor(public payload: string) { }
}

export class SetLinkedin {
  readonly type = SET_LINKEDIN;
  constructor(public payload: string) { }
}

export class SetWebsite {
  readonly type = SET_WEBSITE;
  constructor(public payload: string) { }
}

export class SetLicense {
  readonly type = SET_LICENSE;
  constructor(public payload: string) { }
}

export class SetNationality {
  readonly type = SET_NATIONALITY;
  constructor(public payload: string) { }
}

export type PERSONALactions = SetName | SetSurname |
  SetProfession | SetMobile | SetEmail | SetAddress |
  SetPostalCode | SetCity | SetLinkedin | SetWebsite |
  SetLicense | SetNationality;
