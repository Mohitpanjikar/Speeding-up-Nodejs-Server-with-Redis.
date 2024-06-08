const client = require('./client');

async function init(){
    //setting the value -
    const result_name = await client.set("user:4","Rugved");
    console.log("result ->",result_name);

    const result = await client.get("user:3");
    console.log("result ->",result);

    const result_msg = await client.get("msg:1");
    console.log("result ->",result_msg);
}

init();