{
  const item = {
    "name": "Avacado",
    "type": "Fruit",
    "category": "Food",
    "price": 200
  };

  // let applyCoupon = function(item) {
  //   return function(coupon) {
  //     item.price *= (100.0-coupon)/100.0;
  //     return item;
  //   }
  // }

  let applyCoupon = item => coupon => {
    let newItem = Object.create(item);
    newItem.price *= (100.0-coupon)/100.0;
    return newItem;
  }
  console.log(applyCoupon(item)(10).price);
  console.log(item);
};
