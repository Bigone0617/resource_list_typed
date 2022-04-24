// import components 
import AddWrapper from "./addWrapper";
import ListWrapper from "./listWrapper";

function LeftWrapper () {
    return (
        <div className="LeftWrapper">
            <AddWrapper></AddWrapper>
            <ListWrapper></ListWrapper>
        </div>
    )
}

export default LeftWrapper;