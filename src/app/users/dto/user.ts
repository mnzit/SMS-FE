export interface IUser {
    id?: number;
    firstName?: string;
    lastName?: string;
    address?: string;
    contactNo?: string;
    emailAddress?: string
    isActive?: Active
    role?: number
    course?: number
}

type Active = 'Y' | 'N'
