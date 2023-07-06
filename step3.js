const fs = require('fs')



const axios = require('axios')


function cat(path){
    fs.readFile(`${path}`, 'utf8', (err, data) => {
        if(err){
            console.log(`Error ${ err }`)
            process.kill(1)
        }
        else{
            console.log(data)
        }
    })
}

console.log(
    process.argv[2]
)

cat(process.argv[2])




function cat(path) {
    fs.readFile(`${path}`, 'utf8', (err, data) => {
        if (err) {
            console.log(`Error ${err}`)
            process.kill(1)
        }
        else {
            console.log(data)
        }
    })
}





async function webCat(url) {
    try {
      let resp = await axios.get(url);
      console.log(resp.data);
    } catch (err) {
      console.error(`Error fetching ${url}: ${err}`);
      process.exit(1);
    }
  }
  
  let path = process.argv[2];
  
  if (path.slice(0, 4) === 'http') {
    webCat(path);
  } else {
    cat(path);

  }


  if(path.slice())