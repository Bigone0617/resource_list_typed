import React, { CSSProperties, useState } from "react";
import { useDispatch } from "react-redux";
import { addResource } from "../actions/ResourceListActions";

type InputProps = {
    isShow : boolean,
    style : CSSProperties,
}

const defaultInputStyle:CSSProperties = {
    width: "400px"
}

const InputUrl: React.FC<InputProps> = (props) => {
    const {isShow, style} = props;
    const [url, setUrl] = useState("https://...");
    const dispatch = useDispatch();

    const keyUpHandler = (e:React.KeyboardEvent<HTMLInputElement>, url:string) => {
        // 엔터시 이벤트
        if(e.keyCode === 13){
            // http, https 형식 체크 후 저장
            if(url.slice(0,8).includes("http://") || url.slice(0,8).includes("https://")){
                dispatch(addResource("url", url));
            }else{
                alert("URL 형식이 맞지 않습니다. ex) http://, https://");
            }
        }
    }
    

    return (
        <div className="input_wrapper">
            {
                isShow ? (
                    <input style={style ? style : defaultInputStyle} value={url} onKeyUp={(e) => keyUpHandler(e, url)} onChange={(e) => setUrl(e.target.value)}>
                    </input>
                ) :(
                    <></>
                ) 
            }
        </div>
    )
}

export default InputUrl;