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
const { Admin } = require("./src/model/admin")


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
                return
            }
            else{
                res.send(data)
            }
        }
    )
})

app.post("/request",(req,res)=>{
    console.log(req.body.userName)
    Admin.findOne({
        userName: req.body.userName
      },(error, data) => {
        if (error) {
          console.log(error)
          res.status(500).send({ message: err });
          return;
        }
    
        if (data) {
          res.status(400).send({ message: "Failed! Username1 is already in use!" });
          return;
        }else{

            register.findOne({
                userName: req.body.userName
              },(error, data) => {
                if (error) {
                  console.log(error)
                  res.status(500).send({ message: err });
                  return;
                }
            
                if (data) {
                  res.status(400).send({ message: "Failed! Username is already in use!" });
                  return;
                }else{
                    dregister.findOne({
                        userName: req.body.userName
                      },(error, data) => {
                        if (error) {
                          console.log(error)
                          res.status(500).send({ message: err });
                          return;
                        }
                    
                        if (data) {
                          res.status(400).send({ message: "Failed! Username is already in use!" });
                          return;
                        }else{
        
                    console.log(data)
                    register.findOne({
                        email: req.body.email
                      },(error, data) => {
                        if (error) {
                          console.log(error)
                          res.status(500).send({ message: err });
                          return;
                        }
                    
                        if (data) {
                          res.send({ message: "Failed! Email is already in use!" });
                          return;
                        }else{
                    
                            const data=req.body
                            console.log(data.userName)
                            console.log(data)
                            const ob=new request(data)
                            ob.save(
                            (error,data)=>{
                                if(error){
                                  res.send(error)
                                  return
                                }
                                else{
                                  res.send(data)
                    
                                }
                            })
        
        
                        }
                    
                    })
                    }
            
        })
        
        }
          
        })

        }
    })
    
})


app.delete('/deleteRequest/:id',function(req,res){
    const id = req.params.id;
    request.findByIdAndDelete(id,(error,data)=>{
       if(error){
        res.send(error)
        return
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
                return
                
            }
            else{
                res.send(data)
            }
        }
    )
})

app.post("/register",(req,res)=>{
    const data=req.body
    data.role = "student"
    console.log(data)
    const ob=new register(data)
    ob.save(
        (error,data)=>{
            if(error){
                res.send(error)
                return
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
        return
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
                return
            }
            else{
                res.status(200).json({
                    msg:data
                })
            }
        }
    )})
  })




  //admin

  app.get("/viewAdmin",(req,res)=>{
    Admin.find(
        (error,data)=>{
            if(error){
                res.send(error)
                return
            }
            else{
                res.send(data)
            }
        }
    )
})


  app.post("/admin",(req,res)=>{
    const data=req.body
    const ob=new Admin(data)
    ob.save(
        (error,data)=>{
            if(error){
                res.send(error)
                return
            }
            else{
                res.send(data)
            }
        }
    )
  })




  //Driver



  app.get("/viewDriver",(req,res)=>{
    dregister.find(
        (error,data)=>{
            if(error){
                res.send(error)
                return
            }
            else{
                res.send(data)
            }
        }
    )
})


app.post("/addDriver",(req,res)=>{
    Admin.findOne({
        userName: req.body.userName
      },(error, data) => {
        if (error) {
          console.log(error)
          res.status(500).send({ message: err });
          return;
        }
    
        if (data) {
          res.status(400).send({ message: "Failed! Username1 is already in use!" });
          return;
        }else{
            dregister.findOne({
                userName: req.body.userName
              },(error, data) => {
                if (error) {
                  console.log(error)
                  res.status(500).send({ message: err });
                  return;
                }
            
                if (data) {
                  res.status(400).send({ message: "Failed! Username is already in use!" });
                  return;
                }else{
                    register.findOne({
                        userName: req.body.userName
                      },(error, data) => {
                        if (error) {
                          console.log(error)
                          res.status(500).send({ message: err });
                          return;
                        }
                    
                        else{if (data) {
                          res.status(400).send({ message: "Failed! Username is already in use!" });
                          return;
                        }
                    console.log(data)
                    dregister.findOne({
                        email: req.body.email
                      },(error, data) => {
                        if (error) {
                          console.log(error)
                          res.status(500).send({ message: err });
                          return;
                        }
                    
                        if (data) {
                          res.status(400).send({ message: "Failed! Email is already in use!" });
                          return;
                        }else{
                    
                            const data=req.body
                            console.log(data)
                            data.role = "driver"
                            const ob=new dregister(data)
                            ob.save((error,data)=>{
                            if(error){
                                res.send(error)
                                return
                            }
                            else{
                                 res.send(data)
                            }
                        })
                        }
                    })
        }
        })
        }
        })
        }
    })
    
})


