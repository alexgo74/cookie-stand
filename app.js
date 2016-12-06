'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']; // eslint-disable-line

var firstAndPike = {
  locationName: 'First and Pike',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesPerCust: 6.3,
  randCustPerHour: [],
  totalCookiesSoldPerHour: [],
  totalDailyCookiesSold: 0,
  calcRandCustPerHour: function() {
    // a for loop over the length of the hours array
    for (var i = 0; i < hours.length; i++) {
      this.randCustPerHour.push(Math.ceil(Math.random() * (this.maxCustPerHour - this.minCustPerHour) + this.minCustPerHour));
      //console.log(this.randCustPerHour);
    }
    console.log(this.randCustPerHour);
  },
  calcTotalCookiesSoldPerHour: function() {
    // call the calcRandCustPerHour method
    this.calcRandCustPerHour();
    // a for loop over the length of the hours array
    for (var j = 0; j < this.randCustPerHour.length; j++) {
      this.totalCookiesSoldPerHour.push(Math.ceil(this.avgCookiesPerCust * this.randCustPerHour[j]));
      // console.log(this.totalCookiesSoldPerHour);
      // this is also a good place to calculate the cookies daily total
      this.totalDailyCookiesSold += this.totalCookiesSoldPerHour[j];
      //console.log(this.totalDailyCookiesSold);
    }
    console.log(this.totalCookiesSoldPerHour);
    console.log(this.totalDailyCookiesSold);
  },
  render: function() {
    // call the calcTotalCookiesSoldPerHour method
    this.calcTotalCookiesSoldPerHour();
    // grab the id of the empty ul for this location in the document
    var ulEl = document.getElementById('firstAndPikeList');
    console.log(ulEl);
    // inside of a for loop, do the three parts of adding to the document
    for (var k = 0; k < hours.length; k++) {
      // create an element, give it content, and append it
      var liEl = document.createElement('li');
      // don't forget that in the list element we need to concatenate
      liEl.textContent = hours[k] + ': ' + this.totalCookiesSoldPerHour[k] + ' cookies';
      ulEl.appendChild(liEl);
    }
    // and don't forget that outside of the for loop we need to create content, and add a last element for the daily total
    var liEl2 = document.createElement('li');
    liEl2.textContent = this.totalDailyCookiesSold + ' total daily cookies';
    ulEl.appendChild(liEl2);
  }
};
// firstAndPike.calcRandCustPerHour();
// firstAndPike.calcTotalCookiesSoldPerHour();
firstAndPike.render();
// end of first location object
var seaTacAirport = {
  locationName: 'SeaTac Airport',
  minCustPerHour: 3,
  maxCustPerHour: 24,
  avgCookiesPerCust: 1.2,
  randCustPerHour: [],
  totalCookiesSoldPerHour: [],
  totalDailyCookiesSold: 0,
  calcRandCustPerHour: function() {
    // a for loop over the length of the hours array
    for (var i = 0; i < hours.length; i++) {
      this.randCustPerHour.push(Math.ceil(Math.random() * (this.maxCustPerHour - this.minCustPerHour) + this.minCustPerHour));
      // console.log(this.randCustPerHour); // to see if this array gets data
    }
    console.log(this.randCustPerHour);
  },
  calcTotalCookiesSoldPerHour: function() {
    // call the calcRandCustPerHour method;
    this.calcRandCustPerHour();
    // a for loop over the length of the hours array
    for (var j = 0; j < this.randCustPerHour.length; j++) {
      this.totalCookiesSoldPerHour.push(Math.ceil(this.avgCookiesPerCust * this.randCustPerHour[j]));
      //console.log(this.totalCookiesSoldPerHour);
      // this is also a good place to calculate the daily total
      this.totalDailyCookiesSold += this.totalCookiesSoldPerHour[j];
      //console.log(this.totalDailyCookiesSold);
    }
    console.log(this.totalCookiesSoldPerHour);
    console.log(this.totalDailyCookiesSold);
  },
  render: function() {
    // call the calcTotalCookiesSoldPerHour method
    this.calcTotalCookiesSoldPerHour();
    // grab the id of the empty ul for this location in the document
    var ulEl = document.getElementById('seaTacAirportList');
    console.log(ulEl);
    // inside of a for loop, do the three parts of adding to the document
    for (var k = 0; k < hours.length; k++) {
      // create an element, give it content, and append it
      var liEl = document.createElement('li');
      // don't forget that in the list element we need to concatenate
      liEl.textContent = hours[k] + ': ' + this.totalCookiesSoldPerHour[k] + ' cookies';
      ulEl.appendChild(liEl);
    }
    // and don't forget that outside of the for loop we need to create content, and add a last element for the daily total
    var liEl2 = document.createElement('li');
    liEl2.textContent = this.totalDailyCookiesSold + ' total daily cookies';
    ulEl.appendChild(liEl2);
  }
};
// seaTacAirport.calcRandCustPerHour();
// seaTacAirport.calcTotalCookiesSoldPerHour();
seaTacAirport.render();

