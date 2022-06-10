export class AddressDto {
  token?: string;
  id: string;
}

export class CreateAddressDto {
  userId: string;
  postalCode: string;
  state: string;
  city: string;
  district: string;
  street: string;
  number: string;
  complement?: string;
  mainAddress: boolean;
  reference?: string;
}

export class UpdateAddressDto {
  id: string;
  postalCode?: string;
  state?: string;
  city?: string;
  district?: string;
  street?: string;
  number?: string;
  complement?: string;
  mainAddress?: boolean;
  reference?: string;
  updatedAt?: string;
}

export class ResponseAddressDto {
  id: string;
  userId: string;
  postalCode: string;
  state: string;
  city: string;
  district: string;
  street: string;
  number: string;
  complement?: string;
  mainAddress: boolean;
  reference?: string;
  createdAt: Date;
  updatedAt: Date;
}

export default {
  AddressDto,
  CreateAddressDto,
  UpdateAddressDto,
  ResponseAddressDto,
};
