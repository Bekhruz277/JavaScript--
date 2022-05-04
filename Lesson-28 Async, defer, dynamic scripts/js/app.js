const p = document.querySelectorAll("p");
console.log("Hi...");



function scriptLoad (src) {
    const script = document.createElement("script");
    script.src = src;
    script.async = false;
    document.body.append(script);
};
scriptLoad("js/app2.js");
scriptLoad("js/app3.js")