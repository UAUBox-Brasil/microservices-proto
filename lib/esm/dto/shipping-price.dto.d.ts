export declare class AddressDTO {
    postalCode: string;
    city: string;
    state: string;
}
export declare class ReturningShippingPriceDTO {
    ammount: Number;
}
export declare class ShippingPriceDTO {
    id: string;
    state: string;
    price: Number;
    createdAt: Date;
}
declare const _default: {
    AddressDTO: typeof AddressDTO;
    ReturningShippingPriceDTO: typeof ReturningShippingPriceDTO;
    ShippingPriceDTO: typeof ShippingPriceDTO;
};
export default _default;
