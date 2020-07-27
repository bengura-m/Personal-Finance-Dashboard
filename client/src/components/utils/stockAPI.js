import axios from "axios"


// axios({
//     "method":"GET",
//     "url":"https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-statistics",
//     "headers":{
//     "content-type":"application/octet-stream",
//     "x-rapidapi-host":"apidojo-yahoo-finance-v1.p.rapidapi.com",
//     "x-rapidapi-key":"43d993ffedmsh99ef2e1a86cfdf9p100046jsnaa81b3c2dd02",
//     "useQueryString":true
//     },"params":{
//     "region":"US",
//     "symbol":"AMRN"
//     }
//     })
//     .then((response)=>{
//       console.log(response)
//     })
//     .catch((error)=>{
//       console.log(error)
//     })

export default {
    // Get book from google search 
    getYahooFinanceStocks: function(query) {
        return axios({
            "method":"GET",
            "url": "https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-summary?q=",
            "headers":{
                "content-type":"application/octet-stream",
                "x-rapidapi-host":"apidojo-yahoo-finance-v1.p.rapidapi.com",
                "x-rapidapi-key":"43d993ffedmsh99ef2e1a86cfdf9p100046jsnaa81b3c2dd02",
                "useQueryString":true
                },"params":{
                "region":"US",
                "lang":"en"
                }
                })
                .then((response)=>{
                    console.log(response)
                })
                .catch((error)=>{
                    console.log(error)
                })

    },
    // Gets all books
    getStocks: function () {
        return axios.get("/stocks");
    },

    // Gets the book with the given id
    getStock: function (id) {
        return axios.get("/stocks/" + id);
    },

    // Saves a book to the database
    saveStock: function (SavedStocks) {
        return axios.post("/stocks/", SavedStocks);
    },

    // Deletes the book with the given id
    deleteStock: function (id) {
        return axios.delete("/stocks/" + id);
    }

}