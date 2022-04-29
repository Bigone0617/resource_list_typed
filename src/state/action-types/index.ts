export enum ActionType{
    ADD = "add",
    DELETE = "delete",
    UPDATE = "update"
}

export type resourceDataType = {
    type : string,
    url : string,
    idx : number
}