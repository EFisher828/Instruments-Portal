const tempAndRHData = 'https://raw.githubusercontent.com/EFisher828/Instruments-Portal/main/tempAndRH-10-5.csv';
function tempAndRH() {
    Highcharts.chart('tempAndRH', {
        chart: {
            type: 'spline',
            zoomType: 'x'
        },
        title: {
            text: 'Temperature and Dew Point'
        },
        data: {
            csvURL: tempAndRHData,
        },
        series: [{
          color: 'red'
        },{
          color: 'green'
        }]
    });
}
tempAndRH();

const solarRadData = 'https://raw.githubusercontent.com/EFisher828/Instruments-Portal/main/solarRad-10-5.csv';
function solarRad() {
    Highcharts.chart('solarRad', {
        chart: {
            type: 'spline',
            zoomType: 'x'
        },
        title: {
            text: 'Solar Radiation'
        },
        data: {
            csvURL: solarRadData,
        },
        series: [{
          color: '#ffe75e'
        }]
    });
}
solarRad();
