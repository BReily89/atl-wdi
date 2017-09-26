// Ultra Email app

var mongoose = require('mongoose');
var Schema = require("./schema.js");

mongoose.connect('mongodb://localhost/students');

const db = mongoose.connection;

// Will log an error if db can't connect to MongoDB
db.on('error', function (err) {
    console.log(err);
});

// Will log "database has been connected" if it successfully connects.
db.once('open', function () {
    console.log("database has been connected!");
});

var EmailAddress = Schema.EmailAddress;
var password = Schema.passwrod;




// Generate instances of a Email addresses and total messages in inbox.
var emailProvider1 = new Page({ name: "fakeEmail@gmail.email1", password:  });
var emailProvider2 = new Page({ name: "fakeEmailyahoomail.email2", password:  });
var emailProvider3 = new Page({ name: "fakeEmail@msn.email3", password:  });

var password1 = password1
var password2 = password2
var password3 = password3


var EmailAddress = ["fakeEmail@gmail.email1","fakeEmail@yahoomail.email2", "fakeEmail@msn.email3"];
var inbox = [email1, email2, email3];

// Assign tag/img , yahoo, gmail, msn, bellsouth etc.to each eamil.
emailProvider.forEach(function (email, i) {
    email.tag.push(tag[i], tag[i + 1]);

    email.save(function (err) {
        if (err) {
            console.log(err);
            return;
        }

        console.log(student);
    });
});

// Disconnect from database
db.close();

//Radio on the InterNet app

var mongoose = require('mongoose');
var Schema = require("./schema.js");

mongoose.connect('mongodb://localhost/students');

const db = mongoose.connection;

const = radioStation = name: 'CallLetters'/*wxrn*/ 
const = radioId = #
const = Genre = string
const = rating = num
const = Tracklist

var radioStation1 = newStation({'RadioStation',radioId, 'Genre', rating })
var radioStation2 = newStation({'RadioStation',radioId, 'Genre', rating })
var radioStation3 = newStation({'RadioStation',radioId, 'Genre', rating })
var radioStation4 = newStation({'RadioStation',radioId, 'Genre', rating })
var radioStation5 = newStation({'RadioStation',radioId, 'Genre', rating })

var TrackList =[song1, song2, song3, song4, song5]

TopSation.forEach(function (TopStation, i) {
TopStation.rating.push(TopStation[i], rating[i + 1]);

    TopStation.save(function (err) {
        if (err) {
            console.log(err);
            return;
        }
TrackList,forEach(function TrackList i){
    TrackList.rating.push(TrackList[i], rating[i +1]);

    TrackList.sav(function (err {
        if (err){
            conjsole.log(err);
            return;
        }
    })
}

        console.log(student);
    });
});
db.close();



//


