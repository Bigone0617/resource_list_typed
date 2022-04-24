import {LIST_SUCCESS, LIST_FAIL, Resource_list} from "./ResourceListTypes";

// resource list 가져오기
export const getResourceList = ():Resource_list => {
    let resource_list = localStorage.getItem("resource_list");
    return resource_list ? JSON.parse(resource_list) : [];
}

// resource 추가하기
export const addResource = (data_type: string, value:string):any => {
    let list = getResourceList();
    let returnList;

    // list가 비었을 경우 체크
    if(list.length < 1){
        returnList = [{data_type, value}]
    }else{
        list.push({data_type, value});
        returnList = list;
    }

    localStorage.setItem("resource_list", JSON.stringify(returnList));

    return list;
}