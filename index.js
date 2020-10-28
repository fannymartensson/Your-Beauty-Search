
function myFunction() {

  document.getElementById("valueOne").innerHTML = "";

  fetch('http://makeup-api.herokuapp.com/api/v1/products.json?brand=dior')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      appendData(data);
    })
    .catch(function (err) {
      console.log('error: ' + err);
    });

  function appendData(data) {
    var mainContainer = document.getElementById("valueOne");
    for (let i = 0; i < data.length; i++) {
      let div = document.createElement("p");
      div.innerHTML = " " + '<span class = "productText"> ' + data[i].brand + " " + data[i].name + '</span>' + " " + "<br>" + '<span class = "dollarText"> Price: ' + data[i].price + ' $ </span>' + "<br>" + '<span style="display:inline;"><img class ="productImg" src="' + data[i].image_link + '"></span>' + ""
      div.class = "productArea"
      mainContainer.appendChild(div);
    }
  }

}

function myFunctionTwo() {

  document.getElementById("valueOne").innerHTML = "";

  fetch('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      appendData(data);
    })
    .catch(function (err) {
      console.log('error: ' + err);
    });

  function appendData(data) {
    var mainContainer = document.getElementById("valueOne");
    for (let i = 0; i < data.length; i++) {
      let div = document.createElement("p");
      div.innerHTML = " " + '<span class = "productText"> ' + data[i].name + '</span>' + " " + "<br>" + '<span class = "dollarText"> Price: ' + data[i].price + ' $ </span>' + "<br>" + '<span style="display:inline;"><img class ="productImg" src="' + data[i].image_link + '"></span>' + ""
      div.class = "productArea"
      mainContainer.appendChild(div);
    }
  }

}

function myFunctionThree() {

  document.getElementById("valueOne").innerHTML = "";

  fetch('http://makeup-api.herokuapp.com/api/v1/products.json?brand=Nyx')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      appendData(data);
    })
    .catch(function (err) {
      console.log('error: ' + err);
    });

  function appendData(data) {
    var mainContainer = document.getElementById("valueOne");
    for (let i = 0; i < data.length; i++) {
      let div = document.createElement("p");
      div.innerHTML = " " + '<span class = "productText"> ' + data[i].brand + " " + data[i].name + '</span>' + " " + "<br>" + '<span class = "dollarText"> Price: ' + data[i].price + ' $ </span>' + "<br>" + '<span style="display:inline;"><img class ="productImg" src="' + data[i].image_link + '"></span>' + ""
      div.class = "productArea"
      mainContainer.appendChild(div);
    }
  }

}

function myFunctionFour() {

  document.getElementById("valueOne").innerHTML = "";

  fetch('http://makeup-api.herokuapp.com/api/v1/products.json?brand=Smashbox')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      appendData(data);
    })
    .catch(function (err) {
      console.log('error: ' + err);
    });


  function appendData(data) {
    var mainContainer = document.getElementById("valueOne");
    for (let i = 0; i < data.length; i++) {
      let div = document.createElement("p");
      div.innerHTML = " " + '<span class = "productText"> ' + data[i].brand + " " + data[i].name + '</span>' + " " + "<br>" + '<span class = "dollarText"> Price: ' + data[i].price + ' $ </span>' + "<br>" + '<span style="display:inline;"><img class ="productImg" src="' + data[i].image_link + '"></span>' + ""
      div.class = "productArea"
      mainContainer.appendChild(div);
    }
  }

}

function myFunctionFive() {

  document.getElementById("valueOne").innerHTML = "";

  fetch('http://makeup-api.herokuapp.com/api/v1/products.json?brand=nyx&product_category=lipstick')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      appendData(data);
    })
    .catch(function (err) {
      console.log('error: ' + err);
    });


  function appendData(data) {
    var mainContainer = document.getElementById("valueOne");
    for (let i = 0; i < data.length; i++) {
      let div = document.createElement("p");
      div.innerHTML = " " + '<span class = "productText"> ' + data[i].brand + " " + data[i].name + '</span>' + " " + "<br>" + '<span class = "dollarText"> Price: ' + data[i].price + ' $ </span>' + "<br>" + '<span style="display:inline;"><img class ="productImg" src="' + data[i].image_link + '"></span>' + ""
      div.class = "productArea"
      mainContainer.appendChild(div);
    }
  }

}











