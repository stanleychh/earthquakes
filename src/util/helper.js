export const getPropertyList = (data) => {
    let featureData = [];
    data.map((feature) => featureData.push(feature.properties));
    return featureData;
};

export const getCoordinateList = (data) => {
    let geoData = [];
    data.map((feature) => geoData.push(feature.geometry.coordinates));
    return geoData;
};
