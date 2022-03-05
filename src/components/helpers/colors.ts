function RGBToHex(r:number, g:number, b:number,a=null) {
    let alpha = ""
    let red = r.toString(16);
    let green = g.toString(16);
    let blue = b.toString(16);
    if(a !== null){
        alpha = Math.round(a * 255).toString(16);
    }
  
    if (red.length == 1)
      red = "0" + red;
    if (green.length == 1)
      green = "0" + green;
    if (blue.length == 1)
      blue = "0" + blue;

    if(a !== null && alpha.length == 1){
        alpha= "0" + alpha;
    }
    
    return a !== null ? "#" + red + green + blue + alpha :  "#" + red + green + blue;
}


function calcColor(color:string, percent:number){
    let R = parseInt(color.substring(1,3),16);
    let G = parseInt(color.substring(3,5),16);
    let B = parseInt(color.substring(5,7),16);

    R = parseInt((R * (100 + percent) / 100).toString());
    G = parseInt((G * (100 + percent) / 100).toString());
    B = parseInt((B * (100 + percent) / 100).toString());

    R = (R<255)?R:255;  
    G = (G<255)?G:255;  
    B = (B<255)?B:255;  

    let RR = ((R.toString(16).length==1)?"0"+R.toString(16):R.toString(16));
    let GG = ((G.toString(16).length==1)?"0"+G.toString(16):G.toString(16));
    let BB = ((B.toString(16).length==1)?"0"+B.toString(16):B.toString(16));

    return "#"+RR+GG+BB;
}


export { calcColor}

export default {RGBToHex, calcColor}