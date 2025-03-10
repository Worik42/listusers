export type Users = User[];

export type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  address: Address;
  company: Company;
};

export type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geolocation;
};

export type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};

export type Geolocation = {
  lat: string;
  lng: string;
};

export type UserLocal = User & {isFavorite: boolean};
