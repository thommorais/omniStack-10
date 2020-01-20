const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

const MAX_DISTANCE = 10000;

module.exports = {

  /**
   * Search all devs within 10 km, filters by technologies.
   * 
   * @param {*} request   : the request query contains the search info we need.
   * @param {*} response  : naturally, the response will return the list of devs found.
   */
  async index(request, response) {
    const { latitude, longitude, techs } = request.query;

    const techsArray = parseStringAsArray(techs);

    const devs = await Dev.find({
      techs: {
        $in: techsArray
      },
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [longitude, latitude]
          },
          $maxDistance: MAX_DISTANCE
        }
      }
    });

    return response.json(devs);
  }

};
