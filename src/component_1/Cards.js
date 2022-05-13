import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
const options = [
    'edit',
    'delete'
  ];
  const ITEM_HEIGHT = 20;
 export default function Cards({details,editAction}){
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      
      setAnchorEl(null);
    };
    const handleEdit=(id)=>{
        console.log(id);
        editAction(id);
        setAnchorEl(null);
    }
    const handleDelete=(id)=>{
        console.log(document.getElementById(id))
        const all_card=document.querySelector('.Cards');
        all_card.removeChild(document.getElementById(id));
        setAnchorEl(null);
    }
     return(
        
            <Card  key={details.detail.id} id={details.detail.id}  className='card' sx={{ maxWidth: 345 }}>
            <div className='icon'>
            <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? 'long-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MoreVertIcon />
            </IconButton>
            <Menu
                id="long-menu"
                MenuListProps={{
                'aria-labelledby': 'long-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                style: {
                    maxHeight: ITEM_HEIGHT * 4.5,
                    width: '20ch',
                },
                }}
            >
                <MenuItem key={"edit"} id={"edit"} onClick={()=>handleEdit(details.detail.id)}>
                    Edit
                </MenuItem>
                <MenuItem key={"delete"} id={"delete"} onClick={()=>handleDelete(details.detail.id)}>
                    Delete
                </MenuItem>
            </Menu>
            </div>
            <CardMedia
            component="img"
            alt="project_detail"
            height="140"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_e_KPuJQf1eWoZxtpqNttx3H5Fxuvi1wMmg&usqp=CAU"
            />
            <CardContent>
            <Typography id='name' gutterBottom variant="h4" component="div">
                Project Name : {details.detail.Name.name}
            </Typography>
            <Typography id='typePro'  variant="h5" color="text.secondary">
                Project Domain : {details.detail.ProType.type}
            </Typography>
            <Typography id='descript' variant="h5" color="text.secondary">
                Project Description : {details.detail.Description.desc}
            </Typography>
            
            </CardContent>
            <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
     );
 }