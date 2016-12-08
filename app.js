'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']; //eslint-disable-line

var allshops = [];
var storeTable = document.getElementById('locationsTable');
var inputForm = document.getElementById('inputForm');

function Locations(locationName, minCustPerHour, maxCustPerHour, avgCookiesPerCust) {
  // unique properties
  this.locationName = locationName;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesPerCust = avgCookiesPerCust;
  // non-unique properties
  this.randCustPerHour = [];
  this.totalCookiesSoldPerHour = [];
  this.totalDailyCookiesSold = 0;

  this.calcRandCustPerHour = function() {
    for (var i = 0; i < hours.length; i++) {
      this.randCustPerHour.push(Math.ceil(Math.random() * (this.maxCustPerHour - this.minCustPerHour) + this.minCustPerHour));
    }
    //console.log(this.randCustPerHour);
  }
  this.calcTotalCookiesSoldPerHour = function() {
    this.calcRandCustPerHour();
    for (var j = 0; j < this.randCustPerHour.length; j++) {
      this.totalCookiesSoldPerHour.push(Math.ceil(this.avgCookiesPerCust * this.randCustPerHour[j]));
      // this is a good place to calculate the cookies daily total
      this.totalDailyCookiesSold += this.totalCookiesSoldPerHour[j];
    }
    // console.log(this.totalCookiesSoldPerHour);
    // console.log(this.totalDailyCookiesSold);
  }
  this.calcTotalCookiesSoldPerHour();
  allshops.push(this);

  this.render = function() {
    var storeRow = document.createElement('tr'); // row after header
    var dataCell = document.createElement('td');
    dataCell.textContent = this.locationName;
    storeRow.appendChild(dataCell);
    for (var i = 0; i < hours.length; i++) {
      dataCell = document.createElement('td');
      dataCell.textContent = this.totalCookiesSoldPerHour[i];
      storeRow.appendChild(dataCell);
    }
    dataCell = document.createElement('td');
    dataCell.textContent = this.totalDailyCookiesSold;
    storeRow.appendChild(dataCell);
    storeTable.appendChild(storeRow);
  }
}

function makeHeaderRow() {
  var headerRow = document.createElement('tr'); // row after header
  var emptyCell = document.createElement('th');
  emptyCell.textContent = '';
  headerRow.appendChild(emptyCell);
  for (var i = 0; i < hours.length; i++) {
    var hourCell = document.createElement('th');
    hourCell.textContent = hours[i];
    headerRow.appendChild(hourCell);
  }
  var dataDailyCell = document.createElement('th');
  dataDailyCell.textContent = 'Daily Location Total';
  headerRow.appendChild(dataDailyCell);
  storeTable.appendChild(headerRow);
}

function storeRows() {
  for (var i = 0; i < allshops.length; i++) {
    allshops[i].render();
  }
}

function makeFooterRow() {
  var footerRow = document.createElement('tr');
  var totalsCell = document.createElement('th');
  totalsCell.textContent = 'Totals';
  footerRow.appendChild(totalsCell);

  for (var i = 0; i < allshops[1].totalCookiesSoldPerHour.length; i++) {
    var allShopsTotal = 0;
    for (var j = 0; j < allshops.length; j++) {
      allShopsTotal += allshops[j].totalCookiesSoldPerHour[i];
    }
    totalsCell = document.createElement('th');
    totalsCell.textContent = allShopsTotal;
    footerRow.appendChild(totalsCell);
  }

  var superTotal = 0;
  for (var m = 0; m < allshops.length; m++) {
    superTotal += allshops[m].totalDailyCookiesSold;
  }
  totalsCell = document.createElement('th');
  totalsCell.textContent = superTotal;
  footerRow.appendChild(totalsCell);
  storeTable.appendChild(footerRow);
}
// console.log(allshops);
new Locations('First and Pike', 23, 65, 6.3);
new Locations('SeaTac Airport', 3, 24, 1.2);
new Locations('Seattle Center',	11,	38,	3.7);
new Locations('Capitol Hill', 20, 38, 2.3);
new Locations('Alki', 2, 16, 4.6);

function handleStoreSubmit(event) {
  // console.log('This works');
  event.preventDefault(); // prevents page reload on a 'submit' event
  if (!event.target.where.value || !event.target.min.value || !event.target.max.value || !event.target.average.value) {
    return alert('Fields cannot be empty!');
  }

  var where = event.target.where.value;
  var min = event.target.min.value;
  var max = event.target.max.value;
  var average = event.target.average.value;

  new Locations(where, min, max, average);

  storeTable.innerHTML = '';

  makeHeaderRow();
  storeRows();
  makeFooterRow();
}

inputForm.addEventListener('submit', handleStoreSubmit);

makeHeaderRow();
storeRows();
makeFooterRow();
