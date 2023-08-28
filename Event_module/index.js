const EventEmitter=require('events')
const ev=new EventEmitter()
const fs=require('fs')

ev.on('start',()=>{
    console.log("started")
})
ev.emit("start")

ev.on('someEvent', (arg1, arg2) => {
    console.log('Listener 1:', arg1, arg2);
  });
  
  ev.on('someEvent', (arg1, arg2) => {
    console.log('Listener 2:', arg1, arg2);
  });
  
  ev.emit('someEvent', 'arg1value', 'arg2value');

const readableStream = fs.createReadStream('input.txt');
const writableStream = fs.createWriteStream('output.txt');
readableStream.pipe(writableStream);
