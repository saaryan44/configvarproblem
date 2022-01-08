const x=require('express'); const y=x(); y.use(x.json()); const z=require('mongoose'); const dotenv=require('dotenv'); dotenv.config();
const port=process.env.PORT || 4000; y.use(x.static('build'));

z.connect(process.env.M,{useNewUrlParser:true}).then(p=>console.log('database access')).catch(d=>console.log('unable to access database'));

const p=new z.Schema({hi:String}); const q =z.model('lol',p);

y.post('/',async (a,b)=>{const uu=new q({hi:a.body.hi}); await uu.save(); b.status(201).json({ok:true, message:`hi ${a.body.hi}`});});

y.listen(port,()=>console.log(`port ${port}`));