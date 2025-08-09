export async function addItem(userCart, item) {
  if (!item || item.price <= 0 || item.quantity <= 0) {
    console.log("Item inválido. Verifique preço e quantidade.");
    return;
  }
  userCart.push(item);
}

export function removeItem(userCart, name) {
  const index = userCart.findIndex(i => i.name.toLowerCase() === name.toLowerCase());
  if (index >= 0) {
    userCart.splice(index, 1);
    console.log(`Item "${name}" removido do carrinho.`);
  } else {
    console.log(`Item "${name}" não encontrado.`);
  }
}

export function updateItemQuantity(userCart, name, newQuantity) {
  const item = userCart.find(i => i.name.toLowerCase() === name.toLowerCase());
  if (!item) {
    console.log(`Item "${name}" não encontrado.`);
    return;
  }
  if (newQuantity <= 0) {
    console.log("Quantidade inválida. Use um valor maior que 0.");
    return;
  }
  item.quantity = newQuantity;
  console.log(`Quantidade do item "${name}" atualizada para ${newQuantity}.`);
}

export function applyDiscount(userCart, percentage) {
  if (percentage <= 0 || percentage > 100) {
    console.log("Porcentagem de desconto inválida.");
    return;
  }
  const factor = 1 - percentage / 100;
  userCart.forEach(item => {
    item.price = +(item.price * factor).toFixed(2);
  });
  console.log(`Desconto de ${percentage}% aplicado ao carrinho.`);
}

export function calculateTotal(userCart) {
  return userCart.reduce((total, item) => total + item.subtotal(), 0);
}
