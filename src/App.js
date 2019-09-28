import React, { useState, useEffect } from 'react';
import { Table } from './Components/Table/Table';
import { getEarthquakeData } from './util/api';
import { getPropertyList, getCoordinateList } from './util/helper';

import 'react-table/react-table.css';

function App() {
    const [eqData, setEqData] = useState([]);
    const [geoData, setGeoData] = useState([]);

    useEffect(() => {
        getEarthquakeData()
        .then(res => res.json())
        .then(data => {
            setEqData(getPropertyList(data.features));
            setGeoData(getCoordinateList(data.features));
        }).catch(function(ex) {
            console.log('failed', ex);
        })
    }, []);

    return(
        <Table data={eqData} />
    );
}

export default App;
