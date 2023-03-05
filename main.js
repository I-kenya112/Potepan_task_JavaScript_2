$(document).ready(function() {

  let result = 0; //計算結果 
  let disp = 0; //画面表示
  let num1 = 0; //左辺
  let num2 = 0; //右辺
  let click = null; //clickした値
  let calc = null; //演算子
  let point = false; //小数点


  function calcPlus() {
    result = Number(num1) + Number(num2);
    $("#disp").text(result);
  }
  function calcMinus() {
    result = Number(num1) - Number(num2);
    $("#disp").text(result);
  }
  function calcMultiplided() {
    result = Number(num1) * Number(num2);
    $("#disp").text(result);
  }
  function calcDivided() {
    result = Number(num1) / Number(num2);
    $("#disp").text(result);
  }

  $("#reset").on('click', function() {
    result = 0;
    disp = 0;
    num1 = 0;
    num2 = 0;
    click = null;
    calc = null;
    point = false;
    $("#disp").text(disp);
  });

  $("#equal").on('click', function() {
    if (calc == "+") {
      if(num1 == 0 || num2 == 0) {
        alert("まずは数字を入力してね");
      } else {
        calcPlus();
        calc = null;
        num1 = result;
        num2 = 0;
      }
    } else if (calc == "-") {
      if(num1 == 0 || num2 == 0) {
        alert("まずは数字を入力してね");
      } else {
        calcMinus();
        calc = null;
        num1 = result;
        num2 = 0;
      } 
    } else if (calc == "*") {
      if(num1 == 0 || num2 == 0) {
        alert("まずは数字を入力してね");
      } else {
        calcMultiplided();
        calc = null;
        num1 = result;
        num2 = 0;
      } 
    } else if (calc == "/") {
      if(num1 == 0 || num2 == 0) {
        alert("まずは数字を入力してね");
      } else {
        calcDivided();
        calc = null;          
        num1 = result;
        num2 = 0;
      }
    } else {
      alert("四則演算子が選ばれてないよ");
    }
  });

  $(".calc").on('click', function() {
    if (calc != null && num2 != null) return

    if (calc == null) {
      disp = $("#disp").text();
      click = $(this).text();
      calc = click;
      disp += calc;
      point = false;
    } else {
      click = $(this).text();
      calc = click;
      disp = disp.slice(0,-1);
      disp += calc;
    }
    $("#disp").text(disp);
  });

  $(".num").on('click', function() {
    disp = $("#disp").text();
    click = $(this).text();

    if (result != 0) {
      disp = click;
      result = 0;
      num1 = 0;
      num2 = 0;
      calc = null;
    } 
  
    if(num1 == 0) {
      if (click == 0 || 00) {
        ;
      } else if (point == true) {
        disp += click;
        num1 += click;
      } else {
        disp = click;
        num1 = click;
      }
    } else if (calc != null && num2 == 0) {
      if (click == 0 || 00) {
        ;
      } else if (point == true) {
        disp += click;
        num2 += click;
      } else {
        disp += click;
        num2 = click;
      }
    } else {
      if (calc == null) {
        num1 += click;
        disp += click;
      } else {
        num2 += click;
        disp += click;
      }
    }
    $("#disp").text(disp);
  });

  $("#point").on('click', function() {
    disp = $("#disp").text();
    click = $(this).text();
    if (result != 0) {
      disp = 0
      disp += click;
      result = 0;
      num1 = 0;
      num1 += click;
      num2 = 0;
      calc = null;
      point = true;
    } 

    if (point == false && calc == null) {
      point = true;
      disp += click;
      num1 += click;
    } else if (point == false && calc != null) {
      let beforePoint = disp.slice(-1);
      point = true;
      if ( beforePoint == ("+" || "-" || "*" || "/")) {
        disp += "0.";
        num2 += "0.";
      } else {
        disp += click;
        num2 += click;
      }
    }
    $("#disp").text(disp);
  });
  

});