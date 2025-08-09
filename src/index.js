import * as cartService from "./services/cart.js";
import createItem from "./services/item.js";

const myCart = [];

console.log("Welcome to your Shopee Cart!");

// Criando itens
const item1 = await createItem("Hotwheels Ferrari", 20.99, 1);
const item2 = await createItem("Hotwheels Lamborghini", 39.99, 3);

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

displayCart(myCart);

// Testando novas funções
cartService.updateItemQuantity(myCart, "Hotwheels Ferrari", 5);
cartService.removeItem(myCart, "Hotwheels Lamborghini");
cartService.applyDiscount(myCart, 10);

displayCart(myCart);

// Funções auxiliares
function displayCart(cart) {
  console.log("\n=== Seu Carrinho ===");
  if (cart.length === 0) {
    console.log("Carrinho vazio.");
    return;
  }
  cart.forEach((item, index) => {
    console.log(
      `${index + 1}. ${item.name} - ${formatCurrency(item.price)} x ${
        item.quantity
      } = ${formatCurrency(item.subtotal())}`
    );
  });
  console.log(`\nTotal: ${formatCurrency(cartService.calculateTotal(cart))}`);
}

function formatCurrency(value) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
