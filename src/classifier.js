const path = require('path')

const dictionary={
    '.jpg': "images",
    '.jpeg':"images",
    '.png': "images",
    '.pdf': "Documents",
    '.docx': "Documents",
    '.txt': "Documents",
    '.mp4': "videos",
    '.mp3': "Music",
    '.zip': "Archives",
    '.exe': "Installers"
}
const identifier=(filename)=>{
    const ext=path.extname(filename ).toLowerCase();


return dictionary[ext]||"others";
}
module.exports = identifier