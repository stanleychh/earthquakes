import React from 'react';
import PropTypes from 'prop-types';
import { Map as LeafletMap, TileLayer, Popup, CircleMarker } from 'react-leaflet';
import { MAP_SCALE_MAG, MAP_MARKER_COLOR } from '../../common/constants';

import 'leaflet/dist/leaflet.css';
import '../../Styles/map.css';

export const composeHyperlink = (link, text) => {
    return (
        <a href={link} target='_blank' rel='noopener noreferrer'>{text}</a>
    );
};

export const Map = ({ position, zoom, geoData }) => {
    return (
        <div>
            <LeafletMap center={position} zoom={zoom}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
                />
                {
                    geoData && geoData.map((data) => {
                        return (
                            <CircleMarker
                                center={data[0].geoLocation}
                                key={data[0].id}
                                radius={data[0].mag*MAP_SCALE_MAG}
                                color={MAP_MARKER_COLOR} >
                                <Popup>
                                    { data[0].title } <br/>
                                    { data[0].time } <br/>
                                    Depth: { data[0].depth } <br/>
                                    { composeHyperlink(data[0].detail, 'More Detail') }
                                </Popup>
                            </CircleMarker>
                        )
                    })
                }
            </LeafletMap>
        </div>
    );
};

Map.propTypes = {
    position: PropTypes.array,
    zoom: PropTypes.number,
    geoData: PropTypes.array
};

Map.defaultProps = {
    position: [],
    zoom: 1,
    geoData: []
};
