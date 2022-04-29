import { CSSProperties} from "react";
import {  useSelector } from "react-redux";
import { State } from "../state";
// import ResourceCard from "./resourceCard";

const listWrapperStyle:CSSProperties = {
    backgroundColor : "#F7F7F7",
    minHeight: "100vh",
    marginTop: "2px",
    textAlign: "center"
}

function ListWrapper () {

    const list = useSelector((state: State) => state.resource);
    console.log(list);
    return (
        <div className="list_wrapper" style={listWrapperStyle}>
            a
        </div>
    );
};

export default ListWrapper;