import { CSSProperties} from "react";
import { useSelector } from "react-redux";
import { RootReducerType } from "../Store";
import { List} from "../actions/ResourceListTypes";

import ResourceCard from "./resourceCard";

const listWrapperStyle:CSSProperties = {
    backgroundColor : "#F7F7F7",
    minHeight: "100vh",
    marginTop: "2px",
    textAlign: "center"
}

function ListWrapper () {
    const resourceReducer = useSelector((state:RootReducerType ) => state.ResourceReducer);
    let list = resourceReducer.list;

    return (
        <div className="list_wrapper" style={listWrapperStyle}>
            {list?.map((data:List) => (
                <ResourceCard data_type={data.data_type} value={data.value}/>
            ))}
        </div>
    );
};

export default ListWrapper;