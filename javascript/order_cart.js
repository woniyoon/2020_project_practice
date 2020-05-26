var cart = [
    {
        name: "아이스 아메리카노",
        price: 4100,
        size: "tall",
        amount: 1,
    },
    {
        name: "아이스 라떼",
        price: 4500,
        size: "tall",
        amount: 1,
    },
    {
        name: "돌체라떼",
        price: 4500,
        size: "tall",
        amount: 1,
    },
];

$(document).ready(function(){

    show_items();
});

function show_items(){
    var cart_items = $("div.items_container");
    var items_html = "";

    if(cart.length > 0) {
        cart.forEach(function(item, index){
            items_html += ("<div id='"+index+"' class='card'>"
                            + "<img src='/assets/icedamericano.png' width='200px' height='220px'>"
                                + "<div id='card_text' >"
                                    + "<h3>"+item.name+"</h3>"
                                    + "<label>"+item.price+"원</label>"
                                    + "<label>"+item.size+"</label>"
                                    + "<label>수량</label><input id='"+index+"' onchange='update_amount(this)' type='number' value='"+item.amount+"' min='0' >"
                                    +"<p><button id='"+index+"' onclick='remove_item(this.id)'>삭제</button></p>"
                                + "</div>"
                            +"</div>"
                        )
        });

        console.log(cart);
    } else {
        var items_html = "<span>장바구니가 비어있어요!</span>"
    }

    cart_items.html(items_html);
}

function remove_item(index){
    console.log(index);
    cart.splice(index, 1);

    console.log(cart);
    // $("div#" + index).remove();
    show_items();
}

function update_amount(card_obj){
    var amount = card_obj.value;

    console.log("input number amount changed: " + amount);
    if(amount == 0) {
        remove_item(card_obj.id);
    }
}
