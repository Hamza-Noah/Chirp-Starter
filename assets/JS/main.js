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
        borderColor: "#57e0e0",
        borderWidth: 1,
        tension: 0.4,
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

document.querySelectorAll(".unclickable").forEach((element) =>
  element.addEventListener("click", (event) => {
    event.preventDefault();
    return event.stopPropagation();
  })
);

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
      },
      768: {
        items: 2,
        autoplay: true,
      },
      1000: {
        items: 3,
      },
    },
  });
});
