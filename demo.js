var getLogger = require("./index");

var logger = getLogger("my-namespace");

// logs strings
logger.debug("The MOST verbose!");
logger.info("Some important info");
logger.warn("All the warnings to you");
logger.error("OH NO! SOMETHING HAPPENED!");

// supports util.format!
logger.info("%s style!", "printf");

// log anything
logger.debug({ my: "obj" });
logger.info([1, 2, 3]);

// somewhere else
logger.on("info", function (msg) {
  // do something with msg
});

// must be handled to avoid crashing process
logger.on("error", function (msg) {
  // now it won't crash
});
