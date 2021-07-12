import React from 'react';
import PropTypes from 'prop-types';
import profile from './profile.module.css';

const Profile = ({ name, tag, location, avatar, stats: { followers, views, likes }}) => {
    return (
        <div className={profile.profile}>
            <div className={profile.description}>
                <img
                    src={avatar}
                    alt="Profile avatar"
                    className={profile.avatar}
                    width="120"
                />
                <p className={profile.name}>{name}</p>
                <p className={profile.tag}>@{tag}</p>
                <p className={profile.location}>{location}</p>
            </div>

            <ul className={profile.stats}>
                <li className={profile.counter}>
                    <span className={profile.label}>Followers</span>
                    <span className={profile.quantity}>{followers}</span>
                </li >
                <li className={profile.counter2}>
                    <span className={profile.label}>Views</span>
                    <span className={profile.quantity}>{views}</span>
                </li>
                <li className={profile.counter}>
                    <span className={profile.label}>Likes</span>
                    <span className={profile.quantity}>{likes}</span>
                </li>
            </ul>
        </div>
    )
};

Profile.defaultProps = {
    tag: "abrakadabra",
    location: "unknown",
};

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
};

export default Profile;