
    var meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
    var f = new Date();
    let fechahoy = f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear();
    let total_casos_ca = 0;
    let total_muertos_ca = 0;
    let total_millon_ca = 0;

    // El Salvador
    fetch('https://coronavirus-19-api.herokuapp.com/countries/El%20Salvador')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        document.getElementById("sv-title").innerHTML = data.country;
        total_casos_ca += data.cases;
        total_muertos_ca += data.deaths;
        total_millon_ca += data.casesPerOneMillion;
        sv = ` <h4 class='text-dark mb-2   '>Casos:  </h4><h4 class='px-2 mb-2 bg-warning text-dark'>${data.cases}</h4>
        <h4 class=' text-dark mb-2'>Muertos:  </h4><h4 class='px-2  mb-2 bg-danger text-white'>${data.deaths}</h4>
        <h4 class=' text-dark mb-2'>Casos por millon:  </h4><h4 class=' px-2  mb-2 bg-primary text-white'>${data.casesPerOneMillion}</h4>`;
        document.getElementById("sv-casos").innerHTML = sv;
        document.getElementById("sv-principal").innerHTML = data.cases;

      });

        // Guatemala
    fetch('https://coronavirus-19-api.herokuapp.com/countries/Guatemala')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      document.getElementById("gt-title").innerHTML = data.country;
      total_casos_ca += data.cases;
      total_muertos_ca += data.deaths;
      total_millon_ca += data.casesPerOneMillion;
      gt =   ` <h4 class='text-dark mb-2   '>Casos:  </h4><h4 class='px-2 mb-2 bg-warning text-dark'>${data.cases}</h4>
      <h4 class=' text-dark mb-2'>Muertos:  </h4><h4 class='px-2  mb-2 bg-danger text-white'>${data.deaths}</h4>
      <h4 class=' text-dark mb-2'>Casos por millon:  </h4><h4 class=' px-2  mb-2 bg-primary text-white'>${data.casesPerOneMillion}</h4>`;
      document.getElementById("gt-casos").innerHTML = gt;

    });

    // Honduras
    fetch('https://coronavirus-19-api.herokuapp.com/countries/Honduras')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      document.getElementById("hn-title").innerHTML = data.country;
      total_casos_ca += data.cases;
      total_muertos_ca += data.deaths;
      total_millon_ca += data.casesPerOneMillion;
      hn =  ` <h4 class='text-dark mb-2   '>Casos:  </h4><h4 class='px-2 mb-2 bg-warning text-dark'>${data.cases}</h4>
      <h4 class=' text-dark mb-2'>Muertos:  </h4><h4 class='px-2  mb-2 bg-danger text-white'>${data.deaths}</h4>
      <h4 class=' text-dark mb-2'>Casos por millon:  </h4><h4 class=' px-2  mb-2 bg-primary text-white'>${data.casesPerOneMillion}</h4>`;
      document.getElementById("hn-casos").innerHTML = hn;

    });


     // Costa Rica
     fetch('https://coronavirus-19-api.herokuapp.com/countries/Costa%20Rica')
     .then((response) => {
       return response.json();
     })
     .then((data) => {
       console.log(data);
       document.getElementById("cr-title").innerHTML = data.country;
       total_casos_ca += data.cases;
       total_muertos_ca += data.deaths;
       total_millon_ca += data.casesPerOneMillion;
       cr =  ` <h4 class='text-dark mb-2   '>Casos:  </h4><h4 class='px-2 mb-2 bg-warning text-dark'>${data.cases}</h4>
       <h4 class=' text-dark mb-2'>Muertos:  </h4><h4 class='px-2  mb-2 bg-danger text-white'>${data.deaths}</h4>
       <h4 class=' text-dark mb-2'>Casos por millon:  </h4><h4 class=' px-2  mb-2 bg-primary text-white'>${data.casesPerOneMillion}</h4>`;
       document.getElementById("cr-casos").innerHTML = cr;
 
     });

      // Nicaragua
      fetch('https://coronavirus-19-api.herokuapp.com/countries/Nicaragua')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        document.getElementById("nc-title").innerHTML = data.country;
        total_casos_ca += data.cases;
        total_muertos_ca += data.deaths;
        total_millon_ca += data.casesPerOneMillion;
        nc =  ` <h4 class='text-dark mb-2   '>Casos:  </h4><h4 class='px-2 mb-2 bg-warning text-dark'>${data.cases}</h4>
        <h4 class=' text-dark mb-2'>Muertos:  </h4><h4 class='px-2  mb-2 bg-danger text-white'>${data.deaths}</h4>
        <h4 class=' text-dark mb-2'>Casos por millon:  </h4><h4 class=' px-2  mb-2 bg-primary text-white'>${data.casesPerOneMillion}</h4>`;
        document.getElementById("nc-casos").innerHTML = nc;
  
      });

       // Panama
       fetch('https://coronavirus-19-api.herokuapp.com/countries/Panama')
       .then((response) => {
         return response.json();
       })
       .then((data) => {
         console.log(data);
         document.getElementById("pn-title").innerHTML = data.country;
         total_casos_ca += data.cases;
         total_muertos_ca += data.deaths;
         total_millon_ca += data.casesPerOneMillion;
         bl = `
         <strong class='p-3 mb-2 bg-info text-white'>Casos:  </strong><strong class='p-3 mb-2 bg-warning text-dark'>${data.cases}</strong><br/><br/>
         <strong class='p-3 mb-2 bg-info text-white'>Muertos:  </strong><strong class='p-3 mb-2 bg-danger text-white'>${data.deaths}</strong><br/><br/>
         <strong class='p-3 mb-2 bg-info text-white'>Casos por millon:  </strong><strong class='p-3 mb-2 bg-primary text-white'>${data.casesPerOneMillion}</strong>`;
         document.getElementById("pn-casos").innerHTML = bl;
   
       });



          // Total
          fetch('https://coronavirus-19-api.herokuapp.com/countries/Panama')
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log(data);
            document.getElementById("total-title").innerHTML = "Total casos COVID Centro America";
      
            total = `
        <strong class='p-3 mb-2 bg-info text-white'>Total casos:  </strong><strong class='p-3 mb-2 bg-warning text-dark'>${total_casos_ca}</strong><br/><br/>
        <strong class='p-3 mb-2 bg-info text-white'>Total muertos:  </strong><strong class='p-3 mb-2 bg-danger text-white'>${total_muertos_ca}</strong><br/><br/>
        <strong class='p-3 mb-2 bg-info text-white'>Casos por millon:  </strong><strong class='p-3 mb-2 bg-primary text-white'>${total_millon_ca}</strong>`;
        document.getElementById("total-casos").innerHTML = total;
      
          });