let bagItemList; 
onLoad();

function onLoad(){
    let bagItemStr = localStorage.getItem('bagItem');
    bagItemList = bagItemStr ? JSON.parse(bagItemStr) : []; 
    displayHomeItems();
    bagItemCount();
} 


function addToBagItem (itemId){
    bagItemList.push(itemId);
    localStorage.setItem('bagItem',JSON.stringify(bagItemList));
    bagItemCount();
}

function bagItemCount(){
    let bagItemCountElement = document.querySelector('.bag-item-count');
    if (bagItemList.length > 0 ){
        bagItemCountElement.innerText = bagItemList.length;
        bagItemCountElement.style.visibility = 'visible ';
    }
    else{
        bagItemCountElement.style.visibility = 'hidden';
    }
}


function displayHomeItems(){
    let containerElement = document.querySelector('.main-container');
    let html = '';
    if(!containerElement){
        return;
    }
    itemList.forEach((item) =>{
    html+=`<div class="item-container">
    <div class="img-container">
    <img class="image" src="${item.image}" alt="item-image">
    </div>
    <div class="rating">${item.rating.stars}⭐ | ${item.rating.noOfReviews}</div>
    <div class="company-name">${item.company}</div>
    <div class="itme-name">${item.itmeName}</div>
    <div class="price">
    <span class="curren-price">${item.price.currentPrice}</span>
    <span class="original-price">${item.price.originalPrice}</span>
    <span class="discount">${item.price.discount}% OFF</span>
    </div>
    <button class="add-toBag-btn" onclick="addToBagItem(${item.id})">Add to Bag</button>
    </div>`;
});
containerElement.innerHTML = html;
}