import React from 'react';
import PropTypes from 'prop-types';
import styles from "./Title.module.css";

export const Title = ({ title, subtitle }) => {
    return(
        <>
            <h3 className={styles.center}>{title}</h3>
            <p className={styles.center}>{subtitle}</p>
        </>
    );
};

Title.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string
};

Title.defaultProps = {
    title: '',
    subtitle: ''
};


