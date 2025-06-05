let url = "https://thequoteshub.com/api/"
let apiKey = "Ao2MNkWK8ExSkr+3YlZYKQ==wae7L4cWHHBxZdjt"
let p = document.querySelector("#quotes")
async function getfacts(){
    try{
        let res = await axios.get(url,{
        headers: {
        "X-Api-Key": apiKey 
      }
        });
        let lines = res.data.split('\n');
        setTimeout(()=>{p.innerHTML = lines[0]},1000);
    }
    catch(e){
        console.log(e)
    }
}
getfacts()
setInterval(getfacts,10000);
// let i = 0
// while(i<10){
//     setTimeout(getfacts,2000);
//     i++
// }
