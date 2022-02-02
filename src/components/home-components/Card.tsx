import React, { useState } from 'react';
import { Post } from "../../models/card";
import "./Card.scss"

interface Props {
    post: Post;
}


export const Card: React.FC<Props> = (props) => {
    const { post } = props;
    const [isOpen, setIsOpen] = useState(false);
  

    const openCard = () => setIsOpen(!isOpen);

    return (
        <div>
            <div className={`card ${isOpen && "is-open"}`} onClick={openCard}>
                <h3 className='card-title'>{post.title}</h3>
                <p className='card-body'>{post.body}</p>
                {
                isOpen? 
                <>
                    <p>User number: {post.userId}</p>
                    <p>Post number: {post.id}</p>
                </>
                : null }
            </div>
        </div>
    )
}

export default Card;
