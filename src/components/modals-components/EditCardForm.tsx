import React, { useState } from 'react';
import { Post, UpdateCard } from '../../models/card';
import "./EditCardForm.scss";

interface Props{
    setOpenModal2: (value: boolean) => void;
    onChange: (value: Post ) => void;
    editForm: Post;
    updateCard: (id: number, updateCard: Post) => void;
    
}


export const EditCardForm: React.FC<Props> = ({editForm, onChange, setOpenModal2, updateCard}) => {

    const INITIAL_STATE = {
        userId: editForm.userId,
        id: editForm.id,
        title: editForm.title,
        body: editForm.body
    };
    const [state, setState] = useState(INITIAL_STATE);
    
    const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setOpenModal2(false);
        onChange(state);
        updateCard(editForm.id, state);
    };

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setState({...state, [name]: value})
    };

    const handleTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setState({...state, [name]: value})
    };

    return (
        <div className='form-edit-background'>
            <form className='form-edit-contain' onSubmit={submitForm}>
                <button className='form-edit-closeButton' onClick={() => {
                setOpenModal2(false);
                }}>x</button>
                <p className='form-edit-title'>Edit</p>
                <fieldset>
                    <label>
                        <p>Title</p>
                        <input className='input-title' defaultValue={state.title} type="text" name='title' placeholder='Title' onChange={handleInput} />
                    </label>
                    <label>
                        <p>Body</p>
                        <textarea  className='input-body' defaultValue={state.body} name="body" placeholder='Body' onChange={handleTextArea} />
                    </label>
                    <button type='submit'>Edit</button>
                </fieldset>
            </form>
        </div>
    )
}

export default EditCardForm
