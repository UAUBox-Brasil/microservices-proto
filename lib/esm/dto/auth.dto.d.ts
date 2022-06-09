export interface AuthenticateDto {
    token: string;
}
export interface CreateAuthDto {
    name: string;
    email: string;
    telephone: string;
    document: string;
    documentType: "CPF" | "CNPJ";
    token: string;
}
export interface AuthenticateResponse {
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
