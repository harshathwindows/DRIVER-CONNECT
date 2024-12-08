const express=require('express');
const db=require('./db');
const bodyParser=require('body-parser');
const cors=require('cors');
require('dotenv').config();

const app=express();
app.use(cors());
app.use(bodyParser.json());
//To store the customer table
app.post('/signup/customer',(req,res)=>{
    const values=[
        req.body.name,
        req.body.email,
        req.body.phone,
        req.body.address,
        req.body.landmark,
        req.body.user,
        req.body.password,
        
    ]
    const sql="INSERT INTO CUSTOMER(CUS_NAME,CUS_EMAIL,CUS_PHONE,CUS_ADDRESS,CUS_LANDMARK,CUS_USER,CUS_PASSWORD) VALUES(?);";
    db.query(sql,[values],(err,data)=>{
        if(err) return res.json(err);
        return res.json(data)
    })
})

//To check the user and Password is correcl

app.post("/login",(req,res)=>{
    const {user, password}=req.body
    const sql="SELECT * FROM CUSTOMER WHERE CUS_USER= ? AND CUS_PASSWORD= ? ;";
    db.query(sql,[user, password],(err,data)=>{
        if(err) return res.json(err);
        if(data.length>0){
             res.json({success:true, message:"Login Successfully"})
            console.log("Login Successfully")
        }
        else{
            res.json({success:false, message:"Incorrect Username or Password"})
            console.log("Incorrect Username or Password ");
            
        }
    })
})

app.get(`/customer/:user`,(req,res)=>{
    const {user}=req.params;
    const sql="SELECT * FROM CUSTOMER WHERE CUS_USER = ? ;"
    db.query(sql,[user],(err,data)=>{
        if(err) return res.json(err);
        else{
        
         return res.json(data);
        }
    })

})



app.post("/customer/hire",(req,res)=>{
    //const {startdate}=req.body;
    const values=[
        req.body.startdate,
        req.body.enddate,
        req.body.startlocation,
        req.body.endlocation,
        req.body.triptime,
        req.body.triptype,
        req.body.vehicletype,
        req.body.tripfare,
        req.body.multiday,
        req.body.cusID,
        req.body.post,
    ]
    const sql="INSERT INTO TRIP_REQUEST(TripStartDate,TripEndDate,START_PLACE,END_PLACE,START_TIME,TRIP_TYPE,VEHICLE_TYPE,REQ_FARE,MULTI_DAY,CUS_ID,POST_DATE) VALUES (?)";

    db.query(sql,[values],(err,data)=>{
        if (err) return res.json(err) && console.error(err);
        return res.json(data);
        
    })
})


app.get(`/hire/request/:userID`,(req,res)=>{
    const {userID}=req.params;
    const sql="SELECT * FROM TRIP_REQUEST WHERE CUS_ID= ? AND REQ_STATUS= 'Confirm' ;";
    db.query(sql,[userID],(err,data)=>{
        if(err) return res.json(err);
        return res.json(data)
    })
})

app.post("/hire/cancelrequest",(req,res)=>{
    const {id}=req.body;
    const sql=`UPDATE TRIP_REQUEST SET REQ_STATUS= 'Cancel' WHERE REQ_ID= ? ;`;
    db.query(sql,[id],(err,data)=>{
        if(err) return res.json(err);
        return res.json(data)
    })
})

app.post("/signup/driver",(req,res)=>{
    const values=[
        req.body.name,
        req.body.email,
        req.body.phone,
        req.body.address,
        req.body.license,
        req.body.user,
        req.body.password,
    ]

    const sql="INSERT INTO DRIVER(DR_NAME,DR_EMAIL,DR_PHONE,DR_ADDRESS,LICENSE_NO,DR_USER,DR_PASSWORD) VALUES (?);";

    db.query(sql,[values],(err,data)=>{
        if(err) return res.json(err);
        return res.json(data)
    })
})

app.post("/login/driver",(req,res)=>{
    const {user, password}=req.body
    const sql="SELECT * FROM DRIVER WHERE DR_USER= ? AND DR_PASSWORD= ? ;";
    db.query(sql,[user, password],(err,data)=>{
        if(err) return res.json(err);
        if(data.length>0){
             res.json({success:true, message:"Login Successfully"})
            console.log("Login Successfully")
        }
        else{
            res.json({success:false, message:"Incorrect Username or Password"})
            console.log("Incorrect Username or Password ");
            
        }
    })
})

app.get(`/driver/:user`,(req,res)=>{
    const {user}=req.params;
    const sql="SELECT * FROM DRIVER WHERE DR_USER = ? ;"
    db.query(sql,[user],(err,data)=>{
        if(err) return res.json(err);
        else{
        
         return res.json(data);
        }
    })

})

app.get("/hire/job/request",(req,res)=>{
    const sql="SELECT * FROM TRIP_REQUEST WHERE DR_ID IS NULL AND REQ_STATUS= 'Confirm';";


    db.query(sql,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data)
    })
})



const PORT=process.env.PORT

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
    
})