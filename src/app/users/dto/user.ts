export interface IUser {
    id: number;
    firstName: string;
    lastName: string;
    address: string;
    contactNo: string;
    emailAddress: string
    isActive: Active
}

type Active = 'Y' | 'N'
