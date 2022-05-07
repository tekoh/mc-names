export interface Skin {
    head: string
    full: string
    download: string
    render: string
    optifineCape: string
    mineconeCape: string
}

export class PreviousName {
    public username: string
    public date: number

    public getFormattedDate(): string
    public toString(format?: string): string
}

export class Account {
    public uuid: string
    public username: string
    public history: PreviousName[]

    public toPages(size?: number, format?: string): Map<number, string[]>
}

export function getUUID(username: string): Promise<void | string>

export function getSkin(username: string): Promise<Skin>

export function getNameHistory(username: string): Promise<void | Account>
