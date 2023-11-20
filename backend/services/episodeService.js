const Episode = require('../models/Episode.js');

async function createEpisode(episodeData) {
  try {
   
    const newEpisode = new Episode(episodeData);
    
    await newEpisode.save();
    return newEpisode;
  } catch (error) {
    console.log(error)
    throw error;
  }
}

module.exports = {
  createEpisode,
};
