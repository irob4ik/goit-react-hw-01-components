import React from 'react';
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => (
    <ul class="friend-list">
        {friends.map(friend => (
            <li class="item" key={friend.id}>
                {friend.isOnline ? (
                    <span class="status">☻</span>
                ) : (
                    <span class="status">☺</span>   
                )}                
                <img class="avatar" src={friend.avatar} alt={friend.name} width="48" />
                <p class="name">{friend.name}</p>
            </li>
        ))}
    </ul>
);

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    })).isRequired,
};

export default FriendList;