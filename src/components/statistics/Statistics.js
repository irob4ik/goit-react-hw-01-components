import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({title, stats}) => (
    <section className="statistics">
        <h2 className="title">{title}</h2>

        <ul className="stat-list">
            {stats.map(stat => (
                <li className="item" key={stat.id}>
                    <span className="label">{stat.label}</span>
                    <span className="percentage">{stat.percentage}</span>
                </li>
            ))}
        </ul>
    </section>
);

Statistics.defaultProps = {
    title: "",
};

Statistics.propTypes = {
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    })).isRequired,
};

export default Statistics;