const reader = require('./mymodule')
const ext = process.argv[3];
const filter = (err, list)=>{
if (err) {
    console.log(err);
}
else{
    list.map(item => console.log(item));
}
}
reader(process.argv[2],process.argv[3],filter)


