import { TypedIcon } from "typed-design-system";

import React, { CSSProperties } from "react";


type ResourceCardProps = {
    data_type : string;
    value : string;
}

const resourceCardWrapperStyle:CSSProperties = {
    backgroundColor: "white",
    width: "300px",
    height: "80px",
    margin: "0 auto",
    borderRadius: "5px",
    marginTop: "10px"
}

const resourceCardStyle:CSSProperties = {
    wordBreak: "break-word",
    textOverflow:"ellipsis",
    WebkitLineClamp: 2,
    height: "70%",
    width: "100%",
    textAlign: "start",
    marginLeft: "5px",
}

const btnWrapperStyle:CSSProperties = {
    float: "right",

}

const iconStyle:CSSProperties = {
    marginRight: "10px"
}

const ResourceCard : React.FC<ResourceCardProps> = (props) => {
    return(
        <div className="resource_card_wrapper" style={resourceCardWrapperStyle}>
            <div className="resource_card" style={resourceCardStyle}>
                {props.value}
            </div>
            <div className="btn_wrapper" style={btnWrapperStyle}>
                <TypedIcon icon="edit_small" color="black" style={iconStyle}/>
                <TypedIcon icon="trash_small" color="black" style={iconStyle}/>
            </div>
        </div>
    )
}

export default ResourceCard;