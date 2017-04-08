                 
                             
var yearVar = document.getElementById("yearChart");
var yearChart = new Chart(yearVar, {
    type: 'bar',
    data: {
        labels: ["2016", "2017", "2018", "2019"],
        datasets: [{
            label: 'Expected year of graduation',
            data: [13, 34, 25, 6],
            backgroundColor: [
                '#AEC2F2',
                '#8DAAEF',
                '#253B70',
                '#2F5ABB'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 0
        }]
    },
    options: {
        title: {
            display: true,
            fontSize: 14,
            fontFamily: 'HK Grotesk',
            fontStyle: 'normal',
            padding: 20,
            text: 'Expected year of graduation'
        },
        gridLines: {
            display: false
        },
        ticks: {
            display: false
        },
        scales: {
            yAxes: [{
                display: false
            }]
        },
        legend: {
            display: false,
            position: 'bottom',
            labels: {
                fontFamily: 'HK Grotesk'
            }
        }
    }
});



/*var useVar = document.getElementById("useChart");
var useChart = new Chart(useVar, {
    type: 'pie',
    data: {
        labels: ["Yes", "No"],
        datasets: [{
            label: 'Lionshare Use',
            data: [67, 11],
            backgroundColor: [
                '#2F5ABB',
                '#8DAAEF'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 0
        }]
    },
    options: {
        title: {
            display: true,
            fontSize: 14,
            fontFamily: 'HK Grotesk',
            fontStyle: 'normal',
            padding: 20,
            text: 'Used Lionshare before?'
        },
        legend: {
            display: true,
            position: 'bottom',
            labels: {
                fontFamily: 'HK Grotesk'
            }
        }
    }
});*/


var successVar = document.getElementById("successChart");
var successChart = new Chart(successVar, {
    type: 'pie',
    data: {
        labels: ["Yes", "No", "No, but I've applied"],
        datasets: [{
            label: 'Lionshare job success',
            data: [28, 31, 19],
            backgroundColor: [
                '#2F5ABB',
                '#8DAAEF',
                '#253B70'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 0
        }]
    },
    options: {
        title: {
            display: true,
            fontSize: 16,
            fontFamily: 'HK Grotesk',
            fontStyle: 'normal',
            padding: 20,
            text: 'Found a job via Lionshare?'
        },
        legend: {
            display: true,
            position: 'bottom',
            labels: {
                fontFamily: 'HK Grotesk'
            }
        },
        animation: {
            animation: true,
            animationSteps: 60,
            animationEasing: "easeInElastic",
            onAnimationComplete: null
        }
        
    }
});






