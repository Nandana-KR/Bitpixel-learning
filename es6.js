const order = {
  id: "ORD-1042",
  status: "shipped",
  customer: {
    name: "Nandana",
    email: "nandana@example.com",
    password: "secret123",
    address: { city: "Kochi", pin: "682001" },
  },
  items: [
    { name: "Notebook", price: 120, qty: 2 },
    { name: "Pen", price: 20, qty: 5 },
  ],
};

function getOrderHeader({ id, status }) {
  return `${id} is ${status}`;
}

console.log(getOrderHeader(order));

console.log("-----Shipping city--------")
function getShippingCity(order) {
  const { customer: { address: { city } } } = order;
  return `city is ${city}`;
}
console.log(getShippingCity(order));

console.log("-----Delivery note: default--------")
function deliveryNote({ customer: { Note = "No note" } }) {
  return `delivery note is ${Note}`;
}

console.log(deliveryNote(order));

console.log("-----Except password--------")
function getPublicCustomer(order) {
  const { customer: { password, ...publicCustomer } } = order
  return publicCustomer;
}

console.log(getPublicCustomer(order));

console.log("-----Items:Map--------");
function getItemMap({ items }) {
  const itemMap = items.map(({ name, price, qty }) => `${name}*${qty}=${price * qty}`)
  return itemMap;
}
console.log(getItemMap(order));

console.log("-----Rest--------");
function getOrderTotal(...prices) {
  let total = 0;
  prices.forEach((price) => {
    total = total + price;
  });
  return total;
}
console.log(getOrderTotal(20, 30));


function getOrderAmount({ items }) {
  const linetotal = items.map(({ price, qty }) => price * qty);
  return getOrderTotal(...linetotal);
}
console.log(getOrderAmount(order));

console.log("-----spread-------");
function markDelivered(order) {
  return { ...order, status: "delivered" };
}
const delivered = markDelivered(order);
console.log(delivered);
console.log(delivered.status);
console.log(order.status);   