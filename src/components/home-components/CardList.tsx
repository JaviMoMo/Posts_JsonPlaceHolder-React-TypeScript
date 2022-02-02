import React, { useState } from 'react';
import { Card } from "./Card";
import { Post, UpdateCard } from "../../models/card";
import "./CardList.scss";
import EditCardForm from '../modals-components/EditCardForm';
import Login from '../modals-components/Login';

export const CardList = () => {
    const [cardList, setCardList] = React.useState<Post[]>([]);
    const [page, setPage] = React.useState(1);
    const [editForm, setEditForm] = React.useState<Post>();
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [disabledButtons, setDisabledButtons] = React.useState(true);
    const [isModalOpen2, setIsModalOpen2] = React.useState(false);
    
    const porpage = 10;
    const max = cardList.length / porpage;
    const min = 1;


    const URL = `https://jsonplaceholder.typicode.com/posts`;

    React.useEffect(() => {
        (async () => {
            let data = await fetch(URL).then(
                (res) => res.json()
            );
            setCardList(data);
        })();
    }, []);
    
    

    //Pagination functions:
    const increment = () => {
        if (page <= max) {
        setPage (page + 1);
        }
    }

    const decrement = () => {
        if (page > min) {
        setPage (page - 1);
        }
    }

    //CRUD functions:

    const deletCard = (title: string) => {
        const filter = cardList.filter(item => item.title !== title)
        setCardList(filter)
    }

    const editCard = (e:Post) => {
        setEditForm(e)
    }
   
    const updateCard = (id: number, updateCard: Post) => {
        const update = cardList.map(item => item.id === id ? updateCard : item)
        setCardList(update);
    }

    return (
        <div className='cardList-contain'>
            <button className='cardList-loginButton' type='button' onClick={() => {setIsModalOpen(true)}}>Login</button>
            <p>{page} / {Math.ceil(max)}</p>
            <div className='cardList-buttons-contain'>
                <button onClick={() => {decrement()}}>🡰 PREV</button>
                <button onClick={() => {increment()}}>NEXT 🡲</button>
            </div>
            <div className='cardList-cards-contain'>
                {cardList.slice (
                    (page - 1) * porpage,
                    (page - 1) * porpage + porpage
                )
                .map((post) => (
                        <div key={post.id} className='card-container'>
                            <Card post={post} />
                            {!disabledButtons ? 
                            <div className='card-container-buttons'>
                            <button className='card-container-button' onClick={() => {deletCard(post.title)}}>Delete 🗑️</button>
                            <button className='card-container-button' onClick={() => {setIsModalOpen2(true); editCard(post)}}>Edit ✏️</button>
                            </div>
                            : null}
                        </div>
                ))}
            </div>
            <div>
                {isModalOpen && <Login setDisabled={setDisabledButtons} setOpenModal={setIsModalOpen}/>}
            </div>
            <div>
            
                {isModalOpen2 && <EditCardForm updateCard={updateCard} editForm={editForm!} onChange={editCard} setOpenModal2={setIsModalOpen2} />}
                
            </div>
        </div>
    )
}

