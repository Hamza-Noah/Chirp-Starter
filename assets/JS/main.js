const ctx = document.getElementById("myChart").getContext("2d");
const gradientBg = ctx.createLinearGradient(0, 100, 0, 200);
const gradientFill = ctx.createLinearGradient(0, 10, 0, 400);

gradientBg.addColorStop(0, "rgba(29, 161, 242, .7)");
gradientBg.addColorStop(1, "rgba(29, 161, 242, 0.1)");

gradientFill.addColorStop(0, "rgba(87, 224, 224, 1)");
gradientFill.addColorStop(1, "rgba(87, 224, 224, 0)");

const myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        type: "bar",
        data: [0, 25, 0, 0],
        borderRadius: 10,
        backgroundColor: gradientBg,
      },
      {
        data: [7, 19, 10, 14, 8, 22, 30],
        backgroundColor: gradientFill,
        borderColor: "#57e0e0",
        borderWidth: 1,
        tension: 0.4,
        fill: true,
      },
      
    ],
  },
  
  options: {
    maintainAspectRatio: false,
    plugins: {
      legend: false,
    },

    scales: {
      x: {
        beginAtZero: true,
        stacked: true,
        ticks: {
          display: false,
        },
        grid: {
          display: false,
        },
      },
      y: {
        stacked: true,
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

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: false,
    margin: 10,
    nav: false,
    dots: false,

    responsive: {
      0: {
        items: 1,
        autoplay: true,
        dots: true,
      },
      768: {
        items: 2,
        autoplay: true,
        dots: true,
      },
      1000: {
        items: 3,
      },
    },
  });
});
