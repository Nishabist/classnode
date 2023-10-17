const express = require('express')
const app = express()
const port = 3000
app.use(express.json())
const users =[
    {id:1,name:"Nisha",address:"Kanchanour"},
    {id:2,name:"kaylin", address:"Ktm"}
]

app.get('/users', (req, res) => {
  const searchlist=users.filter((items,id)=>{
    if(items.name[0]===req.query.startswith && items.name[items.name.length-1]===req.query.endswith){
      return items
    }
  })
  res.send(searchlist)
})
//app.get('/users',(req,res) => {
//res.send({name:"Manish",caste:"Bist"})
//})
app.get('/users/:id', (req, res) => {
  const userlist=users.find((items,id)=>{
    if(items.id==req.params.id){
      return items
    }
  })
  res.send(userlist)
})
app.post('/register',(req,res)=>{
users.push(req.body)
res.json({users})
})


app.put('/users/:id',(req,res)=>{
 const editlist=users.map((items,id)=>{
if(items.id==req.params.id){
  items=req.body
}
return items
})
console.log(editlist);
res.send(editlist)
 
 // console.log(req.params.id)
 //console.log(req.body)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
 