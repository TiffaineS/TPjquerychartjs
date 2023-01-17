$(document).ready(function() {
let numero = 1;
const duree = 1000;
const nombreSlides = 15;

  $("#suivant").click(function () {
    $("#slide" + numero).fadeOut(duree);
    numero = numero + 1;
    if (numero > nombreSlides) {
        numero = 1;
    }
    $("#slide" + numero).fadeIn(duree);
  });


  $("#precedent").click(function () {
    $("#slide" + numero).fadeOut(duree);
    numero = numero - 1;
    if (numero < 1) {
        numero = nombreSlides;
    }
    $("#slide" + numero).fadeIn(duree);
  });
})


let matiere1 = (12 + 16 + 7)/3;
let matiere2 = (19 + 8 + 8)/3;
let matiere3 = (3 + 4 + 10)/3;
let matiere4 = (15 + 11 + 20)/3;
let matiere5 = (2 + 12 + 19)/3;
let matiere6 = (6 + 17 + 14)/3;


const ctx = document.getElementById('chart');
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Mathématiques', 'Français', 'Histoire/Géographie', 'Physique/Chimie', 'Anglais', 'Espagnol'],
    datasets: [{
      type: 'bar',
      label: "Résultats de l'élève 1",
      data: [12, 19, 3, 15, 2, 6],
      borderWidth: 1,
    }, {
      type: 'bar',
      label: "Résultats de l'élève 2",
      data: [16, 8, 4, 11, 12, 17],
      borderWidth: 1
    },{
      type: 'bar',
      label: "Résultats de l'élève 3",
      data: [7, 8, 10, 20, 19, 14],
      borderWidth: 1
    },{
      type: 'bar', 
      label: "Moyenne de toutes les notes pour une matière",
      data: [matiere1, matiere2, matiere3, matiere4, matiere5, matiere6],
      borderWidth: 1
    },{
      type: 'line',
      label: 'Note moyenne sur 20',
      data: [10, 10, 10, 10, 10, 10],
    }
  ]
  },
  options: {
    layout: {
      padding: 10
  },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});


const ctx2 = document.getElementById('chart2');
new Chart(ctx2, {
  type: 'bar',
  data: {
    labels: ['Eleve 1', 'Eleve 2', 'Eleve 3'],
    datasets: [{
      type: 'bar',
      label: "Mathématiques",
      data: [12, 16, 7],
      borderWidth: 1,
    }, {
      type: 'bar',
      label: "Français",
      data: [19, 8, 8],
      borderWidth: 1
    },{
      type: 'bar',
      label: "Histoire/Géographie",
      data: [3, 4, 10],
      borderWidth: 1
    },{
      type: 'bar',
      label: "Physique/Chimie",
      data: [15,11,20],
      borderWidth: 1
    },{
      type: 'bar',
      label: "Anglais",
      data: [2,12,19],
      borderWidth: 1
    },{
      type: 'bar',
      label: "Espagnol",
      data: [6, 17, 14],
      borderWidth: 1
    }
  ]
  },
  options: {
    layout: {
      padding: 10
  },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

