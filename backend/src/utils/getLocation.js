/**
 * Get a latitude and longitude string and convert it into a PointSchema.
 * 
 * @param {String} latitude
 * @param {String} longitude
 */
module.exports = function getLocation(latitude, longitude) {
  if (latitude === '' || longitude === '') {
    return undefined;
  }

  return location = {
    type: 'Point',
    coordinates: [longitude, latitude]
  };
};
