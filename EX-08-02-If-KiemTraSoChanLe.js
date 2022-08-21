var tin= prompt ("Enter a number: ");
if (tin>0) {
    if (tin%2==0){
        alert("Day la so duong chan");
    }else {
        alert("Day la so duong le");
    }
} else if (tin == 0) {
    alert(" Day la so 0");
}else {
    if (tin%2==0){
        alert("Day la so am chan");
    } else {
        alert("Day la so am le");
    }
}