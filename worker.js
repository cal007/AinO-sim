importScripts("simulation-core.js");

onmessage = function (e) {
    const { state, cfg, steps } = e.data;
    let s = state;
    for (let i = 0; i < steps; i++) {
        s = runTick(s, cfg);
    }
    postMessage(s);
};
