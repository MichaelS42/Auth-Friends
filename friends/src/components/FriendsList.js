import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from "../utils/axiosWithAuth";
import  FriendsCard  from "./FriendsCard";

const FriendsList = () => {
    const [friends, setFriends] = useState([])
    useEffect(() => {
        axiosWithAuth()
        .get("/friends")
        .then(res => setFriends(res.data))
        .catch(err => console.log(err))
    }, []);
    



// class FriendsList extends React.Component {
//     state = {
//         isLoading: true,
//         friends: []
//     };
    

//     componentDidMount() {
//         this.getFriends();
//     }


//     getFriends = () => {
//         axiosWithAuth()
//         .get("/friends")
//         .then((res) => {
//             console.log("ms: succesful get: res ", res.data)
//             this.setState({
//                 isLoading: false,
//                 friends: res.data
//             });
//         })
//         .catch((err) => console.error("ms: login failed: err: ", err.message))
//     };

//     // getData = () => {
//     //     axiosWithAuth()
//     //     .get("/friends")
//     //     .then((res) => {
//     //         console.log("ms: getData yes: res: ", res);
//     //         this.setState({
//     //             friends: res.data.data
//     //         })
//     //     })
//     //     .catch((err) => console.error("ms: getData no: err ", err.message));
//     // }

//     render() {
        // const friendsList = this.state.friends;
        // console.log(friendsList);
        return(
            <div>
            {friends.map( friend =>(
                <FriendsCard 
                            key={friend.id}
                            name={friend.name}
                            age={friend.age}
                            email={friend.email}/>
            ))}
            </div>
        )
        }
        
        
        export default FriendsList