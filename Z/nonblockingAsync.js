(()=>{
    const F = [];
    function fib(idx) {
        F.push(F[idx-2]+ F[idx-1]);
        setTimeout(fib, 0, idx+1);
    }
    F.push(0);
    F.push(1);
    fib(2);

    window.onload = function() {
        document.getElementById("btn").onclick = function() {
            console.log("here");
        }
    }
})();