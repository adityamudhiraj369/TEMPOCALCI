// var temp=document.getElementById("tempid");
// var date=document.getElementById("dateid");
// var form=document.getElementById("formid")
// var result=document.getElementById("resultid");
// var kelvin=document.getElementById("kid");
// var farenheit=document.getElementById("fid");

// form.addEventListener('submit',function(event)
// {
//     event.preventDefault();

//     var temp1=parseFloat(temp.value);
//     kelvin.innerText="hello";
//     var f=(temp1*(9/5))+32;
//     fid.innerText="FARENHEIT:"+f+ "/-";

    

// });

document.getElementById("formid").addEventListener('submit', function(event) {
    event.preventDefault();

    var temp = parseFloat(document.getElementById("tempid").value);
    var kelvin = document.getElementById("kid");
    var fahrenheit = document.getElementById("fid");

    var date = document.getElementById("dateid").value;

    var f = (temp * (9 / 5)) + 32;
    var k = temp + 273.15;

    kelvin.innerText = "KELVIN: " + k.toFixed(2) + "K";
    fahrenheit.innerText = "FAHRENHEIT: " + f.toFixed(2) + "°F";
});
