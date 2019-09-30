import React from 'react';
import PropTypes from 'prop-types';
import ReactTable from 'react-table'
import { columns } from '../../TableConfig/config';
import styles from "./Table.module.css";
import 'react-table/react-table.css';

export const Table = ({ data }) => {

    return(
        <ReactTable
            className={styles.base}
            data={data}
            columns={columns}
            filterable
            showPageJump
        />
    );
};

Table.propTypes = {
    data: PropTypes.array
};

Table.defaultProps = {
    data: []
};

Table.displayName = 'Table';

