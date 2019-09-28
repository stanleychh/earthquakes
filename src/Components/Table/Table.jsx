import React from 'react';
import ReactTable from 'react-table'
import { columns } from '../../TableConfig/config';
import styles from "./Table.module.css";

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
