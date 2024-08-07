const renderChart = () => {
    getChartData();
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: chartData.days,
        datasets: [
          {
            label: ' — Temperature, C°',
            backgroundColor: 'rgb(255, 107, 8)',
            borderColor: 'rgb(255, 107, 8)',
            data: chartData.temp,
            fill: false,
          },
          {
            label: ' —  Humidity, %',
            backgroundColor: 'rgb(10, 6, 234)',
            borderColor: 'rgb(10, 6, 234)',
            data: chartData.humidity,
            fill: false,
          },
          {
            label: ' —  Speed, m/s',
            backgroundColor: 'rgb(235, 155, 5)',
            borderColor: 'rgb(235, 155, 5)',
            data: chartData.speed,
            fill: false,
          },
          {
            label: ' —  Pressure, m/m',
            backgroundColor: 'rgb(5, 120, 6)',
            borderColor: 'rgb(5, 120, 6)',
            data: chartData.pressure,
            fill: false,
          },
        ],
      },
  
      options: {
        title: {
          display: true,
          text: 'Value of indicators',
          position: 'left',
        },
        legend: {
          display: true,
          align: 'start',
  
          labels: {
            boxWidth: 13,
            boxHeight: 12,
            defaultFontColor: 'rgb(5, 120, 6)',
            padding: 10,
          },
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                color: 'rgba(255, 255, 255, 0.541)',
              },
              ticks: {
                padding: 20,
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                color: 'rgba(255, 255, 255, 0.541)',
                stepSize: 0.5,
                zeroLineColor: 'rgba(255, 255, 255, 0.541)',
              },
              ticks: {
                padding: 18,
              },
            },
          ],
        },
        responsive: true,
        maintainAspectRatio: false,
      },
    });
  };