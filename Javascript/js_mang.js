function myFunction() {
    const cars = ["BMW", "FORD", "Audi", "Mazda"];
    let text = "";
    for (let i = 0; i < cars.length; i++) {
        text += cars[i] + "<br>";
    }
    document.getElementById("demo").innerHTML = text;
    const xe = { ten: "Fortuner", mauson: "Blue", bienso: "51A" }
    document.write(xe.ten + '\u00A0' + xe.mauson + '\u00A0' + xe.bienso);


}