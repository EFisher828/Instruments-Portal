var defaultData = 'https://raw.githubusercontent.com/EFisher828/Instruments-Portal/main/dataList-10-4.csv';
var urlInput = document.getElementById('fetchURL');
var pollingCheckbox = document.getElementById('enablePolling');
var pollingInput = document.getElementById('pollingTime');

function createChart() {
    Highcharts.chart('container', {
        chart: {
            type: 'spline',
            zoomType: 'x'
        },
        title: {
            text: 'FAIR Data'
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
            csvURL: defaultData,
            //complete: function(options) {
              //options.series = options.series.filter(data => data.name === 'Temperature')
              //options.series.splice(0, 1),
              //options.series.splice(0, 1)
            //},
        },
        series: [{
          color: 'red'
        },{
          color: 'green'
        }]
    });
}

urlInput = defaultData;

// We recreate instead of using chart update to make sure the loaded CSV
// and such is completely gone.

// Create the chart
createChart();
