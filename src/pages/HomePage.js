import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Button, Container } from 'react-bootstrap';
import { Announcements, Records, InvalidType, AddExpense } from './utils';


function HomePage(){
    const location = useLocation();
    const stateObject = location.state;
    console.log(stateObject);
    console.log(stateObject.userId);
    const [type,setType] = useState("Announcements");
    const [modalShow,setModalShow] = useState(false);

    const userId = stateObject.userId;
    const userType = stateObject.userType;

    const handleTypeChange = (event) => {
        setType(event.target.value);
    }
    const showAddExpense = () => {
        setModalShow(true);
    }

    return(
        <div>
            <Container fluid style={{ backgroundColor: '#f0f0f0'}}>
                <AddExpense 
                show={modalShow}
                onHide={() => setModalShow(false)} />
                <Row className='text-center'>
                    <Col md="10">
                        <h1>Home Page</h1>
                    </Col>
                    <Col>
                        <Button onClick={showAddExpense} style={{height:"95%",width:"95%"}}>Add Expense</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Form.Select size="lg" onChange={handleTypeChange}>
                        <option value="Announcements">Announcements</option>
                        <option value="Maintenance">Maintenance</option>
                        <option value="Water">Water</option>
                    </Form.Select>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    {
                        type === "Announcements" ? (<Announcements />
                        ) : type === "Maintenance" ? (<Records type={"Maintenance"} userId={userId} userType={userType} />
                        ) : type === "Water" ? (<Records type={"Water"} userId={userId} userType={userType} />
                        ) : ( <InvalidType /> )
                    }
                        
                    </Col>
                
                </Row>
            </Container>
        </div>
        
    );
}

export default HomePage;