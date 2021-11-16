export interface IErrors {
    formErrors: any,
}

export interface IFormComponentProps {
    routing: string;
    redirectPath?: string;
    errors: IErrors;
    children;
}
