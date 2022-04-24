import {LIST_SUCCESS, LIST_FAIL, ADDURL,Resource_list, ResourceListType} from "../actions/ResourceListTypes";
import {getResourceList} from "../actions/ResourceListActions";

type InitialState = {
    success: boolean
    list?: Resource_list
}

const initialState: InitialState = {
    success: true,
    list: getResourceList()
}

const ResourceReducer = (state = initialState, action: ResourceListType): InitialState => {
    switch (action.type) {
        case LIST_SUCCESS:
            const {resource_list} = action.payload
            return {
                ...state,
                success: true,
                list: resource_list
            }
        case LIST_FAIL:   
            return {
                ...state,
                success: false
            } 
        case ADDURL:
            return {
                ...state,
                success: true,
                list : resource_list
            }
        default:
            return state
    }
}   

export default ResourceReducer;

