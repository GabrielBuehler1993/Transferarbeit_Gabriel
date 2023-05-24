const redis = require("redis");
const publisher = redis.createClient({
    socket: {
        host:"localhost",
        port: 6379
    }

});
const messagesent = "yooo Whaddup";
(async function(){
    await publisher.connect();
    await publisher.publish("Channel-01", messagesent);
    console.log("Yoo dini nochricht isch raus");
    process.exit(0);
})();

