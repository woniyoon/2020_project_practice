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
                            +"<div class='card_detail_conatiner'>"
                                + "<img src='/assets/icedamericano.png'>"
                                + "<div id='card_text' >"
                                    + "<h3>"+item.name+"</h3>"
                                        +"<ul>"
                                            + "<li><label>사이즈</label>"
                                                +"<select name='size'>"
                                                    + "<option value='tall' checked>톨</option>"
                                                    + "<option value='grande'>그란데</option>"
                                                    + "<option value='venti'>벤티</option>"
                                                + "</select></li>"
                                            + "<li><label>커피</label><input type='number' value='2' min='1' max='5' ></li>"
                                            + "<li><label>얼음</label>"
                                                +"<select name='ice'>"
                                                    + "<option name='ice' value='1' checked>적게</option>"
                                                    + "<option name='ice' value='2'>보통</option>"
                                                    + "<option name='ice' value='3'>많이</option>"
                                                + "</select></li>"
                                            + "<li><label>시럽</label>"
                                                +"<select name='syrup'>"
                                                    + "<option name='syrup' value='none' checked>없음</option>"
                                                    + "<option name='syrup' value='classic'>클래식시럽</option>"
                                                    + "<option name='syrup' value='vanilla'>바닐라시럽</option>"
                                                    + "<option name='syrup' value='hazelnut'>헤이즐넛시럽</option>"
                                                + "</select></li>"
                                            + "<li><label>수량</label><input id='"+index+"' onchange='update_amount(this)' type='number' value='"+item.amount+"' min='0' ></li> <br/>"
                                        + "</ul>"
                                + "</div>"
                                +"<p><button id='"+index+"' onclick='remove_item(this.id)'>삭제</button></p>"
                                +"</div>"
                                + "<span class='price' align='right'>"+(item.price * item.amount)+"원</span>"
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
    console.log(card_obj);
    var amount = card_obj.value;

    console.log("input number amount changed: " + amount);
    if(amount == 0) {
        remove_item(card_obj.id);
    } else {
        cart[card_obj.id].amount = amount;
        show_items();   // 좋은 방법인지 모르겠음....
    }
}


//TODO: set the new value for shots depending on changed size option