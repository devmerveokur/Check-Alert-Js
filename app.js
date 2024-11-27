let isim = prompt("Lütfen isim girin");
let tcNo = prompt("Tc kimlik no girin");

function kontrol(isim,tcNo){
    if(isim != ""){
        if(tcNo.length == 11){
            alert("İsim ve Tc Kimlik Numarası Başarılı Girildi");
        }else{
            alert("Tc Kimlik Numarasını 11 haneli olacak şekilde girin");
        }
    }else{
        alert("İsim Boş Geçilemez");
    }
}

kontrol(isim,tcNo);
