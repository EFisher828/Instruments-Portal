const tempAndRHData = 'https://raw.githubusercontent.com/EFisher828/Instruments-Portal/main/tempAndRH-10-4.csv';
function tempAndRH() {
    Highcharts.chart('tempAndRH', {
        chart: {
            type: 'spline',
            zoomType: 'x'
        },
        title: {
            text: 'Temperature and Dew Point'
        },
        accessibility: {
            announceNewData: {
                enabled: true,
                minAnnounceInterval: 15000,
                announcementFormatter: function (allSeries, newSeries, newPoint) {
                    if (newPoint) {
                        return 'New point added. Value: ' + newPoint.y;
                    }
                    return false;
                }
            }
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

const solarRadData = 'https://raw.githubusercontent.com/EFisher828/Instruments-Portal/main/solarRad-10-4.csv';
function solarRad() {
    Highcharts.chart('solarRad', {
        chart: {
            type: 'spline',
            zoomType: 'x'
        },
        title: {
            text: 'Solar Radiation'
        },
        accessibility: {
            announceNewData: {
                enabled: true,
                minAnnounceInterval: 15000,
                announcementFormatter: function (allSeries, newSeries, newPoint) {
                    if (newPoint) {
                        return 'New point added. Value: ' + newPoint.y;
                    }
                    return false;
                }
            }
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