var seattleCenter = {
  locationName: 'Seattle Center',
  minCustPerHour: 11,
  maxCustPerHour: 38,
  avgCookiesPerCust: 3.7,
  randCustPerHour: [],
  totalCookiesSoldPerHour: [],
  totalDailyCookiesSold: 0,
  calcRandCustPerHour: function() {
    // a for loop over the length of the hours array
    for (var i = 0; i < hours.length; i++) {
      this.randCustPerHour.push(Math.ceil(Math.random() * (this.maxCustPerHour - this.minCustPerHour) + this.minCustPerHour));
      // console.log(this.randCustPerHour); // to see if this array gets data
    }
    console.log(this.randCustPerHour);
  },
  calcTotalCookiesSoldPerHour: function() {
    // call the calcRandCustPerHour method;
    this.calcRandCustPerHour();
    // a for loop over the length of the hours array
    for (var j = 0; j < this.randCustPerHour.length; j++) {
      this.totalCookiesSoldPerHour.push(Math.ceil(this.avgCookiesPerCust * this.randCustPerHour[j]));
      //console.log(this.totalCookiesSoldPerHour);
      // this is also a good place to calculate the daily total
      this.totalDailyCookiesSold += this.totalCookiesSoldPerHour[j];
      //console.log(this.totalDailyCookiesSold);
    }
    console.log(this.totalCookiesSoldPerHour);
    console.log(this.totalDailyCookiesSold);
  },
  render: function() {
    // call the calcTotalCookiesSoldPerHour method
    this.calcTotalCookiesSoldPerHour();
    // grab the id of the empty ul for this location in the document
    var ulEl = document.getElementById('seattleCenterList');
    console.log(ulEl);
    // inside of a for loop, do the three parts of adding to the document
    for (var k = 0; k < hours.length; k++) {
      // create an element, give it content, and append it
      var liEl = document.createElement('li');
      // don't forget that in the list element we need to concatenate
      liEl.textContent = hours[k] + ': ' + this.totalCookiesSoldPerHour[k] + ' cookies';
      ulEl.appendChild(liEl);
    }
    // and don't forget that outside of the for loop we need to create content, and add a last element for the daily total
    var liEl2 = document.createElement('li');
    liEl2.textContent = this.totalDailyCookiesSold + ' total daily cookies';
    ulEl.appendChild(liEl2);
  }
};
// seattleCenter.calcRandCustPerHour();
// seattleCenter.calcTotalCookiesSoldPerHour();
seattleCenter.render();

