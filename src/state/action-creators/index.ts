import { ActionType } from "../action-types";
import { Dispatch } from "redux";
import { Action } from "../actions";

export const addResource = (type: string, url: string, idx:number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.ADD,
            payload: {type, url, idx}
        })
    }
}

export const deleteResource = (type: string, url: string, idx:number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.DELETE,
            payload: {type, url, idx}
        })
    }
}

export const updateResource = (type: string, url: string, idx:number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.UPDATE,
            payload: {type, url, idx}
        })
    }
}