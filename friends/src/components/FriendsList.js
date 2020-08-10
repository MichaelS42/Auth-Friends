import React from 'react';
import { axiosWithAuth } from "../utils/axiosWithAuth";

class FriendsList extends React.Component {
    state = {
        isLoading: true,
        friends: []
    };
    

    componentDidMount() {
        this.getFriends();
    }


    getFriends = () => {
        axiosWithAuth()
        .get("/friends")
        .then((res) => {
            console.log("ms: succesful get: res ", res.data)
            this.setState({
                isLoading: false,
                friends: res.data
            });
        })
        .catch((err) => console.error("ms: login failed: err: ", err.message))
    };

    // getData = () => {
    //     axiosWithAuth()
    //     .get("/friends")
    //     .then((res) => {
    //         console.log("ms: getData yes: res: ", res);
    //         this.setState({
    //             friends: res.data.data
    //         })
    //     })
    //     .catch((err) => console.error("ms: getData no: err ", err.message));
    // }

    render() {
        // const friendsList = this.state.friends;
        // console.log(friendsList);
        return (
            
            <main className="friends-list">
                {this.state?.friends?.map((friend) => (
                    <div key={friend.id}>
                    <h4>{friend.name}</h4>
                    <h4>{friend.age}</h4>
                    <h4>{friend.email}</h4>
                    </div>


                ))}
            </main>
            
        );
    }
};

export default FriendsList;