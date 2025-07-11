(() => {
    const TESTS = [
        [
            () => window.self === window.top, "Please visit <a href='https://www.audiotool.com/app' target='_blank'>audiotool.com/app</a>"],
            [() => {
                const userAgent = navigator.userAgent;
                {
                    const match = /Firefox\/(\d+)/.exec(userAgent);
                    if (match && match.length === 2 && 65 <= match[1]) {
                        return true;
                    }
                }
                {
                    const match = userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
                    if (match && 2 <= match.length && 70 <= parseInt(match[2], 10)) {
                        return true;
                    }
                }
                return false;
            },
            "Audiotool only supports " +
            "<a href='https://www.google.com/chrome/'>Chrome</a> (+v70) or " +
            "<a href='https://www.mozilla.org/firefox/'>Firefox</a> (+v63) on desktop so far. <br>" + 
            "Until you're in front of a device that meets the necessary requirements, feel free to <a href=\"https://www.audiotool.com/browse/genres\">browse through your favorite genres</a> and jam out to the sounds created by other Audiotoolers"],
        [() => {
            try {
                window.localStorage;
                window.localStorage.getItem("-"); // Sentry #10567
            } catch (ignore) {
                return false;
            }
            return true;
        }, "Please enable cookies to run Audiotool."],
        [() => !!window.FontFace, // Sentry #10223
            "Your browser does not support the web-font-api."],
        [() => {
            try {
                return !!window.indexedDB;
            } catch (e) {
                return false;
            }
        }, "Your browser does not support indexedDB-api."],
        [() => !!(window.AudioContext && window.AudioContext.prototype.createGain),
            "Your browser does not support web-audio-api."],
        [() => {
            const canvas = document.createElement("canvas");
            canvas.width = 16;
            canvas.height = 16;
            const option = {
                preserveDrawingBuffer: true,
                premultipliedAlpha: false,
                alpha: false
            };
            let gl = canvas.getContext("webgl2", option);
            if (!gl) {
                gl = canvas.getContext("webgl", option);
                if (!gl) {
                    return false;
                }
            }
            const createShader = (type, source) => {
                const shader = gl.createShader(type);
                gl.shaderSource(shader, source);
                gl.compileShader(shader);
                return gl.getShaderParameter(shader, gl.COMPILE_STATUS);
            };
            if (!createShader(35633, "void main() { gl_Position = vec4(0, 0, 0, 1); }")) {
                return false;
            }
            if (!createShader(35632, "precision mediump float; void main() { gl_FragColor = vec4(0, 0, 0, 1); }")) {
                return false;
            }
            return true;
        }, "Your browser does not support WebGL. Consider update your GPU driver."]
    ];
    const ASYNC_TESTS = [
        (resolve, reject) => {
            if (!('indexedDB' in window)) {
                return reject("Your browser does not support indexed db.");
            } else {
                const openRequest = indexedDB.open("testing", 1)
                openRequest.onupgradeneeded = () => {
                    return resolve();
                };
                openRequest.onerror = err => {
                    console.info(err);
                    return reject(
                        "Your track database is corrupt. Please clear cookies / offline storage and try again. " +
                        "If the problem persist, try opening the app in an incognito window."
                    );
                };
                openRequest.onsuccess = () => {
                    resolve();
                };
            }
        },
        (resolve, reject) => {
            const img = document.createElement("img");
            img.onload = () => resolve();
            img.onerror = () => reject("Your browser does not support webp.");
            img.src = "data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAQAcJaQAA3AA/v3AgAA=";
        }
    ];
    const load = () => {
        const src = "./audiotool/app.js";
        const errorEventHandler = () => {
            const labelElement = document.querySelector(".booting label#label-info");
            if (labelElement) {
                labelElement.textContent = "update in progress • please wait";
            }
            const logoElement = document.querySelector(".booting svg.logo.javascript");
            if (logoElement) {
                logoElement.addEventListener("animationend", () => {
                    location.reload(true);
                });
            }
        };
        const scriptElement = document.createElement("script");
        scriptElement.id = "app";
        scriptElement.async = true;
        scriptElement.onload = () => {
            if (window.main) {
                Error.stackTraceLimit = Infinity;
                const bootError = document.querySelector(".boot-error");
                if (null !== bootError) {
                    bootError.remove();
                }
                main();
            } else {
                errorEventHandler();
            }
        };
        scriptElement.onerror = errorEventHandler;
        scriptElement.src = src;
        document.head.append(scriptElement);
    };
    const quitWithMessage = message => {
        document.querySelector("div.booting").remove();
        document.querySelector("body").classList.add("body-boot-error");
        document.querySelector("div.boot-error").classList.remove("hidden");
        document.querySelector("#message").innerHTML = message;
    };
    for (let test of TESTS) {
        if (!test[0]()) {
            quitWithMessage(test[1]);
            return;
        }
    }

    async function asyncTests() {
        for (let test of ASYNC_TESTS) {
            await new Promise(test);
        }
    }

    asyncTests()
        .then(() => load())
        .catch(message => quitWithMessage(message));
})();
