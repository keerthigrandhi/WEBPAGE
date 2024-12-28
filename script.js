// Get the canvas elements for the charts
const ctx1 = document.getElementById('eventsChart').getContext('2d');
const ctx2 = document.getElementById('interactionsChart').getContext('2d');

// Social Events Chart
new Chart(ctx1, {
  type: 'bar',
  data: {
    labels: ['Oct', 'Nov', 'Dec'],
    datasets: [
      { label: 'Facebook', data: [80, 60, 70], backgroundColor: 'blue' },
      { label: 'Twitter', data: [70, 50, 65], backgroundColor: 'lightblue' },
      { label: 'YouTube', data: [90, 55, 60], backgroundColor: 'red' }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top'
      }
    }
  }
});

// Social Interactions Chart
new Chart(ctx2, {
  type: 'line',
  data: {
    labels: Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`),
    datasets: [
      { label: 'YouTube', data: Array.from({ length: 30 }, () => Math.random() * 500), borderColor: 'red', fill: false },
      { label: 'Facebook', data: Array.from({ length: 30 }, () => Math.random() * 300), borderColor: 'blue', fill: false },
      { label: 'Twitter', data: Array.from({ length: 30 }, () => Math.random() * 200), borderColor: 'lightblue', fill: false }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top'
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Days'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Interactions'
        }
      }
    }
  }
});