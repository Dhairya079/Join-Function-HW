function getParagraph1(){
    var inputs=[];

    for(var i=1; i<=6;i++){
        inputs.push(document.getElementById("para1_input_box_"+i).value);
        document.getElementById("showParagraph1").innerHTML=inputs.join(" ");
    }
}
function getParagraph2(){
    var inputs2=[];

    for(var k=1; k<=6;k++){
        inputs2.push(document.getElementById("para2_input_box_"+k).value);
        document.getElementById("showParagraph2").innerHTML=inputs2.join(" ");
    }
}