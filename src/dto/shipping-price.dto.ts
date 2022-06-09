export interface AddressDTO {
    postalCode: string;
    city: string;
    state: string;
}

export interface ReturningShippingPriceDTO {
    ammount: Number;
}

export interface ShippingPriceDTO {
    id: string;
    state: string;
    price: Number;
    createdAt: Date;
}