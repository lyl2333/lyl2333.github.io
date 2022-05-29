var lastInfo = "";

function getGender() {
    var name = $("name").value;
    var birthdate = $("birthdate").value;
    if (name === "" || birthdate == "") {
        alert("请输入需要的信息!");
        return;
    }
    if (lastInfo != "" && lastInfo === name + birthdate) {
        alert("这个已经预测过了");
        return
    }
    lastInfo = name + birthdate;
    var t = $("gender");
    var gender = ["男", "女"][parseInt(Math.random() * 11451) % 2];
    if (gender === "男") {
        t.style.color = "blue";
    } else {
        t.style.color = "rgb(230, 81, 173)";
    }
    t.innerHTML = gender;
    $("res").style.display = "block";
    $("bt1").innerHTML = "再预测一个";
}

$("bt1").onclick = getGender;

function $(id) {
    return document.getElementById(id);
}