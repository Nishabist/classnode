const express = require('express')
const app = express()
const port = 3000

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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
 