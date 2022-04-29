import { ActionType, resourceDataType } from "../action-types";

interface AddAction {
    type: ActionType.ADD
    payload: resourceDataType
}

interface DeleteAction {
    type: ActionType.DELETE
    payload: resourceDataType
}

interface UpdateAction {
    type: ActionType.UPDATE
    payload: resourceDataType
}

export type Action = AddAction | DeleteAction | UpdateAction;