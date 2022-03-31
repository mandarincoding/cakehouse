let cake_name = [
    "레드벨벳 케이크",
    "가나슈 케이크",
    "레인보우 크레이프",
    "체리콕",
    "초코 마시멜로 봉봉",
    "티라미수 크레이프",
    "레드벨벳 크레이프",
    "딸기크림 케이크",
    "딸기푸딩 치즈케이크",
    "자몽 생크림 케이크"
];
let cake_price = [
    '4500', '5300', '4800', '5000', '5000', '5300', '4800', '5100', '5800', '5000'
];
let cart = $('.cart');
let result = $('.result');
for(let i=0; i<10; i++){
    let cake_number = $('.cake'+i);
    (function(_i){
        cake_number.click(function(){
            if(cake_number.hasClass('on')){
                alert('이미 장바구니에 담긴 상품입니다');
            } else {
                cake_number.addClass('on');
                cart.append('<span class="name">'+cake_name[_i]+'</span><input id="num" type="number" value="1"><span class="price">'+cake_price[_i]+'</span><br>');
                result.text('합계 : '+calcTotal());
            }
        });
    })(i);
};
$(document).on('change input','.cart input[type="number"]',function(){
    let idx = cake_name.indexOf($.trim($(this).prev().text()));
    $(this).next().text(cake_price[idx]*$(this).val());
    result.text('합계 : '+calcTotal());
});
function calcTotal(){
    let total = 0;
    $('.cart .price').each(function(){
        total += Number($(this).text());
    });
    return total;
}