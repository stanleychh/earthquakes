import Moment from "moment";
import { TIME_FORMAT } from '../common/constants';

export const transformTimeStamp = (timestamp) => Moment(timestamp).local().format(TIME_FORMAT);

export const composeSubtitle = (count, date) => `${count} earthquakes happened until ${transformTimeStamp(date)}`;

export const getPropertyList = (data) => {
    return data.map((feature) => feature.properties);
};

export const getCoordinateList = (data) => {
    return data.map((feature) => {
        const property = feature.properties;
        const coordinates = feature.geometry.coordinates;
        const id = feature.id;
        const title = property.title;
        const detail = property.url;
        const mag = property.mag;
        const time = transformTimeStamp(property.time);
        const geoLocation = [coordinates[1], coordinates[0]];
        const depth = coordinates[2];

        return [{title, time, geoLocation, detail, mag, depth, id}];
    });
};
