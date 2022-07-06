var ctx = document.getElementById('myChart');


var marksData = {
  labels: ["Junior Programmer", "Data Structures", "Web Development", "iOS Development", "Interview Prep", "Networking"],
  datasets: [
  /*  {
      label: "Martha",
      backgroundColor: "#FFF17644",
      borderColor: "black",
      borderWidth: 1,
      data: [65, 75, 70, 80, 60, 80]
    },
    */{
      label: "Ryan",
      backgroundColor: "#8E24AA44",
      borderColor: "black",
      borderWidth: 1,
      data: [20, 20, 30, 0, 20, 50]
    }
  ]
};

var chartOptions = {
  plugins: {
    title: {
      display: true,
      align: "start",
      text: "Better Every Day."
    },
    legend: {
      align: "start"
    }
  },
  scales: {
    r: {
      pointLabels: {
        font: {
          size: 20
        }
      }
    }
  }
};
var radarChart = new Chart(ctx, {
    type: 'radar',
    data: marksData,
    options: chartOptions
});
