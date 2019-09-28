import fetchJsonp from "fetch-jsonp";
import { EARTHQUAKE_URL } from '../common/constants';

export const getEarthquakeData = async () => {
    return fetchJsonp(EARTHQUAKE_URL, {
        jsonpCallbackFunction: 'eqfeed_callback',
    });
};
