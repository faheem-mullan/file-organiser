
const args = process.argv.slice(2)
const pathIndex=args.indexOf("--path")
const pathValue=args[pathIndex + 1]
const byIndex=args.indexOf("--by")
const byValue=args[byIndex+1]
console.log(pathValue)
if (pathIndex==-1){
    console.log("you forgot to add your path")
    process.exit(1)
}

console.log(pathValue)
console.log(byValue)