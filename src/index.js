import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());


app.get('/task2B', (req, res) => {
  const name = (req.query.fullname.trim() || 0);
  console.log(name);
  if ((name === 0)|| (/[\d_\/]/.test(name))){
      res.send("Invalid fullname");
  }
 else{
   let WordsList = name.split(/ +/);
   WordsList.forEach((item, i, WordsList) =>{
     WordsList[i]=item[0].toUpperCase()+item.slice(1).toLowerCase();
     });
   switch (WordsList.length) {
     case 1:
       res.send(WordsList[0]);
     break;
     case 2:
        res.send(WordsList[1]+" "+WordsList[0][0]+".");
     break;
     case 3:
        res.send(WordsList[2]+" "+WordsList[0][0]+". "+WordsList[1][0]+".");
     break;
     default:
        res.send("Invalid fullname");
   }
 }
});

app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
