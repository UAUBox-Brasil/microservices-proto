export class AddressDTO {
    postalCode: string;
    city: string;
    state: string;
}

export class ReturningShippingPriceDTO {
    ammount: Number;
}

export class ShippingPriceDTO {
    id: string;
    state: string;
    price: Number;
    createdAt: Date;
}

export default { AddressDTO, ReturningShippingPriceDTO, ShippingPriceDTO }