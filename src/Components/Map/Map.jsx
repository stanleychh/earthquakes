import React from 'react';
import PropTypes from 'prop-types';
import { Map as LeafletMap, TileLayer, Popup, CircleMarker } from 'react-leaflet';
import { SCALE_MAG } from '../../common/constants';
import 'leaflet/dist/leaflet.css';
import '../../Styles/map.css';

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
                            <CircleMarker center={data[0].geoLocation} key={data[0].id} radius={data[0].mag*SCALE_MAG} color="#ff4242">
                                <Popup>
                                    { data[0].title } <br/>
                                    { data[0].time } <br/>
                                    Depth: { data[0].depth } <br/>
                                    { <a href={data[0].detail} target='_blank' rel='noopener noreferrer'>More Detail</a> }
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
