[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)
```js
# Data Modeling with JavaScript

Every computer program deals with managing data. How you choose to represent
these data within your program can have far-reaching implications on every other
part of your application; consequently, reversing those decision becomes more
and more costly over time, as the program becomes more complex. For this reason,
thinking carefully in advance about how you want to model your data within your
application can pay very big dividends.

## Choosing Entities/Abstractions

One of the first challenges in modeling data is deciding what data to model.
Let's consider a specific example: a laptop. Suppose that you need to represent
a laptop in an application. What attributes are most important to include in our
data model?

As it turns out, the answer to that question depends heavily on what the
application will do and how it will be used. If the application is for selling
laptops, we might be pick the following attributes.

  > A Laptop has...
  > - a sale price
  > - a brand name
  > - an amount of RAM, in GB
  > - a disc size, in GB
  > - a processor speed, in GHz
  > - a monitor size, in inches
  >
  > e.g.

  ```js
  var laptop = {
    salePrice: 1000,
    brand: 'Lenovo',
    RAM: 8,
    disc: 60,
    processor: 2.5,
    monitorSize: 12
  }
  ```

However, if the application will be used for _manufacturing laptops_,
things like sale price suddenly become much less relevant; instead, a laptop in
that kind of app might have information about materials costs, % completion,
or the factory and assembly line on which the laptop was built.

Take a look at each of the app descriptions below. For each description,
create a rough data model for the app by listing at least two relevant
entities/abstractions (e.g. Laptop, above) that the app might use, and giving
them each several properties that make sense for that use case.
Please also give a short explanation (1 - 2 sentences) of why these choices make
sense for the use case of the app.

### 1. To-Do List

This app will be an app for tracking and managing tasks. Not only will it keep
track of whether tasks have been completed, it will also keep track of
how long each task took to complete. Tasks can be grouped into 'projects' to
keep them organized.


}

//TO Do 

var tasks {

const ToDoList
 name: 'wash dishes',
 start: '09/05/2015',
 timeStarted: 5:00pm,
 timeCompleted:[],
};

 var projectList = {
name: 'build school project',
how: 'coding with readin',
setOfTasks [ 'create HTML', create CSS', 'create JS','create logic', 'create wins', 'create losses']
start: '09/05/2015',
timeStarted: '5:00pm',
 };
 //This app allows you to create tasks that you need to complete 
//gives you a time frame with a date and time and an option to complete it
//it also allows you to create projects through a variable option, with an array of tasks
  to complete and a time frame



### 2. Photo Sharing App

In this app, users can upload photos to their accounts and share them with others. These photos can be grouped into albums.

>PhotoShareApp
   
var photo = {
 user: navgate to app. enter credentials;
  upLoadPic: Allows users to uplaod pics, determine location and date;
  createAlbum: Group photos together, title album;
  hostURL: where to grab the pic from for uploading;
};
}

var albums = {
  groupsOfPhotos: combine pics into array ['img1', img'2, 'img3', 'img4', 'img5', 'img6'];
  PhotoGroups: ['Graduation', 'Vacation', 'Sabbatical'];
};
Create an option to upload photos and allow the user to determine time date and location
allow them to host a Url and create an array of of album names




### 3. Home Automation Manager

This app will be a tool for managing a home automation system; it will keep
track of the time and temperature of the house that it monitors, and use that
information to turn on and off different lights and adjust the thermostat up
and down.

dadsThermostat
  
  var = lightLocale

lightBrightnessLevel = [ 1, 2, 3, 4];
location = ['livingRoom', 'BedRoom','BedRoom2'. bathRoom];

var Tempeture {
Thermometer =[65 < 90];
ThermometerLocation = ['LivingRoom', 'BedRoom', 'BedRoom2', 'bathroom' ]
};

Create the Variable for the location for lights and tempeture. It should contain arrays of the location and  tempeture range within the thermostat



### 4. Sneaker Store

This app will allow customers to browse a list of products (sneakers, in this
case), add those products to a cart, and save that cart as a past order once the
purchase is complete.

ShoeLaLaSneakers

Var Shoes = {
  name : 'Nike air shoes 3000'
  description: Allows the jumper to get 3000ft of air all in one leap. The patented pyro leather action has more give and less push. Buy these shoes today!
  price: $500.00 or 50 easy payments of $9.99.
};
var Cart = {
product: Shoes,
quantity: 1,
price: $500.00,
};
orderProgress = {
  order: ['Shoes']
  Status: 'in progress',
  dataCompleted:'incomplete',
};
 Create an item list with options, i've only provided one, but you can creat a 'menu' with an array. Allower comsumer to choose item with pricing and description. 
 Allow usr to see completion of order progress.

## Representing Abstractions in Code

Once you've chosen the abstractions that your app will use, the next step is to
figure out how to actually represent those abstractions in code. The same
abstraction can often be represented in multiple different ways, and there may
be trade-offs in speed and simplicity that come from using one representation
vs another.

### 5. Subway System

Suppose that you're building an app that tells travelers how many stops they
need to travel to get from one station to another. Two abstractions that you
decide to use to model your application's data are Stations and Rail Lines, with
the following properties:

A Station has:
-   a name
-   a description

A Rail Line has:
-   a name
-   a set of stations that it hits

The team has decided to represent these abstractions in the following way.

```js
// Station
var exampleStation = {
  name: 'Downtown Crossing',
  description: "Downtown Crossing is a shopping district that is a small part of downtown Boston, Massachusetts, located due east of Boston Common and west of the Financial District..."
};

