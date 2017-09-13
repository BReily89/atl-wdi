// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

"use strict";

// Data Management and Business Logic //
const CounterCollection = {
  lastCountId: 0,
  counters: [], // e.g. {countId: 3, count: 20}
  createCounter: function () {
    this.lastCountId++;
    this.counters.push({
      countId: this.lastCountId,
      count: 0
    });
    return this.lastCountId;
  },
  getCounterValue: function (countId) {
    console.log(`read counter #${countId}`);
    let counter = this.counters.find(function (counter) {
      return counter.countId === countId;
    });
    if (counter) { return counter.count; }
  },
  incrementCounter: function (countId) {
    console.log(`increment counter #${countId}`);
    let counter = this.counters.find(function (counter) {
      return counter.countId === countId;
    });
    if (counter) {
      counter.count += 1;
      return counter.count;
    }
  },
  destroyCounter: function (countId) {
    console.log(`insert counter component #${newCountId}`);
    let newCounterComponent = document.createElement('div');
    //^^ create a 'div' in html label it and call it out below using innerHTML
    newCounterComponent.innerHTML =
    `<h3>Count: <span>0</span></h3> <button class='increment'> +1 </button> <button class='delete'> Delete </button>`;
    newCounterComponent.className += ' counter';
    //call out 'counter' in html/DOM
    newCounterComponent.dataset.countId = newCountId;
    //take data attribute and count down
    newCounterComponent.getElementsByClassName('increment')[0].onclick= AppController.onClickIncrement;
    //call element with node-'getElementByClass
    newCounterComponent.getElementsByClassName('delete')[0].onclick = AppController.onClickDelete;
    document.getElementById('counter-list').appendChild(newCounterComponent);
  },
};

// UI //
const Presenter = {
  insertCounterComponent: function (newCountId) {
    console.log(`insert counter component #${newCountId}`);
    let counterList = document.getElementById('counter-list')
    const str = "<div class='counter' data-index='2'><h3>Count: <span>0</span></h3><button class='increment'> + 1 </button></div>";
    //creating a class element in html and identifying it. then creating an option for it to increase by 1
    
    // call out the string with 'str'
    counterList.innerHTML += str;
    //make a new
    
    document.getElementById('new-counter').onclick = AppController.onClickNewCounter;
    
  },
   
},
  refreshCounterComponent: function(countId) {
    console.log(`refresh counter component #${countId}`);
    //refresh component with every click
    console.log(`refresh counter component #${countId}`);
    let val = CounterCollection.getCounterValue(countId);
    document.querySelector(`[data-count-id="${countId}"] span`).innerHTML = val;  },
    //identify the span and count id and manipulate it with the dom??  

    //I actually have no idea what im talking about and am kinda freaking out
  removeCounterComponent: function(countId) {             // REACH
    console.log(`remove counter component #${countId}`);
    // Your Code Here
  }
};

// Top-Level Application Control //
const AppController = {
  onClickNewCounter: function (event) {
    // Your Code Here
  },
  onClickIncrement: function (event) {
    // Your Code Here
  },
  onClickDelete: function (event) {                           // REACH
    // Your Code Here
  }
};

window.onload = function () {
  document.getElementById('new-counter').onclick = AppController.onClickNewCounter;
};
