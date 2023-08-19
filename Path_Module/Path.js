const path=require('path')
console.log(path.dirname('C:/Users/nitin/Nodejs Topic/Path_Module/Path.js'))
console.log(path.extname('C:/Users/nitin/Nodejs Topic/Path_Module/Path.js'))
console.log(path.parse('C:/Users/nitin/Nodejs Topic/Path_Module/Path.js'))  //if we want access all  paths

const mypath=path.parse('C:/Users/nitin/Nodejs Topic/Path_Module/Path.js') /// if we want particular one field
console.log(mypath.base)
console.log(mypath.root)
console.log(mypath.name)

