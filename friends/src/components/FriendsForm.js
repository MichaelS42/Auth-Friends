import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const FriendsForm = props =>{
    const [value, setValue] = useState([]);

    const submit = e =>{
        e.preventDefault();
        axiosWithAuth()
        .post('/friends', value)
        .then(res=>{
            console.log('MS: FriendsForm: submit ', res);
            props.history.push('/FriendsList');
        })
    }

    const handleChanges = e => {
        setValue({
            ...value,
            [e.target.name]: e.target.value,
        })
    }

    return(
        <div>
            <form onSubmit={submit}>
                <input 
                type="text"
                name="name"
                value={value.name}
                onChange={handleChanges}
                placeholder="name"
                />
                <input 
                type="text"
                age="age"
                value={value.age}
                onChange={handleChanges}
                placeholder="age"
                />
                <input 
                type="text"
                email="email"
                value={value.nemail}
                onChange={handleChanges}
                placeholder="email"
                />
                <button>submit</button>
            </form>
        </div>
    )
};

export default FriendsForm;