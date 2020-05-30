var cart = [
    {
        name: "아이스 아메리카노",
        price: 4100,
        size: "tall",
        amount: 1,
        shots: 2,
    },
    {
        name: "아이스 아메리카노",
        price: 4100,
        size: "tall",
        amount: 1,
        shots: 2,
    },
    {
        name: "아이스 라떼",
        price: 4500,
        size: "tall",
        amount: 1,
        shots: 2,
    },
    {
        name: "돌체라떼",
        price: 4500,
        size: "tall",
        amount: 1,
        shots: 2,
    },
];

var size_dictionary = { tall: "톨", grande: "그란데", venti: "벤티" };

$(document).ready(function(){
    show_items();
});

function show_items(){
    var cart_items = $("div.items_container");
    var items_html = "";
    
    if(cart.length > 0) {
        cart.forEach(function(item, index){
            items_html += ("<div id='"+index+"' class='card'>"
                            +"<p><button id='"+index+"' onclick='remove_item(this.id)'>×</button></p>"
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
                                            + "<li><label>커피</label><input id='shot"+index+"' onchange='update_shot(this)' type='number' value='2' min='1' max='5' ></li>"
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
                                            // + "<li><label>수량</label><input id='"+index+"' onchange='update_amount(this)' type='number' value='"+item.amount+"' min='0' ></li> <br/>"
                                        + "</ul>"
                                + "</div>"
                                +"</div>"
                                + "<span class='price' id='price"+index+"' align='right'>"+(item.price * item.amount)+"원</span>"
                            +"</div>"
                        )
        });


        console.log(cart);
    } else {
        var items_html = "<span>장바구니가 비어있어요!</span>"
    }

    cart_items.html(items_html + "<hr>");
}

function remove_item(index){
    var size = cart[index].size;
    snackBar(size_dictionary[size]+" 사이즈 "+cart[index].name+"가 삭제됐습니다!");

    cart.splice(index, 1);

    console.log(cart);
    // $("div#" + index).remove();
    show_items();
}

// TODO: 수량은 계산할 필요 없는 것 같음...

// function update_amount(card_obj){
//     console.log(card_obj);
//     var amount = card_obj.value;
//     var index = card_obj.id;

//     console.log("input number amount changed: " + amount);
//     if(amount == 0) {
//         remove_item(card_obj.id);
//     } else {
//         cart[index].amount = amount;
//         var price_span = document.getElementById("price"+index);
//         price_span.innerHTML = amount * cart[index].price;
//     }
// }


function update_shot(card_obj){
    var shots = card_obj.value;
    var index = card_obj.id.substr(4);

    if(shots == 5) {
        snackBar("에스프레소 샷은 최대 5개 입니다!");
    } 

    var price_span = document.getElementById("price"+index);
    var original_price = Number((price_span.innerHTML).replace("원", ""));

    // 장바구니에 있는 커피의 샷 수와 현재 선택한 샷 수를 비교
    if(cart[index].shots > shots) {
        price_span.innerHTML = (original_price - 500) +"원";
    } else {
        price_span.innerHTML = (original_price + 500) +"원";
    }

    cart[index].shots = shots;
}


function snackBar(msg) {
    $("#snackbar").html(msg);

    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}