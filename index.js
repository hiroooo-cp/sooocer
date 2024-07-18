// JavaScript Document

//ボタンを押すごとに画面が切り替わる関数
$(function () {

    $(".btn").on("click", function () {
      $(this).closest("div").css("display", "none");
      id = $(this).attr("href");
      $(id).addClass("fit").fadeIn("slow").show();
    });



//選択ボタンデータを配列に入れてカウントする関数

     let filterA =0; //box配列の0 ~ 2までを格納
     let filterB =0;　//box配列の3 ~ 5までを格納
     let filterC =0;　//box配列の6 ~ 8までを格納
      var box =[];

    $(".btn").each(function(){
      $(this).on('click',function(){
        var value = $(this).data("value");
         box.push(value);
         console.log(box)
         
         filterA = box[0] + box[1] + box[2];         
         filterB = box[3] + box[4] + box[5];
         filterC = box[6] + box[7] + box[8];
         
         console.log(filterA); //minValue = 6 ~ maxValue = 9
         console.log(filterB); //minValue = 6 ~ maxValue = 9
         console.log(filterC); //minValue = 6 ~ maxValue = 9
      }); 
    });

    $('.end').on('click',function(){
      if(filterA > filterB){
        $('#answer_01').css("display","")
      }else if(filterB > filterA) {
        $('#answer_02').css("display","")
      } else if(filterC > filterA){
        $('#answer_03').css("display","")
      } else if(filterA == filterB || filterA == filterC){
        $('#answer_04').css("display","")
      } else{
        $('#answer_05').css("display","")
      }
    })

});