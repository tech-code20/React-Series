
function mun() {
    fetch(`https://api.currencyapi.com/v3/latest?apikey=cur_live_wFoV4okVqEX9XOFUKpposD5EYCDiYcsEP3TpSluN`)
    .then((res) => res.json)
    .then((res) => {
        let data = res.data
        console.log(data)
    })
};
mun();
