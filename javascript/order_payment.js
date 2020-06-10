$(document).ready(function(){
    var path = window.location.pathname;
    var current_state = path.substring(1, (path.length - 5));
    $("#"+current_state).css({"color": "white", "background-color": "green"})


    $("#payment_option > input[type='radio']").each(function(index, item){
        $(this).click(function(){
            console.log(this);

            var selectedOption = this.id;

            switch (selectedOption) {
                case "card":
                    console.log("카드결제!");
                    $("#payment_detail_left > img").attr("src","/assets/payment_card.png");
                    break;
                case "kakaopay":
                    $("#payment_detail_left > img").attr("src","/assets/payment_kakaotalk.png");
                    break;
                case "point":
                    $("#payment_detail_left > img").attr("src","/assets/payment_points.png");
                    break;
            }
            
        });
    });
    
});