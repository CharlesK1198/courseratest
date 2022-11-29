// var company = new Object();
// company.name = "BarSoft";
// company.ceo = new Object();
// company.ceo.firstName = "Charles";
// company.ceo.favColor = "Green";

// console.log(company);
// console.log("Company CEO favorite color is: " + company.ceo.favColor);
// console.log(company["name"]);
// company["stock of company"] = 110;
// console.log(company);
// console.log("Price of stock is: " + company["stock of company"]);

// ---------Simpler way of creating objects

var barsoft = {
    name: "Barsoft",
    ceo: {
        firstName: "Charles",
        favColor: "Green"
    },
    "Stock of company": 110
};

console.log(barsoft);
console.log(barsoft.ceo.firstName);


