const express = require('express');
var bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));


app.get('/style.css', (req, res) => {
    res.sendFile(__dirname + '/public/style.css');
});


app.get("/bmiCalculator", (req, res) => {

    res.sendFile(__dirname + "/public/bmiCalculator.html")
});



// app.get("/", (req, res) => {
//     res.sendFile(__dirname + "/index.html");
// });

app.post("/bmiCalculator", (req, res) => {
    console.log(req.body);
    console.log(req.body.weight);
    console.log(req.body.height);
    var weight = Number(req.body.weight)
    var height = Number(req.body.height)
    var BMI = weight / (height * height)
    var description = ""
    if (BMI < 18.5) {
        description = "น้ำหนักน้อยกว่ามาตรฐาน ";
    } else if (BMI >= 18.5 && BMI <= 24.9) {
        description = "น้ำหนักปกติ ";
    } else if (BMI >= 25 && BMI <= 29.9) {
        description = "น้ำหนักเกิน ";
    } else if (BMI >= 30) {
        description = "โรคอ้วน ";
    }
    res.send("คุณมีค่า BMI = " + BMI.toFixed(3) + " , คุณอยู่ในเกณฑ์ = " + description);
});


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

// app.post("/", (req, res) => {
//     console.log(req.body);
//     console.log(req.body.num1);
//     console.log(req.body.num2);
//     var result = Number(req.body.num1) +  Number
//     (req.body.num2)
//     res.send("นำเลข 2 ตัวมาบวกกันได้เท่ากับ :  = " + result);

// });