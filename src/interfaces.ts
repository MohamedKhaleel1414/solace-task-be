export interface ILocalizedName {
  firstName: string;
  fatherName: string;
  grandfatherName: string;
  familyName: string;
}

export interface INationalID {
  idNumber: string;
  expiryDate: string;
}

export interface ICountries {
  id: string;
  name: string;
}

export interface INationalities {
  countryId: number;
  country: ICountries;
}

export interface IMaritalStatus {
  id: string;
  name: string;
}

export interface IUser {
  firstName: string;
  fatherName: string;
  grandfatherName: string;
  familyName: string;
  localizedName: ILocalizedName;
  nationalId: INationalID;
  nationalities: INationalities[];
  maritalStatus: IMaritalStatus;
  dependants: number;
}