// Rail Line
var exampleLine = {
  name: 'Green Line',
  northStation: {
    name: 'North Station',
    description: "North Station is a major transportation hub located at Causeway and Nashua Streets in Boston, Massachusetts, United States...."
  },
  haymarket: {
    name: 'Haymarket',
    description: "Haymarket is an MBTA subway station serving the Green and Orange lines, located at the corner of Congress and New Sudbury streets in downtown Boston, Massachusetts...."
  },
  governmentCenter: {
    name: 'Government Center',
    description: "Government Center is an area in downtown Boston, centered on City Hall Plaza. Formerly the site of Scollay Square, it is now the location of Boston City Hall..."
  }
};

// Stop and line descriptions from Wikipedia (https://en.wikipedia.org)
```

What are some advantages and disadvantages of choosing these representations? Please give at least one example of each.
The advantges of choosing the values of these representations are to allow a new user/tourist an ease of application to riding the subway. Providing the name and a description of each stop allows the user to make an informed decision on which stop the way to go to. It wwill also allow the user to plan a day based off of these descriptions. A disadvantage would be, there is no time variation for routine traffic back ups, rush hour and emergencies.


### 6. Doctor Appointment App

Consider an app for helping patients and doctors schedule appointments.

A Patient has:
-   a given name
-   a surname
-   a date of birth

A Doctor has:
-   a given name
-   a surname
-   a specialty
-   an address

An Appointment has:
-   a date
-   a time

The team has not yet decided how to represent the relationship between doctors,
patients, and appointments, so they've put together two different
alternatives.

#### Option 1

```js
var examplePatient = {
  givenName: 'John',
  surname: 'Doe',
  dateOfBirth: '1992-11-03'
};
var exampleAppointment = {
  date: '2016-12-15',
  time: '13:00',
  patient: {
    givenName: 'Jane',
    surname: 'Doe',
    dateOfBirth: '1980-06-13'
  }
};
var exampleDoctor = {
  givenName: 'Alphonse',
  surname: 'Cula',
  specialty: 'phlebotomy',
  appointments: [
    {
      date: '2015-10-31',
      time: '00:00',
      patient: {
        givenName: 'Lucy',
        surname: 'Westenra',
        dateOfBirth: '1976-06-06'
      }
    },
    {
      date: '2016-10-31',
      time: '00:00',
      patient: {
        givenName: 'Mina',
        surname: 'Murray',
        dateOfBirth: '1989-09-09'
      }
    }
  ]
};
```

#### Option 2

```js
var exampleDoctor = {
  givenName: 'John',
  surname: 'Dorian',
  specialty: 'internal medicine'
};
var examplePatient = {
  givenName: 'Jordan',
  surname: 'Sullivan',
  dateOfBirth: '1978-12-01'
};
var exampleAppointment = {
  date: '2009-04-15',
  time: '19:00',
  doctor: {
    givenName: 'Jan',
    surname: 'Itor',
    specialty: 'psychology'
  },
  patient: {
    givenName: 'Ladinia',
    surname: 'Williams',
    dateOfBirth: '1980-01-01',
  }
}
```

What are some relative advantages and disadvantages of each representation?
Under what circumstances might one representation be a better choice than the
other? Are there any circumstances in which the other representation might be
the better choice?
The first round of choices allows the user to time for an appointment and the 'relative' reason for a visit. It would be good for an actuly doctors office, for validation of visit with patient name and doctors listed under which practice.
  The second option gives each doctor and patient their own variable for what would allow a more indepth description of each patient and doctor, lots and lots of deets

## Tying It Together

### 7. Tic-Tac-Toe

You've been tasked with building an in-browser tic-tac-toe game.

a.  What are some possible entities that your application might use to model its
    data? Please pick at least two, with at least two properties apiece.

  > You could use hover entities along side, 'x' and 'o' variables
  you'd need a variable to move "pieces'
  you'd need an option to allow either 'player1/player2' to win as well as a score card

b.  How might those entities be represented in JavaScript code?

They would be represtnted by 
Var Board {
  line-1:
  line-2:
  line-3:
}
c.  Justify your choices in a) and b). Why these entities? Why these
    representations?

So you can keep a score, allow each player to make a move and clear the board after each game.