const EventEmiiter=require('events')

const emitter=new EventEmiiter()

emitter.on('filemoved',(filename,category)=>{
    console.log(`[LOGGER] ${filename} → ${category}`)
})
    

module.exports=emitter

