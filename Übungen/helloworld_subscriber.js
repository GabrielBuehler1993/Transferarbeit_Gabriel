const redis = require("redis");
const subscriber = redis.createClient({
    socket: {
        host:"localhost",
        port: 6379
    }

});
(async function(){
    await subscriber.connect();
    subscriber.subscribe("Channel-01", (message)=>{ 
        console.log(message);});
    
    
})();