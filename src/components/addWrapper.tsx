import React, { CSSProperties, useState } from "react";
import Button from "./button";
import InputUrl from "./inputUrl";

const btnWrapperStyle: CSSProperties = {
    width: "350px",
    height: "60px",
    display : "flex",
    gap: "10px",
    justifyContent: "center",
    alignItems: "center",
    margin: "0",
    boxShadow: "0px 3px #E9E9E9"
}

function AddWrapper (){
    const [isShow, setIsShow] = useState(false);
    const inputStyle:CSSProperties = {
        width: "300px",
        marginLeft: "20px",
        zIndex: "999",
        position: "absolute",
        top: "50px",
        height: "30px",
        borderRadius: "5px",
        outline: "0.5px solid #D2EBF8",
    }

    const toggle_url = ()  => {
        setIsShow((prev) => !prev);
    }

    const add_img = () => {
        alert("IMG 추가")
    }

    return (
        <div className="add_wrapper">
            <div className="btn_wrapper" style={btnWrapperStyle}>
                <Button children="URL 추가" onClick={toggle_url}></Button>
                <Button children="이미지 추가" onClick={add_img}></Button>
            </div>
            <InputUrl isShow={isShow} style={inputStyle}></InputUrl>
        </div>
    )
}

export default AddWrapper;