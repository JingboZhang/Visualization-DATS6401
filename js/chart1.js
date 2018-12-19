
        google.charts.load('current', {'packages':['corechart']});

        google.charts.setOnLoadCallback(drawCountBarChart);
        google.charts.setOnLoadCallback(drawBubble);
        google.charts.setOnLoadCallback(drawCountPie1);
        google.charts.setOnLoadCallback(drawCountPie2);
        google.charts.setOnLoadCallback(drawCountPie3);
        google.charts.setOnLoadCallback(drawCountPie4);
        google.charts.setOnLoadCallback(drawCountPie5);
        google.charts.setOnLoadCallback(drawCountPie6);
        
        
        function drawCountBarChart() {
            var data = google.visualization.arrayToDataTable([
                ['Date', 'Rides by Members', 'Rides by Casual Users'],
                ['Regular Weekday', 8113, 1340],
                ['Regular Weekend', 4875, 2563],
                ['Thanksgiving Day', 6243, 965],
                ['Black Friday', 1841, 1266],
                ['Christmas Eve', 1572, 469],
                ['Christmas Day', 713, 328]
            ]);
            
            var options = {
                legend: {position: 'top',
                        textStyle: {fontSize: 10}},
                bars: 'vertical',
                colors:['#0A49A1','#8FC6EF'],
                vAxis: {title: 'Number of Rides'},
                hAxis: {title: ''},
                chartArea: {width:'80%',height:'80%'}
            };
            
            var chart = new google.visualization.ColumnChart(document.getElementById('count_ride_bar'));
            chart.draw(data, options);
            
        };
        
        function drawBubble() {
            var data = google.visualization.arrayToDataTable([
                ['Date', 'Rides by Members', 'Rides by Casual Users', 'All Rides', 'All'],
                ['Regular Weekday', 8113, 1340, 9453, 9453],
                ['Regular Weekend', 4875, 2563, 7438, 7438],
                ['Thanksgiving Day', 6243, 965, 7208, 7208],
                ['Black Friday', 1841, 1266, 3107, 3107],
                ['Christmas Eve', 1572, 469, 2041, 2041],
                ['Christmas Day', 713, 328, 1041, 1041]
            ]);
            
            var options = {
                colorAxis: {minValue: 1000, 
                            maxValue: 10000,
                            colors: ['#5EBBD2', '#00BA80']},
                vAxis: {title: 'Rides by Casual Users'},
                hAxis: {title: 'Rides by Members'},
                chartArea: {width:'80%',height:'80%'}
            };
            
            var chart = new google.visualization.BubbleChart(document.getElementById('bubble'));
            chart.draw(data, options);
        };
        

        // Pie for Regular Weekday
        function drawCountPie1() { 
            
            var data = google.visualization.arrayToDataTable([
                ['Type', 'Avg Rides'],
                ['Members', 8113],
                ['Casual Users', 1340]
            ]);
            
            var options = {
                legend: 'none',
                colors:['#0A49A1','#8FC6EF'],
                fontSize: 9,
                chartArea: {left:5, width:'90%',height:'90%'}
            };
            
            var chart = new google.visualization.PieChart(document.getElementById('CountPie1'));
            chart.draw(data, options);
            
        };
        
        // Pir for Regular Weekend
        function drawCountPie2() { 
            
            var data = google.visualization.arrayToDataTable([
                ['Type', 'Avg Rides'],
                ['Members', 4875],
                ['Casual Users', 2563]
            ]);
            
            var options = {
                legend: 'none',
                colors:['#0A49A1','#8FC6EF'],
                fontSize: 9,
                chartArea: {left:5, width:'90%',height:'90%'}
            };
            
            var chart = new google.visualization.PieChart(document.getElementById('CountPie2'));
            chart.draw(data, options);
            
        };
        
        function drawCountPie3() { 
            
            var data = google.visualization.arrayToDataTable([
                ['Type', 'Avg Rides'],
                ['Members', 6243],
                ['Casual Users', 965]
            ]);
            
            var options = {
                legend: 'none',
                colors:['#0A49A1','#8FC6EF'],
                fontSize: 9,
                chartArea: {left:10, width:'90%',height:'90%'}
            };
            
            var chart = new google.visualization.PieChart(document.getElementById('CountPie3'));
            chart.draw(data, options);
            
        };
        
        function drawCountPie4() { 
            
            var data = google.visualization.arrayToDataTable([
                ['Type', 'Avg Rides'],
                ['Members', 1841],
                ['Casual Users', 1266]
            ]);
            
            var options = {
                legend: 'none',
                colors:['#0A49A1','#8FC6EF'],
                fontSize: 9,
                chartArea: {left:14, width:'90%',height:'90%'}
            };
            
            var chart = new google.visualization.PieChart(document.getElementById('CountPie4'));
            chart.draw(data, options);
            
        };
        
        function drawCountPie5() { 
            
            var data = google.visualization.arrayToDataTable([
                ['Type', 'Avg Rides'],
                ['Members', 1572],
                ['Casual Users', 469]
            ]);
            
            var options = {
                legend: 'none',
                colors:['#0A49A1','#8FC6EF'],
                fontSize: 9,
                chartArea: {left:10, width:'90%',height:'90%'}
            };
            
            var chart = new google.visualization.PieChart(document.getElementById('CountPie5'));
            chart.draw(data, options);
            
        };
        
        function drawCountPie6() { 
            
            var data = google.visualization.arrayToDataTable([
                ['Type', 'Avg Rides'],
                ['Members', 713],
                ['Casual Users', 328]
            ]);
            
            var options = {
                legend: 'none',
                colors:['#0A49A1','#8FC6EF'],
                fontSize: 9,
                chartArea: {left:4, width:'90%',height:'90%'}
            };
            
            var chart = new google.visualization.PieChart(document.getElementById('CountPie6'));
            chart.draw(data, options);
            
        };