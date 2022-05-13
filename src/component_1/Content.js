import './Content.css';
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { FormControl,FormControlLabel, FormLabel, RadioGroup, Radio } from '@mui/material';
import Cards from './Cards';
const ans=[];
let i=0, idval=0;

export default function Content(){
    const [type, setType]=useState("");
    const [flag, setFlag]=useState(true)
    const [name, setName]=useState("");
    const [desc,setDesc]=useState("");
    const [output,setOutput]=useState([]);
    const [detail, setDetail]=useState({
        id: i,
        Name: {name},
        ProType: {type},
        Description: {desc}
    });
    const onUserSubmit=(event)=>{
        event.preventDefault();
        console.log(type)
        if(flag){
            i++;
            ans.push({detail})
            setOutput(ans);
        }
        else{
            output && output.map((details)=>{
                if(idval==details.detail.id){
                    details.detail.id=idval;
                    details.detail.Name.name= name;
                    details.detail.Description.desc=desc
                }
            });
            setFlag(true);
        }
        setDesc("");
        setName("");
        setType("");
        
    };
    const editAction=(id)=>{
        console.log(id)
        output.map((details)=>{
            if(id==details.detail.id){
                idval=id;
                setFlag(false);
                setDesc(details.detail.Description.desc);
                setName(details.detail.Name.name);
                setDetail({
                    id: idval,
                    Name: details.detail.Name.name,
                    Description: details.detail.Description.desc
                });
            }
            
        });
        

    }
    return(
        <div  className='container'>
        <div className="content">
            <h2>Contents</h2>
            <form className='myform' id='form_1'  onSubmit={onUserSubmit} >
            <FormControl>
            <br/>
                <TextField
                    required
                    id="ProjectName"
                    label="Project Name"
                    placeholder='Enter the Project Name'
                    value={name}
                    onChange={(e)=>{setName(e.target.value ); setDetail({
                        id: i,
                        Name: {name},
                        ProType: {type},
                        Description: {desc}
                    });}}
                /><br/>
                
                <TextField
                    id="description"
                    label="Project Description"
                    multiline
                    value={desc}
                    rows={4}
                    
                    onChange={(e)=>{ setDesc(e.target.value); setDetail({
                        id: i,
                        Name: {name},
                        ProType: {type},
                        Description: {desc}
                    });}}
                    required
                    placeholder='Enter the Project Description'
                /><br/>
                <FormLabel id="projectType">Project Type</FormLabel>
                <RadioGroup
                    id='domain'
                    aria-labelledby="projectType"
                    name="domain" 
                    value={type}
                    onChange={(e)=>{setType(e.target.value); setDetail({
                        id: i,
                        Name: {name},
                        ProType: e.target.value,
                        Description: {desc}
                    });}}>
                    <FormControlLabel  value="Android" control={<Radio required/>} label="Android" />
                    <FormControlLabel value="IOS" control={<Radio required/>} label="IOS" />
                </RadioGroup>
                <br/>
                <Button variant='contained' type='submit'>Submit</Button>
            </FormControl>    
            </form>
        </div>
        <div className='Cards'>
            { output && output.map((details)=>(
                <Cards details={details} editAction={editAction}/>
            ))} 
        </div>
        </div>
    );
}