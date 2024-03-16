let sunshine = 0;
let rain = 0;
let nutrients = 0;

let valSun = 0;
let valRain = 0;
let valNtr = 0;

let Sun = 0;
let Rain = 0;
let Nutrients = 0;

function addFx(fx) {
    Sun = sunshine;
    Rain = rain;
    Nutrients = nutrients;
    if (fx == "sun") {
        sunshine += 2;
        rain -= 1;
        console.log(Sun);
        document.getElementById('sun').value = Sun;
    } else if (fx == "rain") {
        rain += 2;
        nutrients -= 1;
        console.log(Rain);
        document.getElementById('rain').value = Rain;
    } else if (fx == "ntr") {
        nutrients += 2;
        sunshine -= 1;
        console.log(Nutrients);
        document.getElementById('ntr').value = Nutrients;
    }
}

function mean(n1, n2, n3) {
    return (n1 + n2 + n3) / 3;
}

let wellness = mean(Sun, Rain, Nutrients)

