import axios from 'axios';
function uploadToDB() {
  console.log('Uploading to DB.');
}

axios
  .get('https://www.cryptocompare.com/api/data/coinlist')
  .then(response => {
    // //////////////////
    const getCoins = coinTemplate`<div col-sm-3 col-md-6>${
      response.data
    }${() => {
      uploadToDB();
    }}</div>`; //Finish this line. it needs 1. tags 2.ajax data, and 3. callback to uploadToDB()
    // //////////////////

    document.querySelector('#add-button').addEventListener('click', () => {
      let coin = document.querySelector('#coin').value.toUpperCase();
      let radios = document.getElementsByName('desire');
      // we cant map, because this is a nodelist, not an array. Good old for loop.
      let domEl;
      for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
          domEl = `#${radios[i].id}-content`;
          break;
        }
      }
      getCoins(coin, domEl); //this line is all set. It calls the function returned by your tag
    });
  })
  .catch(error => {
    console.log('ERROR!!!');
    console.log(error);
  });

var coinTemplate = function(elems, coinData, callback) {
  return (coin, location) => {
    try {
      const {
        BaseImageUrl,
        Data: { [coin]: coinname }
      } = coinData;
      const coinHtml = `
${elems[0]}
<h3><a href="${BaseImageUrl}${coinname['Url']}">${coinname['CoinName']}</a></h3>
<div><img src="${BaseImageUrl}${coinname['ImageUrl']}"/></div>
<h3>${coinname['Algorithm']}</h3>

${elems[1]}
`;
      document.querySelector(location).innerHTML += coinHtml;
      callback();
    } catch (error) {
      console.log(error);
    }
  };
};
