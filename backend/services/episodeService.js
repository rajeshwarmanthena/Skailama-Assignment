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

async function deleteEpisode(episodeId)  {
  try {
    
    await Episode.findByIdAndDelete(episodeId);
  } catch (error) {
    console.error(error);
    throw new Error('Error deleting episode');
  }
}

module.exports = {
  createEpisode,
  deleteEpisode
};
