import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const FriendsForm = (props) => {
    const [friend, setFriend] = useState({
        id: Date.now(),
        name: "",
        age: "",
        email: "",
    })
        const handleChanges = e => {
            setFriend({
                ...friend,
                [e.target.name]: e.target.value,
            })
        }

    const submit = e =>{
        e.preventDefault();
        axiosWithAuth()
        .post('/friends', friend)
        .then(res => console.log(res.data))
        .catch(err => console.log("err", err));
        setTimeout(() => { props.history.push('/protected') }, 2000)
    }

    return(
        <div>
            <form onSubmit={submit}>
                <input 
                type="text"
                name="name"
                value={friend.name}
                onChange={handleChanges}
                placeholder="name"
                >
                    </input>
                <input 
                type="text"
                name="age"
                value={friend.age}
                onChange={handleChanges}
                placeholder="age"
                >
                    </input>
                <input 
                type="text"
                name="email"
                value={friend.email}
                onChange={handleChanges}
                placeholder="email"
                >
                    </input>
                <button>submit</button>
            </form>
        </div>
    )
};

export default FriendsForm;