fetch('https://corona.lmao.ninja/v2/historical/El%20Salvador')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let casos = [];
    let cdates = [];
    let deaths = [];
    for (var clave in data.timeline.cases) {
      casos.push(data.timeline.cases[clave])
      cdates.push(clave)
    }

    for (var clave in data.timeline.deaths) {
      deaths.push(data.timeline.deaths[clave])
    }



    function cases(day) {
      return casos[casos.length - day];
    }

    function cdate(day) {
      return cdates[cdates.length - day];
    }

    function death(day) {
      return deaths[deaths.length - day];
    }

    const parametro = 15;
    total_casos = [];
    total_dates = [];
    total_deaths = [];

    //total de casos 
    for (let index = 0; index < parametro; index++) {

      total_casos.push(cases(1 + index))

    }
    // fechas de los casos
    for (let index = 0; index < parametro; index++) {

      total_dates.push(cdate(1 + index))

    }

    // total de muertes
    for (let index = 0; index < parametro; index++) {

      total_deaths.push(death(1 + index))

    }

    const total_casos_order = total_casos.reverse();
    const total_date_order = total_dates.reverse();
    const total_deaths_order = total_deaths.reverse();



    new Chart(document.getElementById("sv-char"), {
      type: 'line',
      data: {
        labels: total_date_order,

        datasets: [{
          data: total_casos_order,
          label: "Infectados",
          borderColor: "#3e95cd",
          fill: true
        }, {
          data: total_deaths_order,
          label: "Fallecidos",
          borderColor: "#8e5ea2",
          fill: false
        }
        ]
      },
      options: {

      }
    });

  });

