const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: "#57e0e0",
        borderColor: ["#57e0e0"],
        borderWidth: 1,
      },
    ],
  },
  options: {
    plugins: {
      legend: false,
    },
    title: {
      display: true,
      text: "",
    },
    tension: 0.4,
    scales: {
      x: {
        ticks: {
          display: false,
        },
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          display: false,
        },

        grid: {
          display: false,
        },
      },
    },
  },
});
