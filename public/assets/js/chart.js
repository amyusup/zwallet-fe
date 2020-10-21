var ctx = document.getElementById("myChart").getContext("2d");
var myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [{
      label: "# of Votes",
      data: [10, 4, 6, 7, 5, 8, 6],
      barThickness: 15,
      backgroundColor: [
        "rgba(99, 121, 244, 1)",
        "rgba(99, 121, 244, 1)",
        "rgba(157, 166, 181, 1)",
        "rgba(157, 166, 181, 1)",
        "rgba(157, 166, 181, 1)",
        "rgba(99, 121, 244, 1)",
        "rgba(157, 166, 181, 1)",
      ],
      hoverBackgroundColor: [
        "rgba(99, 121, 244, 1)",
        "rgba(99, 121, 244, 1)",
        "rgba(157, 166, 181, 1)",
        "rgba(157, 166, 181, 1)",
        "rgba(157, 166, 181, 1)",
        "rgba(99, 121, 244, 1)",
        "rgba(157, 166, 181, 1)",
      ],
    }, ],
  },
  options: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: "+Rp65.000",
      fontColor: "rgba(30, 193, 95, 1)",
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          display: false,
        },
        gridLines: {
          display: false,
        },
      }, ],
      xAxes: [{
        ticks: {
          beginAtZero: true,
        },
        gridLines: {
          display: false,
        },
      }, ],
    },
  },
});