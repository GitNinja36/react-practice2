import { useState } from "react";

export default function LikeButton(){
    const [isLiked, setIsLiked] = useState(false);
    const [count, setCount] = useState(0);

    function toggleLike(){
        setIsLiked(!isLiked);
        setCount(count+1);
    };

    let likeStyle = {color: "red"};

    return(
        <div>
            <p onClick={toggleLike}>
                {isLiked ? ( 
                    <i className="fa-solid fa-heart" style={likeStyle} ></i>
                    ) : ( 
                    <i className="fa-regular fa-heart"></i>
                )} 
            </p>
            <p> like : {count}</p>
        </div>
    );
}
