import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import '../Components/CSS/Sidebar.css'
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import StorageIcon from '@mui/icons-material/Storage';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Button from '@mui/material/Button';


const Sidebar = () => {
    return (
      <div className="mt-3"> 
      <div className="ml-3">
      <Button className="" variant="outlined" id="btn">
      {<AddIcon />}
      <span className="text-dark">New</span> 
      </Button>
      </div>
    <div className="d-flex mt-3 ml-2">
    <ArrowRightIcon/>
    <InsertDriveFileIcon/>
    <span className="text-dark ml-2"
    >My Drive</span>
    </div>

    <div className="d-flex mt-2 ml-2">
    <ArrowRightIcon/>
    <ImportantDevicesIcon/>    
    <span className="text-dark  ml-2">Computers</span>
    </div>

    <div className="sbicon">
    <div  className="d-flex mt-2">
    <PeopleAltIcon/>
    <span className="text-dark  ml-2">Shared with me</span>    
    </div>
    
    <div className="d-flex mt-2">
    <AccessTimeIcon/>
    <span className="text-dark  ml-2">Recent</span>
    </div>
    
    <div  className="d-flex mt-2">
     <StarOutlineIcon/>
     <span className="text-dark  ml-2">Starred</span>    
    </div>
    
    <div  className="d-flex mt-2 ">
     <DeleteOutlineIcon/>
     <span className="text-dark  ml-2">Trash</span>    
    </div>
    
    <div  className="d-flex mt-2">
     < StorageIcon/>
     <span className="text-dark  ml-2">Storage</span>    
    
    </div>
    </div>
      </div>
    )    
}

export default Sidebar
