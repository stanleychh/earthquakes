import React, { useState, useEffect } from 'react';
import { Table } from './Components/Table';
import { Map } from "./Components/Map";
import { Title } from "./Components/Title";
import { getEarthquakeData } from './util/api';
import { getPropertyList, getCoordinateList, composeSubtitle } from './util/helper';

import { USA } from "./common/coordinates";
import 'react-table/react-table.css';

function App() {
    const [metaData, setMetaData] = useState([]);
    const [eqFeatures, setEqFeatures] = useState([]);
    const [eqGeoData, setEqGeoData] = useState([]);

    useEffect(() => {
        getEarthquakeData()
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setMetaData(data.metadata);
            setEqFeatures(getPropertyList(data.features));
            setEqGeoData(getCoordinateList(data.features));
        }).catch(function(ex) {
            console.log('failed', ex);
        })
    }, []);

    return(
        <>
            <Title title={metaData.title} subtitle={composeSubtitle(metaData.count || 0, metaData.generated)} />
            <Map position={USA} zoom={3} geoData={eqGeoData} />
            <Table data={eqFeatures} />
        </>
    );
}

export default App;