app.delete('/deleteDriver/:id',function(req,res){
    const id = req.params.id;
    dregister.findByIdAndDelete(id,(error,data)=>{
       if(error){
        res.send(error)
        return
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
    routeNo=req.body.routeNo

    dregister.findByIdAndUpdate({"_id":id},
    {$set:{"name":name,
    "userName":userName,
    "contactNumber":contactNumber,
    "email":email,
    "driverId":driverId,
    "routeNo":routeNo,
}}).then(function(){
    dregister.find(
        (error,data)=>{
            if(error){
                res.send(error)
                return
                
            }
            else{
                res.status(200).json({
                    msg:data
                })
            }
        }
    )})
  })





  //LOGIN



  app.post("/login",(req,res)=>{
    console.log(req.body)
    Admin.findOne({
       
        userName: req.body.luserName
    },(error,data)=>{
        if (error) {
            
            console.log(error)
            res.status(500).send({ message: err });
            return;
        }  
        if (data) {
            if (req.body.lpassword == data.password) {
              res.json({data})
            }
            else{
           
            res.send({ message: "username or password doesnot match" });
            return;
        }
        }else{
            register.findOne({
                userName: req.body.luserName 
            },(error,data)=>{
                if (error) {
                    console.log(error)
                    res.status(500).send({ message: err });
                    return;
                }
                if (data) {
                    console.log("1")
                    console.log(data)
                    if (req.body.lpassword == data.password) {
                        res.json({data})
                    }
                    else{
                    res.send({ message: "username or password doesnot match" });
                    return;
                }
                }else{
                    dregister.findOne({
                        userName: req.body.luserName 
                    },(error,data)=>{
                        if (error) {
                            console.log(error)
                            res.status(500).send({ message: err });
                            return;
                        }
                        if (data) {
                           
                            if (req.body.lpassword == data.password) {
                                res.json({data})
                            }
                            else{
                            res.send({ message: "username or password doesnot match" });
                            return;
                        }
                        }else{
                            console.log("dkajf")
                            res.send({message: "username or password doesnot match"});
                            return;
                        }  
                    })
                }  
            })
        }
    })
  })




  //route details



  app.get("/viewRoute",(req,res)=>{
    
    routeDetails.find(
        (error,data)=>{
            if(error){
                res.send(error)
                return
                
            }
            else{
                res.send(data)
            }
        }
    )
})

app.post("/addRoute",(req,res)=>{
    const data=req.body
    const ob=new routeDetails(data)
    ob.save(
        (error,data)=>{
            if(error){
                res.send(error)
                return
            }
            else{
                res.send(data)
            }
        }
    )
})

app.delete('/deleteRoute/:id',function(req,res){
    const id = req.params.id;
    routeDetails.findByIdAndDelete(id,(error,data)=>{
       if(error){
        res.send(error)
        return
       }else{
        res.status(200).json({
            msg:data
        })
       }
    })
})


app.put('/updateRoute/:id',function(req,res){
    
    const id = req.params.id,
    routeNo=req.body.routeNo,
    busNo=req.body.busNo,
    seats=req.body.seats,
    image=req.body.image
   

    routeDetails.findByIdAndUpdate({"_id":id},
    {$set:{"routeNo":routeNo,
    "busNo":busNo,
    "seats":seats,
    "image":image
}}).then(function(){
    routeDetails.find(
        (error,data)=>{
            if(error){
                res.send(error)
                return
                
            }
            else{
                res.status(200).json({
                    msg:data
                })
            }
        }
    )})
  })

  



//Boarding Point




app.get("/viewBpoint",(req,res)=>{
    
    BPoint.distinct("point",
        (error,data)=>{
            if(error){
                res.send(error)
                return
                
            }
            else{
              
                res.send(data)
            }
        }
    )
})

app.post("/viewbpoint",(req,res)=>{
    
    BPoint.find({routeNo:req.body.routeNo},
        (error,data)=>{
            if(error){
                res.send(error)
                console.log(error)
                return
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
    const ob=new BPoint(data)
    ob.save(
        (error,data)=>{
            if(error){
                res.send(error)
                return
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
        return
       }else{
        res.status(200).json({
            msg:data
        })
       }
    })


    
})


app.put('/updateBpoint/:id',function(req,res){
    
    const id = req.params.id,
    routeNo=req.body.routeNo,
    stopNo=req.body.stopNo,
    point=req.body.point,
    time=req.body.time
    console.log(req.body)
    BPoint.findByIdAndUpdate({"_id":id},
    {$set:{"routeNo":routeNo,
    "stopNo":stopNo,
    "point":point,
    "time":time
}}).then(function(){
    BPoint.find(
        (error,data)=>{
            if(error){
                res.send(error)
                return
                
            }
            else{
                res.status(200).json({
                    msg:data
                })
            }
        }
    )})
  })




//complaints

app.get("/viewComplaint",(req,res)=>{
    
    complaint.find(
        (error,data)=>{
            if(error){
                res.send(error)
                return
                
            }
            else{
                res.send(data)
            }
        }
    )
})

app.post("/addComplaint",(req,res)=>{
    const data=req.body
    data.date= new Date()
    data.date.toISOString().slice(0, 10)
    const ob=new complaint(data)
    ob.save(
        (error,data)=>{
            if(error){
                res.send(error)
                return
            }
            else{
                res.send(data)
            }
        }
    )
})

app.put('/updateResponse/:id',function(req,res){
    
    const id = req.params.id,
    reply=req.body.reply
    complaint.findByIdAndUpdate({"_id":id},
    {$set:{"reply":reply,
}}).then(function(){
    complaint.find(
        (error,data)=>{
            if(error){
                res.send(error)
                return
                
            }
            else{
                res.status(200).json({
                    msg:data
                })
            }
        }
    )})
  })
  


  app.delete('/deletecomplaint/:id',function(req,res){
    const id = req.params.id;
    console.log(id)
    complaint.findByIdAndDelete(id,(error,data)=>{
       if(error){
        res.send(error)
        console.log("sdkj")
       }else{
        console.log(data)
        res.status(200).json({
            msg:data
        })
       }
    })
})

app.post("/responsecomplaint",(req,res)=>{
    console.log(req.body)
    complaint.find({userName:req.body.userName},
        (error,data)=>{
            if(error){
                res.send(error)
                return
                
            }
            else{
                res.send(data)
                console.log(data)
            }
        }
    )
})





  //user routeDetails




  app.post("/busdetails/:bpoint",(req,res)=>{
    BPoint.findOne({point:req.params.bpoint},
        (error,data)=>{
            if(error){
                res.send(error)
                console.log(error)
                return
            }else{
                console.log(data)
                routeDetails.findOne({routeNo:data.routeNo},
                    (error,data)=>{
                        if(error){
                            res.send(error)
                            return
                        }else{
                            res.send(data)
                            console.log(data)
                        }
                })
            }
    })
})
app.post("/driverdetails/:bpoint",(req,res)=>{
    BPoint.findOne({point:req.params.bpoint},
        (error,data)=>{
            if(error){
                res.send(error)
                console.log(error)
                return
            }else{
                console.log(data)
                dregister.findOne({routeNo:data.routeNo},
                    (error,data)=>{
                        if(error){
                            res.send(error)
                            console.log(error)
                            return
                        }else{
                            res.send(data)
                            console.log(data)
                        }
                })
            }
    })
   
    
})

app.post("/getbpoint/:bpoint",(req,res)=>{
    console.log(req.params.bpoint)
    BPoint.findOne({point:req.params.bpoint},
        (error,data)=>{
            if(error){
                res.send(error)
                console.log(error)
                return
            }else{
                console.log(data)
                BPoint.find({routeNo:data.routeNo},
                    (error,data)=>{
                        if(error){
                            res.send(error)
                            console.log(error)
                            return
                        }else{
                            res.send(data)
                            console.log(data)
                        }
                })
            }
    })
})




//Driver route





app.post("/bdetails",(req,res)=>{
    console.log(req.body)
    console.log(req.body.data.routeNo)
    routeDetails.findOne({routeNo:req.body.data.routeNo},
        (error,data)=>{
            if(error){
                res.send(error)
                return
            }else{
                res.send(data)
                console.log(data)
            }
    })
               
            
})
app.post("/ddetails",(req,res)=>{
    console.log(req.body)
    dregister.findOne({routeNo:req.body.data.routeNo},
        (error,data)=>{
            if(error){
                res.send(error)
                console.log(error)
                return
            }else{
                res.send(data)
                console.log(data)
            }
    })
               
    
})

app.post("/dbpoint",(req,res)=>{
    
    console.log(req.body)
    BPoint.find({routeNo:req.body.data.routeNo},
        (error,data)=>{
            if(error){
                res.send(error)
                console.log(error)
                return
            }else{
                res.send(data)
                console.log(data)
            }
    })
    
            
})









app.listen(3000,()=>{
    console.log("Successfully running on http://localhost:3000")
})