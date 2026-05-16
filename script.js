// PAGE NAVIGATION

pages.forEach(page => {
  page.classList.remove('active');
});

document.getElementById(pageId).classList.add('active');



// CHART

const ctx = document.getElementById('chart');

new Chart(ctx, {
type: 'line',

data: {
  labels: ['1 PM', '2 PM', '3 PM', '4 PM', '5 PM'],

  datasets: [{
    label: 'Temperature',
    data: [28, 30, 35, 40, 38],
    borderWidth: 3,
    tension: 0.4
  }]
},

options: {
  responsive:true
}
});


// LIVE DATA UPDATE

setInterval(() => {

document.getElementById('temp').innerHTML =
  Math.floor(Math.random() * 15 + 25) + '°C';

document.getElementById('humidity').innerHTML =
  Math.floor(Math.random() * 30 + 40) + '%';

document.getElementById('smoke').innerHTML =
  Math.floor(Math.random() * 200);

document.getElementById('battery').innerHTML =
  Math.floor(Math.random() * 20 + 80) + '%';

}, 3000);


// ALERT BUTTON

const alertBtn = document.getElementById('alertBtn');

alertBtn.addEventListener('click', () => {
alert('Emergency Alert Sent Successfully!');
});