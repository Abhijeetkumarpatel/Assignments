const CONVINIENT_FEES = 99;
let bagItemObject;
onLoad();

function onLoad(){
  loadBagItemObjects();
  displayBagItems();
  bagSummary();
}

function loadBagItemObjects(){
   bagItemObject = bagItemList.map(itemID =>{
    for(let i = 0; i < itemList.length; i++){
      if (itemID == itemList[i].id){
        return itemList[i];
      }
    }
  });
}

function displayBagItems(){
    let containerItemElement = document.querySelector('.bag-items-container');
    let innerhtml = '';
    bagItemObject.forEach(bagitem => {
        innerhtml += generateItemHTML(bagitem);
    });
    containerItemElement.innerHTML = innerhtml;
}

function removeFromBag(bagItemId){
  bagItemList = bagItemList.filter(Item => Item != bagItemId);
  console.log(bagItemObject);
  console.log(bagItemId);
  
  localStorage.setItem('bagItem',JSON.stringify(bagItemList));
  loadBagItemObjects();
  displayBagItems();
  bagItemCount();
  bagSummary();
}

function generateItemHTML(item){
    return `<div class="bag-item-container">
    <div class="item-left-part">
      <img class="bag-item-img" src="${item.image}">
    </div>
    <div class="item-right-part">
      <div class="company">${item.company}</div>
      <div class="item-name">${item.itmeName}</div>
      <div class="price-container">
        <span class="current-price">Rs ${item.price.currentPrice}</span>
        <span class="original-price">Rs ${item.price.originalPrice}</span>
        <span class="discount-percentage">(${item.price.discount}% OFF)</span>
      </div>
      <div class="return-period">
        <span class="return-period-days">${item.return_period} days</span> return available
      </div>
    </div>

    <div class="remove-from-cart" onclick="removeFromBag(${item.id});">X</div>
  </div>`;
}

function bagSummary(){
  let bagSummaryElement = document.querySelector('.bag-summary');

  let totalItem = bagItemList.length;
  let totalMRP = 0;
  let totalDiscount = 0;

  bagItemObject.forEach(item => {
    totalMRP += item.price.originalPrice;
    totalDiscount += item.price.originalPrice - item.price.currentPrice;
  });

  let finalPayment = totalMRP - totalDiscount + CONVINIENT_FEES;

  bagSummaryElement.innerHTML = `
  <div class="bag-details-container">
    <div class="price-header">PRICE DETAILS (${totalItem} Items) </div>
    <div class="price-item">
      <span class="price-item-tag">Total MRP</span>
      <span class="price-item-value">₹${totalMRP}</span>
    </div>
    <div class="price-item">
      <span class="price-item-tag">Discount on MRP</span>
      <span class="price-item-value priceDetail-base-discount">-₹${totalDiscount}</span>
    </div>
    <div class="price-item">
      <span class="price-item-tag">Convenience Fee</span>
      <span class="price-item-value">₹99</span>
    </div>
    <hr>
    <div class="price-footer">
      <span class="price-item-tag">Total Amount</span>
      <span class="price-item-value">₹${finalPayment}</span>
    </div>
  </div>
  <button class="btn-place-order">
    <div class="css-xjhrni">PLACE ORDER</div>
  </button>`;
}