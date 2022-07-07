const ctx = document.getElementById("myChart").getContext("2d");
const gradientBg = ctx.createLinearGradient(0, 10, 0, 20);
// const gradientFill = ctx.createLinearGradient(0, 10, 0, 20);

gradientBg.addColorStop(0, "rgba(29, 161, 242, 0)");
gradientBg.addColorStop(.5, "rgba(29, 161, 242, .1)");
gradientBg.addColorStop(1, "rgba(29, 161, 242, .2)");

const myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        type: "bar",
        label: "Bar Dataset",
        data: [10, 25, 20, 40],
        borderRadius: 10,
        backgroundColor: [
          "transparent",
          gradientBg,
          "transparent",
          "transparent",
        ],
      },
      {
        label: "# of Votes",
        data: [7, 19, 10, 14, 8, 22, 30],
        backgroundColor: "rgba(87, 224, 224, .2)",
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
    title: {
      display: true,
      text: "",
    },
    scales: {
      x: {
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
    title: {
      display: true,
      text: "Chart.js Combined Line/Bar Chart",
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
