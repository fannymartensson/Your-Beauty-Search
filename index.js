fetch('http://makeup-api.herokuapp.com/api/v1/products.json')
  .then(response => response.json())
  .then(result => {
    console.log(result)
  })