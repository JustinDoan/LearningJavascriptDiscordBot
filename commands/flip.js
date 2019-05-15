const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }



module.exports = async function (message) {
    
    
    message.channel.send("Flipping Coin").then((message)=> {
        sleep(500).then(() => {
            message.edit('Flipping Coin.').then((message) => {
                sleep(500).then(()=>{
                    message.edit('Flipping Coin..').then((message)=> {
                        sleep(500).then(()=>{
                            message.edit('Flipping Coin...').then((message)=> {
                                sleep(500).then(()=>{

                                    let flip = Math.floor(Math.random() * Math.floor(2));
                                    let coin;
                                    if(flip){
                                        coin = "Heads"
                                    } else {
                                        coin = "Tails"
                                    }
                                    message.edit("It was " + coin + "!")
                                })
                            })
                        })
                    })
                })
            })
        })
    })
 
}