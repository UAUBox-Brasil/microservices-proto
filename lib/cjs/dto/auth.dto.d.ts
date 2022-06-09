export declare class AuthenticateDto {
    token: string;
}
export declare class CreateAuthDto {
    name: string;
    email: string;
    telephone: string;
    document: string;
    documentType: "CPF" | "CNPJ";
    token: string;
}
export declare class AuthenticateResponse {
    id: string;
    uid: string;
    name: string;
    email: string;
    telephone: string;
    document: string;
    documentType: "CPF" | "CNPJ";
    createdAt: Date | string;
    updatedAt: Date | string;
}
declare const _default: {
    AuthenticateDto: typeof AuthenticateDto;
    CreateAuthDto: typeof CreateAuthDto;
    AuthenticateResponse: typeof AuthenticateResponse;
};
export default _default;
