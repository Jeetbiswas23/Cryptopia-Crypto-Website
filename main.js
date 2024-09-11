var bit = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var dog = document.getElementById("dogecoin");

const url = 'https://api.kraken.com/0/public/Ticker?pair=XBTUSD,ETHUSD,DOGEUSD';

fetch(url)
  .then(response => response.json()) 
  .then(data => {
    const result = data.result;
    
    // Extract prices
    const bitcoinPrice = result.XXBTZUSD.a[0];
    const ethereumPrice = result.XETHZUSD.a[0];
    const dogecoinPrice = result.XDGUSD.a[0];

    // Display only the prices in HTML elements
    bit.innerHTML = `$${bitcoinPrice}`;
    eth.innerHTML = `$${ethereumPrice}`;
    dog.innerHTML = `$${dogecoinPrice}`;
  })
  .catch(error => {
    console.log('Error fetching data:', error);
  });
