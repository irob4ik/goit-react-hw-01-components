import React from 'react';
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => (
    <ul className="friend-list">
        {friends.map(friend => (
            <li className="item" key={friend.id}>
                {friend.isOnline ? (
                    <span className="status">☻</span>
                ) : (
                    <span className="status">☺</span>   
                )}                
                <img className="avatar" src={friend.avatar} alt={friend.name} width="48" />
                <p className="name">{friend.name}</p>
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