interface IUser {
    firstName: String;
    lastName: String;
    email: String;
    avatarUrl: String;
    
    accounts: [
        { 
            kind: "internal";
            username: String;
            password: String;
        },
        {
            kind: "google";
            id: String;
        },
        {
            kind: "o365";
            id: String;
        }
    ];
    
    isActive: Boolean;
}

export class User implements IUser {
    private _firstName: string;
    private _lastName: string;
    private _email: string;
    private _avatarUrl: string;
    private _accounts: any; // not working!!!
    private _isActive: boolean;

    constructor(firstName: string, lastName: string, email: string, avatarUrl: string, accounts: object[]) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._email = email;
        this._avatarUrl = avatarUrl;
        this._accounts = accounts;
        this._isActive = true;
    }

    get isActive(): boolean {
        return this._isActive;
    }

    set isActive(value: boolean) {
        this._isActive = value;
    }

    get firstName(): string {
        return this._firstName;
    }
    
    set firstName(value: string) {
        this._firstName = value;
    }

    get lastName(): string {
        return this._lastName;
    }

    set lastName(value: string) {
        this._lastName = value;
    }

    get avatarUrl(): string {
        return this._avatarUrl;
    }

    set avatarUrl(value: string) {
        this._avatarUrl = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    clone() {
        return new User(this._firstName, this._lastName, this._email, this._avatarUrl, this._accounts)
    }
}
