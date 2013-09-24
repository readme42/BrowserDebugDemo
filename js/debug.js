console.log("hello world");

console.time("Logging document");
console.group("%cLogging document", "font-size: x-large" );

    console.warn("console.log(document)");
    console.log(document);

    console.warn("console.dir(document)");
    console.dir(document);

console.groupEnd();
console.timeEnd("Logging document");

console.group("%cnested logging", "font-size: x-large");
for (var x=0; x<2; x++) {
    console.group("x%i",x);
    for (var y=0; y<2; y++) {
        console.group("x%iy%i",x,y);
        console.error("x%iy%i %s",x,y,"has no content");
        console.groupEnd();
    }
    console.groupEnd();
}
console.groupEnd();

debugger;


