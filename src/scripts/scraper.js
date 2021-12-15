const fs = require('fs');
const axios = require('axios');
const imageWidth = 800;

function getImages(currUrl, imageUrl){
    // const imageUrls = fs.readFileSync('images.txt', 'utf8').split('\n');
    // console.log(imageUrls);

    // for(const imageUrl of imageUrls) {
        if(imageUrl[imageUrl.length - 1] === '/') imageUrl = imageUrl.slice(0, -1);
        if(!imageUrl) return;
        // download image from linkedin url
        axios.get(imageUrl, { responseType: 'arraybuffer' })
            .then(response => {
                // save image to disk
                fs.writeFile(`images/${currUrl}.jpg`, response.data, 'binary', (err) => {
                    if(err) console.log(err);
                });
            }
        );
    // }

}

async function scarpper(members){

    members.forEach( async (data) => {
        
        let profileObject = '';

        let currUrl = data[0];
        let member = data[1];

        try {
            const url = `https://www.linkedin.com/voyager/api/identity/dash/profiles?q=memberIdentity&memberIdentity=${member}`;
    
            const response = await axios({
                method: 'GET',
                url: url,
                headers: {
                    "csrf-token":"ajax:5412450068802492047",
                    "cookie":`li_at=AQEDATI-WJ8BAoqxAAABfb9jpbYAAAF943Aptk0AyMpJFnLVi2hL8rQq7aVwXtohQpq0whsjrif-0V51PWuBxC2OFu9GNSfF6ig6f2LYRovDCv-d0Lab8r9hw-5GeBNAfQsNFb9TBDRhkUm_gzyzuugu; JSESSIONID="ajax:5412450068802492047";` 
                }
            });

            profileObject = response["data"]["elements"];
            
        } catch (error) {
            console.log("Error occured in API!");
        }

        let imageObject = profileObject[0];

        imageObject = imageObject['profilePicture'];
    
        // if(!imageObject) {
        //     fs.appendFileSync('error.txt', `${member}\n`);
        //     return;
        // }

        imageObject = imageObject['displayImage'];
        imageObject = imageObject['com.linkedin.common.VectorImage'];

        const baseUrl = imageObject['rootUrl'];
        const artifacts = imageObject['artifacts'];

        let dataSet = {
            '100' : '0',
            '200' : '1',
            '400' : '2',
            '800' : '3'
        }

        const set = dataSet[imageWidth];

        if(!set) throw new Error ("Please enter a vaild Size from 100, 300, 400, 800!");

        const artifactSet = artifacts[set];
        const authentication = artifactSet['fileIdentifyingUrlPathSegment'];

        const imageUrl = baseUrl + authentication;
        // fs.appendFileSync('testing.txt', imageUrl + '\n');
        // getImages(currUrl, imageUrl);
    });

    // console.log(resultUrls)
}

const people = [];

(async ()=>{
    const file = fs.readFileSync('../assets/teamData.json', 'utf8');
    // fs.mkdirSync('images');

    const data = JSON.parse(file);

    // console.log(data);

    const people = [];

    for(let category of data) {
        const teamList = category['TeamList'];
        
        for(const member of teamList) {

            const currName = member['Name'];
            const currUrl = member['LinkedIn'];
            let userName = currUrl.replace('https://www.linkedin.com/in/', '');
            userName = userName.replace('http://linkedin.com/in/', '');
            userName = userName.replace('http://www.linkedin.com/in/', '');
            userName = userName.replace('https://linkedin.com/in/', '');
            userName = userName.replace('/', '');
            people.push([currName,userName]);
        }
    }

    scarpper(people)
})();

// scarpper(people);