// Ultra app email

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const Schema = mongoose.Schema;

var email = function(password) {
    return (this.provider !== 'local' || (password && password.length > 6));
};

/**
 * User Schema
 */

    emailProvider: {
        type: String,
        match: [/.+\@.+\..+/, 'Please fill a valid email address']
        password: string
    },
//Radio on the Internet app
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const RadioSchema = new Schema ({
    name: name,
    type: string,
    radioId: string,
    Genre: string,
    rating: #,
    required: true,
radio: [RadioSchema]
});
const RadioSchema = mongoose.model('RadioId,' RadioSchema)
    



})

var TopStation = function(rating) {
    return (this.radioStation)
}
var TrackList= function(Tracklist) {
    return(this.Tracklist)
}
module.exports = {
    RadioModel: RadioModel,
    ProjectModel: ProjectModel
};
// Rock Concert App
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const RockAppSchema = mongoose.Schema;



const TheDoors = newSchema{{
    tourDates: []
    ticket: price,
    nextNearestShow: #,
)}

const TheRollingStones = newSchema({
    tourDates: []
    ticket: price
    nextNearestShow: #
)}
const Cream = newSchema{(
    tourDates: []
    ticket: price,
    nextNearestShow: #,
)}
const SylvanEsso = newSchema({
    tourDates: []
    ticket: price
    nextNearestShow: #
)};

const 
const RockModel = mongoose.model('RockApp', RockAppSchema);

module.exports= 
RockAppModel:RockAppModel,
