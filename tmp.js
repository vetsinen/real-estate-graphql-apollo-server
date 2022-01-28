const fs = require('fs');
const rooms = fs.readFileSync('./rooms.json', {encoding: 'utf8', flag: 'r'})
console.log(JSON.parse(rooms)[0])