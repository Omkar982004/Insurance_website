import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import Home from '../Home';

function Sidepanel_in() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
       Drawer
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        
          <ul className="px-4">
           
            <Link to = "/inspectorlayout/insuracepolicypage1">
            <li className="py-1">
              <a href="#" className="text-gray-800 hover:text-blue-500">Insurance Policy</a>
            </li>
            </Link>

            

            

            <Link to='/inspectorlayout/incident1'>
            <li className="py-1">
              <a href="#" className="text-gray-800 hover:text-blue-500">Incident</a>
            </li>
            </Link>
            
            <Link to = "/inspectorlayout/adminpanel">
            <li className="py-1">
              <a href="#" className="text-gray-800 hover:text-blue-500">Incident Report</a>
            </li>
            </Link>



            <Link to = "/inspectorlayout/productpage1">
            <li className="py-1">
              <a href="#" className="text-gray-800 hover:text-blue-500">Product</a>
            </li>
            </Link>

          </ul>

        </Offcanvas.Body>
      </Offcanvas>

      
    </>
  );
}

export default Sidepanel_in;