
let nam=parseInt(prompt("tinNam"));
if ( nam % 4 == 0 ) {
    if ( nam % 100 == 0 ) {
        if ( nam % 400 == 0 ) {
            alert("nam nhuan");
        } else {
            alert("khong nhuan");
        }
    } else {
        alert("nam nhuan");
    }
} else {
    alert("khong nhuan");
}
