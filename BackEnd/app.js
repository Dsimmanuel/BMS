const Express=require("express")
const Bodyparser=require("body-parser")
const Mongoose=require("mongoose")
const Cors=require("cors")
const {register}=require("./src/model/studRegister")
const {dregister}=require("./src/model/driverRegister")
const {routeDetails}=require("./src/model/routeDetails")
const { complaint } = require("./src/model/complaint")
const { BPoint } = require("./src/model/bPoint")
const { request } = require("./src/model/stuRequest")


const app=Express()
app.use(Cors())
app.use(Bodyparser.urlencoded({extended:true}))
app.use (Bodyparser.json())
Mongoose.connect("mongodb+srv://Immanuel:immanuel@cluster0.rnux5pm.mongodb.net/CollegeBusDB?retryWrites=true&w=majority")





app.get("/",(req,res)=>{
    res.render("register")
})



//student request


app.get("/viewRequest",(req,res)=>{
    request.find(
        (error,data)=>{
            if(error){
                res.send(error)
                
            }
            else{
                res.send(data)
            }
        }
    )
})

app.post("/addRequest",(req,res)=>{
    const data=req.body
    const ob=new request(data)
    ob.save(
        (error,data)=>{
            if(error){
                res.send(error)
            }
            else{
                res.send(data)
            }
        }
    )
})

app.delete('/deleteRequest/:id',function(req,res){
    const id = req.params.id;
    request.findByIdAndDelete(id,(error,data)=>{
       if(error){
        res.send(error)
       }else{
        res.status(200).json({
            msg:data
        })
       }
    })
})


//Approved student

app.get("/home",(req,res)=>{
    register.find(
        (error,data)=>{
            if(error){
                res.send(error)
                
            }
            else{
                res.send(data)
            }
        }
    )
})

app.post("/register",(req,res)=>{
    const data=req.body
    const ob=new register(data)
    ob.save(
        (error,data)=>{
            if(error){
                res.send(error)
            }
            else{
                res.send(data)
            }
        }
    )
})

app.delete('/delete/:id',function(req,res){
    const id = req.params.id;
    register.findByIdAndDelete(id,(error,data)=>{
       if(error){
        res.send(error)
       }else{
        res.status(200).json({
            msg:data
        })
       }
    })
})

  app.put('/update/:id',function(req,res){
    
    const id = req.params.id,
    name=req.body.name,
    userName=req.body.userName,
    registerNumber=req.body.registerNumber,
    address=req.body.address,
    department=req.body.department,
    semester=req.body.semester,
    email=req.body.email,
    boardingPoint=req.body.boardingPoint,
    amount=req.body.amount,
    status=req.body.status

    register.findByIdAndUpdate({"_id":id},
    {$set:{"name":name,
    "registerNumber":registerNumber,
    "userName":userName,
    "address":address,
    "department":department,
    "semester":semester,
    "email":email,
    "boardingPoint":boardingPoint,
    "amount":amount,
    "status":status
}}).then(function(){
    register.find(
        (error,data)=>{
            if(error){
                res.send(error)
                
            }
            else{
                res.status(200).json({
                    msg:data
                })
            }
        }
    )})
  })


  //Driver



  app.get("/viewDriver",(req,res)=>{
    dregister.find(
        (error,data)=>{
            if(error){
                res.send(error)
                
            }
            else{
                res.send(data)
            }
        }
    )
})


app.post("/addDriver",(req,res)=>{
    const data=req.body
    console.log(data)
    const ob=new dregister(data)
    ob.save(
        (error,data)=>{
            if(error){
                res.send(error)
            }
            else{
                res.send(data)
            }
        }
    )
})


app.delete('/deleteDriver/:id',function(req,res){
    const id = req.params.id;
    dregister.findByIdAndDelete(id,(error,data)=>{
       if(error){
        res.send(error)
       }else{
        res.status(200).json({
            msg:data
        })
       }
    })
})



app.put('/updateDriver/:id',function(req,res){
    
    const id = req.params.id,
    name=req.body.name,
    userName=req.body.userName,
    contactNumber=req.body.contactNumber,
    email=req.body.email,
    driverId=req.body.driverId,
    busId=req.body.busId

    dregister.findByIdAndUpdate({"_id":id},
    {$set:{"name":name,
    "userName":userName,
    "contactNumber":contactNumber,
    "email":email,
    "driverId":driverId,
    "busId":busId,
}}).then(function(){
    dregister.find(
        (error,data)=>{
            if(error){
                res.send(error)
                
            }
            else{
                res.status(200).json({
                    msg:data
                })
            }
        }
    )})
  })

  //route details

  app.get("/viewRoute",(req,res)=>{
    
    routeDetails.find(
        (error,data)=>{
            if(error){
                res.send(error)
                
            }
            else{
                console.log(data)
                res.send(data)
            }
        }
    )
})

app.post("/addRoute",(req,res)=>{
    const data=req.body
    console.log(data)
    const ob=new routeDetails(data)
    ob.save(
        (error,data)=>{
            if(error){
                res.send(error)
            }
            else{
                res.send(data)
            }
        }
    )
})




//Boarding Point


app.get("/viewBpoint",(req,res)=>{
    
    BPoint.find(
        (error,data)=>{
            if(error){
                res.send(error)
                
            }
            else{
                console.log(data)
                res.send(data)
            }
        }
    )
})

app.post("/addBpoint",(req,res)=>{
    const data=req.body
    console.log(data)
    const ob=new BPoint(data)
    ob.save(
        (error,data)=>{
            if(error){
                res.send(error)
            }
            else{
                res.send(data)
            }
        }
    )
})

app.delete('/deleteBpoint/:id',function(req,res){
    const id = req.params.id;
    BPoint.findByIdAndDelete(id,(error,data)=>{
       if(error){
        res.send(error)
       }else{
        res.status(200).json({
            msg:data
        })
       }
    })


    
})


//complaints

app.get("/viewComplaint",(req,res)=>{
    
    complaint.find(
        (error,data)=>{
            if(error){
                res.send(error)
                
            }
            else{
                console.log(data)
                res.send(data)
            }
        }
    )
})

app.post("/addComplaint",(req,res)=>{
    const data=req.body
    console.log(data)
    const ob=new complaint(data)
    ob.save(
        (error,data)=>{
            if(error){
                res.send(error)
                console.log(error)
            }
            else{
                res.send(data)
            }
        }
    )
})



app.listen(3000,()=>{
    console.log("Successfully running on http://localhost:3000")
})