var capitolHill = {
  locationName: 'Capitol Hill',
  minCustPerHour: 20,
  maxCustPerHour: 38,
  avgCookiesPerCust: 2.3,
  randCustPerHour: [],
  totalCookiesSoldPerHour: [],
  totalDailyCookiesSold: 0,
  calcRandCustPerHour: function() {
    // a for loop over the length of the hours array
    for (var i = 0; i < hours.length; i++) {
      this.randCustPerHour.push(Math.ceil(Math.random() * (this.maxCustPerHour - this.minCustPerHour) + this.minCustPerHour));
      // console.log(this.randCustPerHour); // to see if this array gets data
    }
    console.log(this.randCustPerHour);
  },
  calcTotalCookiesSoldPerHour: function() {
    // call the calcRandCustPerHour method;
    this.calcRandCustPerHour();
    // a for loop over the length of the hours array
    for (var j = 0; j < this.randCustPerHour.length; j++) {
      this.totalCookiesSoldPerHour.push(Math.ceil(this.avgCookiesPerCust * this.randCustPerHour[j]));
      //console.log(this.totalCookiesSoldPerHour);
      // this is also a good place to calculate the daily total
      this.totalDailyCookiesSold += this.totalCookiesSoldPerHour[j];
      //console.log(this.totalDailyCookiesSold);
    }
    console.log(this.totalCookiesSoldPerHour);
    console.log(this.totalDailyCookiesSold);
  },
  render: function() {
    // call the calcTotalCookiesSoldPerHour method
    this.calcTotalCookiesSoldPerHour();
    // grab the id of the empty ul for this location in the document
    var ulEl = document.getElementById('capitolHillList');
    console.log(ulEl);
    // inside of a for loop, do the three parts of adding to the document
    for (var k = 0; k < hours.length; k++) {
      // create an element, give it content, and append it
      var liEl = document.createElement('li');
      // don't forget that in the list element we need to concatenate
      liEl.textContent = hours[k] + ': ' + this.totalCookiesSoldPerHour[k] + ' cookies';
      ulEl.appendChild(liEl);
    }
    // and don't forget that outside of the for loop we need to create content, and add a last element for the daily total
    var liEl2 = document.createElement('li');
    liEl2.textContent = this.totalDailyCookiesSold + ' total daily cookies';
    ulEl.appendChild(liEl2);
  }
};
// capitolHill.calcRandCustPerHour();
// capitolHill.calcTotalCookiesSoldPerHour();
capitolHill.render();

var alki = {
  locationName: 'Alki',
  minCustPerHour: 2,
  maxCustPerHour: 16,
  avgCookiesPerCust: 4.6,
  randCustPerHour: [],
  totalCookiesSoldPerHour: [],
  totalDailyCookiesSold: 0,
  calcRandCustPerHour: function() {
    // a for loop over the length of the hours array
    for (var i = 0; i < hours.length; i++) {
      this.randCustPerHour.push(Math.ceil(Math.random() * (this.maxCustPerHour - this.minCustPerHour) + this.minCustPerHour));
      //console.log(this.randCustPerHour);
    }
    console.log(this.randCustPerHour); // to see if this array get data
  },
  calcTotalCookiesSoldPerHour: function() {
    // call the calcRandCustPerHour method;
    this.calcRandCustPerHour();
    // a for loop over the length of the hours array
    // this is also a good place to calculate the cookies daily total
    for (var j = 0; j < this.randCustPerHour.length; j++) {
      this.totalCookiesSoldPerHour.push(Math.ceil(this.avgCookiesPerCust * this.randCustPerHour[j]));
      //console.log(this.totalCookiesSoldPerHour);
      this.totalDailyCookiesSold += this.totalCookiesSoldPerHour[j];
      //console.log(this.totalDailyCookiesSold);
    }
    console.log(this.totalCookiesSoldPerHour);
    console.log(this.totalDailyCookiesSold);
  },
  render: function() {
    // call the calcTotalCookiesSoldPerHour method
    this.calcTotalCookiesSoldPerHour();
    // grab the id of the empty ul for this location in the document
    var ulEl = document.getElementById('alkiList');
    console.log(ulEl);
    // inside of a for loop, do the three parts of adding to the document
    for (var k = 0; k < hours.length; k++) {
      // create an element, give it content, and append it
      var liEl = document.createElement('li');
      // don't forget that in the list element we need to concatenate
      liEl.textContent = hours[k] + ': ' + this.totalCookiesSoldPerHour[k] + ' cookies';
      ulEl.appendChild(liEl);
    }
    // and don't forget that outside of the for loop we need to create content, and add a last element for the daily total
    var liEl2 = document.createElement('li');
    liEl2.textContent = this.totalDailyCookiesSold + ' total daily cookies';
    ulEl.appendChild(liEl2);
  }
};
// alki.calcRandCustPerHour();
// alki.calcTotalCookiesSoldPerHour();
alki.render();
