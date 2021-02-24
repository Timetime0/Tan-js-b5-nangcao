function getEle(ele){
    return document.getElementById(ele);
}

getEle("btn1").addEventListener ("click", income);

function incomePriveTax(salary){
    var tax = 0;
    if (salary>0&&salary<=60){
        tax = 5;
    } else if (salary>60&&salary<=120){
        tax = 10;
    } else if (salary>120&&salary<=210){
        tax = 15;
    } else if (salary>210&&salary<=384){
        tax = 20;
    } else if (salary>384&&salary<=624){
        tax = 25;
    } else if (salary>624&&salary<=960){
        tax = 30;
    } else if (salary>=960){
        tax = 35;
    }
    return tax;
}

function income(){
    var name = getEle ("hoTen").value;
    var salarySumofYear = +getEle("tongLuong").value;
    var peopelDependOn = +getEle("soNguoi").value;
    var TaxableIncome = salarySumofYear - 4 - peopelDependOn*1.6;
    var tax = incomePriveTax(TaxableIncome);
    console.log(TaxableIncome);
    var personalIncome = TaxableIncome*tax/100;
    getEle("tb1").innerHTML = "Thuế thu nhập cá nhân của " + name + " là: " + personalIncome + " triệu "; 
}

// ________________________________________________
// Bài 2

getEle("btn2").addEventListener("click", cableMoney);

function cableMoney(){
    var maKH = getEle("maKh").value;
    var ketNoi = getEle ("soKetNoi").value;
    var soKenh = getEle ("soKenh").value;
    var khachhang = document.querySelectorAll("input[name]");
    var x = 0;
    if (khachhang[0].checked == true){
        x = 1;
    }else{x = 2;}

    console.log (x);
    var Money=calculated(x,ketNoi,soKenh);
    getEle("tb2").innerHTML = "Khách hàng: " + maKH + "<br> Tiền cáp: " + Money+ "$";
}


getEle("households").addEventListener("click", ham);
getEle("enterprise").addEventListener("click", ham);

// document.getElementsByName("khachhang").addEventListener("click", ham);

function ham()
{
    var khachhang = document.querySelectorAll("input[name]");
    // var khachhang = document.getElementsByName("khachhang");
    if (khachhang[0].checked == true){
        getEle("soKetNoi").disabled = true;
     } else{
         getEle("soKetNoi").disabled = false;
     }
}

function calculated (x,ketNoi,soKenh){
    var money = 0;
    var fees = 0
    if (x == 1){
        money = 4.5 + 20.5 + 7.5*soKenh;
    } else {
        if (ketNoi<=10){
            fees = 70;
        }else{
            fees = 70 + 5*(ketNoi-10);
        }
        money = 15 + 50*soKenh + fees;
        }
    return money;
}