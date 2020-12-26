function control(){
    if(document.getElementById("nam") == null) return alert("نام خود را وارد کنید");
    n = nam.toString() ;

    if(Meli()!=true) return;
     id = idnumber.toString();

    if(mobile()!=true) return;
    ph  = phonenumber.toString();

    if(document.getElementById("inputEmail") == null) return alert("ایمیل خود را وارد کنید");

    if(document.getElementById("Textarea")== null) return alert("متن خودر وارد کنید");

    return alert( n + "با کد ملی" + id + "و شماره همراه" + ph + "پیام شما ثبت شد");
}

function mobile()
{
    num=document.getElementById("phonenumber").value;
    a=code.toString();
    if(a.length != 10) return alert("تلفن همراه نامعتبر");
    return true;
}

function Meli()
{
    code=document.getElementById("idnumber").value;
    a=code.toString();
    if(a.length<8 || a.length>10) return  alert("کد ملی نا معتبر");
    if (a.length===8) a='00'+a;
    if (a.length===9) a='0'+a;
    var sum=0;

    for (let i = 0; i <= 8 ; i++) {
        sum += a[i]*(10-i)
    }
    b=sum%11;
    if(b<2 && b!=a[9]) return alert("کد ملی وارد شده صحیح نیست");
    if(b>2 && (11-b) != a[9] ) return alert("کد ملی وارد شده صحیح نیست");
    return true;
}
