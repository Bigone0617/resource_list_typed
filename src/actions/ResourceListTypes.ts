export const LIST_SUCCESS = "LIST_SUCCESS";
export const LIST_FAIL = "LIST_FAIL";
export const ADDURL = "ADDURL";

export type List = {
    data_type : string
    value : string
}

export type Resource_list = List[]

export interface resourceListFail {
    type: typeof LIST_FAIL
}

export interface resourceListSuccess {
    type: typeof LIST_SUCCESS
    payload: {
        resource_list: Resource_list
    }
}

export interface addResource {
    type: typeof ADDURL
    payload: {
        resource_list: Resource_list
    }
}

export type ResourceListType = resourceListFail | resourceListSuccess | addResource;