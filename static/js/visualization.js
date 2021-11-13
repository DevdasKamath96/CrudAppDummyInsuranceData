
const region = document.getElementById('Region');
region.addEventListener('change', fetchData)


function fetchData(){

console.log(region.value)
let data = {'region': region.value}
fetch('/api/visual', {
    method: 'post',
    body: JSON.stringify(data)
  }).then(r => r.json())
    .then(resp => {
      premiumCount = resp.count
      month = resp.month
      console.log(premiumCount)
      console.log(month)
      chartjs_update(premiumCount,month)
    
    })
}


 
    
// function chartjs(premiumCount,month) {

const ctx = document.getElementById('myChart').getContext('2d');
var barchart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['January', 'Febraury', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [{
            label: 'Premium count per Month for the Year 2018',
            data: [99, 101, 76, 200, 100, 100, 100, 100, 126, 95, 79, 24],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(200, 192, 192, 0.2)',
                'rgba(150, 192, 192, 0.2)',
                'rgba(100, 192, 192, 0.2)',
                'rgba(200, 50, 192, 0.2)',
                'rgba(200, 100, 192, 0.2)',
                'rgba(200, 100, 50, 0.2)',
                'rgba(75, 50, 192, 0.2)',
                'rgba(100, 150, 200, 0.2)',
                'rgba(50, 150, 50, 0.2)',

            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(200, 192, 192, 1)',
                'rgba(150, 192, 192, 1)',
                'rgba(100, 192, 192, 1)',
                'rgba(200, 50, 192, 1)',
                'rgba(200, 100, 192, 1)',
                'rgba(200, 100, 50, 1)',
                'rgba(75, 50, 192, 1)',
                'rgba(100, 150, 200, 1)',
                'rgba(50, 150, 50, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {    
      scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

function chartjs_update(premiumCount,month) {
    barchart.data.datasets[0].data = premiumCount
    barchart.data.labels = month
    barchart.update()
}


    // }