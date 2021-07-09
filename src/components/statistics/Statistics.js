import React from 'react';
import PropTypes from 'prop-types';
import styles from './statistics.module.css'

const Statistics = ({title, stats}) => (
    <section className={styles.statistics}>
        <h2 className={styles.title}>{title}</h2>

        <ul className={styles.statslist}>
            {stats.map(stat => (
                <li className={styles.item}
                    key={stat.id}
                    style={{
                        backgroundColor: randomColor(),
                        width: widthCalc(stats.length)
                    }}>
                    <span className={styles.label}>{stat.label}</span>
                    <span className={styles.percentage}>{stat.percentage}%</span>
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

function randomColor() {
    let rc = "#";
    for(let i=0;i<6;i++){
        rc += Math.floor(Math.random()*16).toString(16);
    }
    return rc;
}

function widthCalc(el) {
    const newWidth = 300 / el;
    return newWidth;
}

export default Statistics;

