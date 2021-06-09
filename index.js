let otherItem = true
const listItem = []
while (otherItem) {
  const nameItem = prompt('Donner le nom du produit')
  const priceItem = Number(prompt('Donner le prix du produit'))
  const item = {
    name: nameItem,
    price: priceItem
  }
  listItem.push(item)

  otherItem = (prompt('Autre produit? O ou N?') === 'O')
}

console.log(listItem)

let sum = 0
for (const item of listItem) {
  sum = sum + item.price
}

console.log(sum)
