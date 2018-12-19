google.charts.load('current', {'packages':['corechart']});

google.charts.setOnLoadCallback(drawDurationBarChart);
google.charts.setOnLoadCallback(drawFromSheet);

function drawDurationBarChart() {
            var data = google.visualization.arrayToDataTable([
                ['Date', '<=5 mins', '5~10 mins', '10~20 mins', '20~30 mins', '>30 mins'],
                ['Regular Weekday', 3007, 3141, 1080, 1633, 592],
                ['Regular Weekend', 1894, 2242, 1132, 975, 1195],
                ['Thanksgiving Day', 2354, 2232, 779, 1421, 422],
                ['Black Friday', 649, 864, 512, 485, 597],
                ['Christmas Eve', 563, 581, 257, 419, 221],
                ['Christmas Day', 240, 325, 160, 169, 147]
            ]);
            
            var options = {
                isStacked: 'percent',
                legend: {textStyle: {fontSize: 10}},
                colors:['#C9DFF9','#89B7E6', '#72A3C9', '#5385B2', '#2A498A'],
                chartArea: { width: "70%", height: "90%" }
            };
            
            var chart = new google.visualization.BarChart(document.getElementById('DurationBar'));
            chart.draw(data, options);
        };

function drawFromSheet() {
    parseData('https://docs.google.com/spreadsheets/d/1aoE0GAUOjmTxkAH1yjSsbjGandFRAR-qIzjROjLP42c',
             'A1:G25',
             lineFunction);
    
    parseData('https://docs.google.com/spreadsheets/d/14rhOhB5ehjl6JNJ8SOUGx8m7Y3bBaW6s-R6W7K1YNrg',
             'A1:C25',
             areaFunction1);
    
    parseData('https://docs.google.com/spreadsheets/d/1iu_G99Td1Lig2Y4D7UFngCzLSPvAcdfHQiQ-t_Quxis',
             'A1:C25',
             areaFunction2);
    
    parseData('https://docs.google.com/spreadsheets/d/1aqhS1PZZo2UfA86ypzdAkF9mBaVkaSln9Riu9ZHTVTY',
             'A1:C25',
             areaFunction3);
    
    parseData('https://docs.google.com/spreadsheets/d/1pN9guF3DC3ALKpzizAbWSO8pWebSf1QVFy1koUr2CeY',
             'A1:C25',
             areaFunction4);
    
};

function parseData(dataURL, range, responseFunction){
    var query = new google.visualization.Query(
          dataURL+'/gviz/tq?/gid=0&headers=1&range='+range);
    query.send(responseFunction);
};

function lineFunction(response) {
    var data = response.getDataTable();
    
    var options = {
        curveType: 'function',
        series: {
            0: { lineDashStyle: [5, 5],
               lineWidth: 3},
            1: { lineDashStyle: [5, 5],
               lineWidth: 3},
            2: { lineWidth: 4 },
            3: { lineWidth: 4 },
            4: { lineWidth: 4 },
            5: { lineWidth: 4 }
        },
        colors: ['#5EBBD2', '#00BA80', '#C9DFF9', '#89B7E6', '#5385B2', '#2A498A'],
        legend: { position: 'right',
                textStyle: {fontSize: 10}},
        vAxis: {
            title: 'Number of Rides'
        },
        chartArea: { width: "60%", height: "90%" }
        };
    
    var chart = new google.visualization.LineChart(document.getElementById('line'));
    chart.draw(data, options);
};

function areaFunction1(response) {
    var data = response.getDataTable();
    var options = {
        legend: {position: 'none'},
        title: 'Thanksgiving',
        isStacked: 'relative',
        vAxis: {minValue: 0, 
               ticks: [0, 0.25, 0.5, 0.75, 1],
               format:'#%'},
        colors:['#0A49A1','#8FC6EF'],
        chartArea: {width:'75%',height:'75%'}
        };

        var chart = new google.visualization.AreaChart(document.getElementById('area1'));
        chart.draw(data, options);
};

function areaFunction2(response) {
    var data = response.getDataTable();
    var options = {
        legend: {position: 'none'},
        title: 'Black Friday',
        isStacked: 'relative',
        vAxis: {minValue: 0, 
               ticks: [0, 0.25, 0.5, 0.75, 1],
               format:'#%'},
        colors:['#0A49A1','#8FC6EF'],
        chartArea: {width:'75%',height:'75%'}
        };

        var chart = new google.visualization.AreaChart(document.getElementById('area2'));
        chart.draw(data, options);
};

function areaFunction3(response) {
    var data = response.getDataTable();
    var options = {
        legend: {position: 'none'},
        title: 'Christmas Eve',
        isStacked: 'relative',
        vAxis: {minValue: 0, 
               ticks: [0, 0.25, 0.5, 0.75, 1],
               format:'#%'},
        colors:['#0A49A1','#8FC6EF'],
        chartArea: {width:'75%',height:'75%'}
        };

        var chart = new google.visualization.AreaChart(document.getElementById('area3'));
        chart.draw(data, options);
};

function areaFunction4(response) {
    var data = response.getDataTable();
    var options = {
        legend: {position: 'none'},
        title: 'Christmas Day',
        isStacked: 'relative',
        vAxis: {minValue: 0, 
               ticks: [0, 0.25, 0.5, 0.75, 1],
               format:'#%'},
        colors:['#0A49A1','#8FC6EF'],
        chartArea: {width:'75%',height:'75%'}
        };

        var chart = new google.visualization.AreaChart(document.getElementById('area4'));
        chart.draw(data, options);
};
