import React from 'react';
import PropTypes from 'prop-types';

const Profile = ({ name, tag, location, avatar, stats: { followers, views, likes }}) => {
    return (
        <div class="profile">
            <div class="description">
                <img
                    src={avatar}
                    alt="Profile avatar"
                    class="avatar"
                    width="60"
                />
                <p class="name">{name}</p>
                <p class="tag">{tag}</p>
                <p class="location">{location}</p>
            </div>

            <ul class="stats">
                <li>
                    <span class="label">Followers</span>
                    <span class="quantity">{followers}</span>
                </li>
                <li>
                    <span class="label">Views</span>
                    <span class="quantity">{views}</span>
                </li>
                <li>
                    <span class="label">Likes</span>
                    <span class="quantity">{likes}</span>
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