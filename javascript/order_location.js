$(document).ready(function(){
    var path = window.location.pathname;
    var current_state = path.substring(1, (path.length - 5));

    var usesOwnLocation = confirm("현재 위치를 이용하겠습니까?");
    
    var coords = getLocation(usesOwnLocation);

    var lat = coords.lat;
    var lng = coords.lng;

    $("#"+current_state).css({"color": "white", "background-color": "green"})

    var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
    var options = { //지도를 생성할 때 필요한 기본 옵션
        center: new kakao.maps.LatLng(lat, lng), //지도의 중심좌표.
        level: 3 //지도의 레벨(확대, 축소 정도)
    };
    
    var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

});

async function getLocation(usesOwnLocation){
    var coordinates = {
        "lat":33.450701, 
        "lng":126.570667
    };

    if(navigator.geolocation && usesOwnLocation) {
        navigator.geolocation.getCurrentPosition(await function(position) {
            coordinates.lng = position.coords.longitude;
            coordinates.lat = position.coords.latitude;
            // 위치를 가져오는데 성공할 경우
            console.log(coordinates.lng);
            console.log(coordinates.lat);
        }, function(error) {
            // 위치를 가져오는데 실패한 경우
            alert("현재 위치를 파악할 수 없습니다!");
            coordinates.lng = position.coords.longitude;
            coordinates.lat = position.coords.latitude;
        });
    } 

    console.log(coordinates)

    return coordinates;
}