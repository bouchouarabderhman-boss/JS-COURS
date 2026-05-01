import data from "./data.json" assert { type: "json" };

console.log(data);
console.log(JSON.stringify(data));
try {
    // code
    let a = -7;
    let b = 10;
    if (a < 0 || b < 0) {
        throw new Error("Les deux nombres doivent être positives");
    }
    let s = a + b;
    console.log(s);
    console.log("test1");
} catch (err) {
    // error
    console.log("test2");
    console.log(err);

} finally {
    console.log("test3");
}
console.log("code");
console.log("code");
console.log("code");
console.log("code");
console.log("code");
console.log("code");
