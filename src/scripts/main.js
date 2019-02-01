// Total profit for 2017

// filter method b/c assumed there might be cars in there sold in other years -- turned out to be unneeded
const profits = cardealers.filter(car => car.purchase_date.includes("2017")).map(car => car.gross_profit).reduce((currentTotal,nextAmount) => currentTotal += nextAmount);

console.log(profits);

// In which month did they sell the most cars?

const months = ["01","02","03","04","05","06","07","08","09","10","11","12"];
let eachMonthProfit = [];
months.forEach(month => {
    const thisMonthProfit = cardealers.filter(car => car.purchase_date.includes(`-${month}-`)).map(car => car.gross_profit);
    let monthObject = {};
    monthObject.month = month;
    monthObject.profit = thisMonthProfit;
    eachMonthProfit.push(monthObject);
});
eachMonthProfit.forEach(element => {
    if (element.profit.length > 0) {
        element.totalprofit = element.profit.reduce((currentTotal,nextAmount) => currentTotal += nextAmount);
    } else {
        element.totalprofit = 0;
    }
});
eachMonthProfit.sort((a,b) => b.totalprofit - a.totalprofit);

console.log(eachMonthProfit[0]);

// Which salesperson sold the most cars?

const topSalesperson = array => {
    const salespeople = [];
    array.forEach(element => {
        const currentKey = element.sales_agent.last_name;
        if (salespeople.hasOwnProperty(currentKey)) {
            salespeople[currentKey]++;
        } else {
            salespeople[currentKey] = 1;
        };
    });
    const lastNames = Object.keys(salespeople);
    lastNames.sort((a,b) => {
        return salespeople[b] - salespeople[a];
    });
    const soldMostCars = cardealers.find(person => person.sales_agent.last_name === lastNames[0]);
    console.log(`The person who sold the most cars is ${soldMostCars.sales_agent.first_name} ${soldMostCars.sales_agent.last_name}. They sold ${salespeople[lastNames[0]]} cars.`);
};

topSalesperson(cardealers);

// Which salesperson made the most profit?
// Which model was the most popular?
// Which bank provided the most loans to our customers?