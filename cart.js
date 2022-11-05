const cart = {
  items: [],
  getItems() {
    return this.items;
  },
  add(product) {
    for (const item of this.items) {
      //   console.log(item);

      if (item.name === product.name) {
        item.quantity += 1;
        return;
      }
    }

    const newProduct = {
      ...product,
      quantity: 1,
    };
    this.items.push(newProduct);
  },
  remove(productName) {
    const { items } = this;
    for (let i = 0; i < items.length; i += 1) {
      const { name } = items[i];

      if (productName === name) {
        console.log("Знайшли такий продукт:", productName);
        console.log(i);
        items.splice(i, 1);
      }
    }
  },
  clear() {
    this.items = [];
  },
  countTotalPrice() {
    const { items } = this;
    let total = 0;

    for (const { price } of items) {
      total += price;
    }
    return total;
  },
  increaseQuantity(productName) {
    for (let i = 0; i < this.items.length; i += 1) {
      if (productName === this.name) {
        this.items.push(productName);
        console.log(productName);
      }
    }
  },
  decreaseQuantity(productName) {},
};

console.table(cart.getItems());

cart.add({ name: "apple", price: 50 });
cart.add({ name: "apple", price: 50 });
cart.add({ name: "apple", price: 50 });
cart.add({ name: "orange", price: 60 });
cart.add({ name: "strawberry", price: 80 });
cart.add({ name: "peach", price: 100 });
cart.add({ name: "orange", price: 60 });
cart.add({ name: "orange", price: 60 });
cart.add({ name: "strawberry", price: 80 });

console.table(cart.getItems());

// cart.remove("apple");
console.table(cart.getItems());

// cart.clear();
// console.log(cart.getItems());

console.log("Total:", cart.countTotalPrice());
console.table(cart.increaseQuantity());
