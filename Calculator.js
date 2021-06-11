function dis(val) {
    document.getElementById("result").value += val;
}

function solve() {
    let x = document.getElementById("result").value
    if (x.substr(0, 3) == "sin") {
        var matches = x.match(/(\d+)/);
        document.getElementById("result").value = Math.sin(matches[0]);
    } else if (x.substr(0, 3) == "cos") {
        var matches = x.match(/(\d+)/);
        document.getElementById("result").value = Math.cos(matches[0]);
    } else if (x.substr(0, 3) == "tan") {
        var matches = x.match(/(\d+)/);
        document.getElementById("result").value = Math.tan(matches[0]);
    } else if (x.substr(0, 3) == "abs") {
        var matches = x.match(/(\d+)/);
        document.getElementById("result").value = Math.abs(matches[0]);
    } else if (x.substr(0, 3) == "log") {
        var matches = x.match(/(\d+)/);
        document.getElementById("result").value = Math.log(matches[0]);
    } else if (x.substr(0, 4) == "log2") {
        var matches = x.match(/(\d+)/);
        document.getElementById("result").value = Math.tan(matches[1]);
    } else if (x.substr(0, 5) == "log10") {
        var matches = x.match(/(\d+)/);
        document.getElementById("result").value = Math.tan(matches[2]);
    } else if (x.substr(1, 1) == "^") {

        document.getElementById("result").value = Math.pow(x[0], x[2]);
    } else {
        let y = eval(x)
        document.getElementById("result").value = y;
    }

}

function clr() {
    document.getElementById("result").value = "";
}

function PI() {

    let a = document.getElementById("result").value
    let b = eval("a*Math.PI");
    document.getElementById("result").value = b;

}

function square() {
    let a = document.getElementById("result").value
    let b = Math.pow(a, 2);
    document.getElementById("result").value = b;
}

function sqrt() {
    let a = document.getElementById("result").value
    let b = Math.sqrt(a);
    document.getElementById("result").value = b;
}

function cube() {
    let a = document.getElementById("result").value
    let b = Math.pow(a, 3);
    document.getElementById("result").value = b;
}

function cbrt() {
    let a = document.getElementById("result").value
    let b = Math.cbrt(a);
    document.getElementById("result").value = b;
}