
import boll from 'bollinger-bands';
import moment from 'moment';

fetch('https://raw.githubusercontent.com/jscriptcoder/datasets/master/shareprice.json')
.then(function(response) {
  return response.json();
})
.then(function(myJson) {
  let items = myJson[0].items;
  let dataset  = items.map((item) => {
    return {
      time: item[0] * 1000,
      value: Math.floor(item[1]),
    }
  });

  let bollingerDataSet = boll(dataset.map(item => item.value));

  let chart = items.map( (item, index) => [
    item[0] * 1000 , 
    item[1], 
  ]);
  paint(chart);


  let dates = dataset.map(item => item.time);
  console.log(chart);
});



function paint(data) {
    Highcharts.stockChart('container', {

        rangeSelector: {
            selected: 2
        },

        title: {
            text: 'GBP to USD Exchange Rate'
        },

        legend: {
            enabled: true
        },

        plotOptions: {
            series: {
                showInLegend: true
            }
        },

        series: [{
            type: 'line',
            id: 'aapl',
            name: 'AAPL Stock Price',
            data: data
        }, {
            type: 'bb',
            linkedTo: 'aapl'
        }]
    });
}