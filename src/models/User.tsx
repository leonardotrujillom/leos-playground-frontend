interface IUser {
    id: number;
    username: string;
    emailAddress: string;
    displayName: string;
    avatarUrl: string;
    applicationRoles: string[];

    isAdmin: boolean;
    isActive: boolean;
}

export class User implements IUser {
    private _applicationRoles: string[];
    private _displayName: string;
    private _emailAddress: string;
    private _id: number;
    private _isAdmin: boolean;
    private _username: string;
    private _avatarUrl: string;
    private _isActive: boolean;

    constructor(id: number, username: string, displayName: string, emailAddress: string, applicationRoles: string[]) {
        this._id = id;
        this._username = username;
        this._displayName = displayName;
        this._emailAddress = emailAddress;
        this._applicationRoles = applicationRoles;
        this._avatarUrl = `${process.env.PUBLIC_URL}/images/myAvatar_transparent.png`;

        this._isAdmin = this.applicationRoles.includes("bo-administrator");
        this._isActive = true;
    }

    get applicationRoles(): string[] {
        return this._applicationRoles;
    }

    get isActive(): boolean {
        return this._isActive;
    }

    set isActive(value: boolean) {
        this._isActive = value;
    }

    set applicationRoles(value: string[]) {
        this._applicationRoles = value;
    }

    get displayName(): string {
        return this._displayName;
    }


    get avatarUrl(): string {
        return this._avatarUrl;
    }

    set avatarUrl(value: string) {
        this._avatarUrl = value;
    }

    set displayName(value: string) {
        this._displayName = value;
    }

    get emailAddress(): string {
        return this._emailAddress;
    }

    set emailAddress(value: string) {
        this._emailAddress = value;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get username(): string {
        return this._username;
    }

    set username(value: string) {
        this._username = value;
    }

    get isAdmin(): boolean {
        return this._isAdmin;
    }

    set isAdmin(value: boolean) {
        this._isAdmin = value;
    }

    clone() {
        return new User(this.id, this.username, this.displayName, this.emailAddress, this.applicationRoles)
    }
}