async function processOrder(stock) {
  try {
    const stockStatus = await checkStock(stock);
    console.log(stockStatus);
    console.log("Order processed");
  } catch (error) {
    console.log("Order failed due to insufficient stock");
  }
}

processOrder(8);
