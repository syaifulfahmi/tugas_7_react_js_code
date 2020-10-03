import React from 'react';
import {Col, Row, Alert, Breadcrumb, Badge, Button, Image} from 'react-bootstrap';

function Header() {
  	return (
    	<div>
        	<Row>
         		<Col sm={3}><Alert variant="primary">Website React Bootstrap</Alert></Col>
          		<Col sm={4}></Col>
          		<Col md="auto">
             		<Button variant="primary">Notifications <Badge variant="light">9</Badge><span className="sr-only">Unread Messages</span></Button>
              		<Button variant="primary">Message <Badge variant="light">19</Badge><span className="sr-only">Unread Messages</span></Button>
          		</Col>
          		<Col sm={2} id="colProf"><Image id="imgProf" src="https://banner2.kisspng.com/20180420/kuq/kisspng-computer-icons-user-clip-art-my-vector-5ad9a348cd2ce1.8035052415242125528404.jpg" width="18%" /><b> Andreas</b>
          		</Col>
        	</Row>
        	<Row noGutters>
          		<Col sm></Col>
          		<Col sm></Col>
          		<Col sm>
              		<Breadcrumb>
                 		<Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                  		<Breadcrumb.Item href="https://github.com/syaifulfahmi/tugas_7_react_js_code" target="blank">Berita</Breadcrumb.Item>
                  		<Breadcrumb.Item active>Bola</Breadcrumb.Item>
              		</Breadcrumb>
          		</Col>
        	</Row>
    	</div>
    )
}

export default Header;


