'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

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
      console.log(this.randCustPerHour);
    }

  },
  calcTotalCookiesSoldPerHour: function() {
    // call the calcRandCustPerHour method;
    this.calcRandCustPerHour();
    // a for loop over the length of the hours array
    // this is also a good place to calculate the daily total with some kind of action
    for (var j = 0; j < this.randCustPerHour.length; j++) {
      this.totalCookiesSoldPerHour.push(Math.ceil(this.avgCookiesPerCust * this.randCustPerHour[j]));
      console.log(this.totalCookiesSoldPerHour);
      this.totalDailyCookiesSold += this.totalCookiesSoldPerHour[j];
      console.log(this.totalDailyCookiesSold);
    }

  },
  // calcTotalDailyCookiesSold: function() {
  //   this.calcTotalCookiesSoldPerHour();
  //   for (var m = 0; m < this.totalCookiesSoldPerHour.length; m++) {
  //     this.totalDailyCookiesSold += this.totalCookiesSoldPerHour[m];
  //     console.log(this.totalDailyCookiesSold);
  //   }
  //
  // },
  render: function() {
    // call the calcTotalCookiesSoldPerHour method;
    this.calcTotalCookiesSoldPerHour();
    // grab the id of the empty ul for this location in the document
    var ulEl = document.getElementById('alkiList');
    console.log(ulEl);
    // inside of a for loop, do the three parts of adding to the document
    for (var k = 0; k < hours.length; k++) {
      // create an element, give it content, and append it
      var liEl = document.createElement('li');
      // don't forget that in the list element you'll need to concatenate
      liEl.textContent = hours[k] + ': ' + this.totalCookiesSoldPerHour[k] + ' cookies';
      ulEl.appendChild(liEl);
    }
    // and don't forget that outside of the for loop you need to create content,
    // and add a last element for the daily total
    var liEl2 = document.createElement('li');
    liEl2.textContent = this.totalDailyCookiesSold + ' total daily cookies';
    ulEl.appendChild(liEl2);
  }
};
// alki.calcRandCustPerHour();
// alki.calcTotalCookiesSoldPerHour();
alki.render();
