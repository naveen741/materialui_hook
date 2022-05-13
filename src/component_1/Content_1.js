import './Content.css';
import { useState } from 'react';
export default function Content(){
    const [userName,setuserName]=useState("");
    const [Address, setAddress]=useState();
    const onUserSubmit=(event)=>{
        event.preventDefault();
    };
    return(
        <div className="content">
            <h2>Contents</h2>
            <form className='myform' onSubmit={onUserSubmit}>
                <label htmlFor='name'>UserName : </label>
                <input id="name" type="text"  onKeyUp={(e)=>{ setuserName(e.target.value);}} placeholder='Enter UserName' required/>
                <label htmlFor="address">Address : </label>
                <textarea id="address" onKeyUp={(e)=>{setAddress(e.target.value);}} placeholder="your address" required></textarea>
                <input type="submit"/>
            </form>
        </div>
    );
}