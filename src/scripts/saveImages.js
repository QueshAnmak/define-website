const axios = require('axios');
const fs = require('fs');

(()=>{
    const imageUrls = fs.readFileSync('images.txt', 'utf8').split('\n');
    console.log(imageUrls);

    for(const imageUrl of imageUrls) {
        if(!imageUrl) continue;
        // download image from linkedin url
        axios.get(imageUrl, { responseType: 'arraybuffer' })
            .then(response => {
                // save image to disk
                fs.writeFile(`images/${imageUrl.split('/').pop()}.jpg`, response.data, 'binary', (err) => {
                    if(err) console.log(err);
                });
            }
        );
    }

})();