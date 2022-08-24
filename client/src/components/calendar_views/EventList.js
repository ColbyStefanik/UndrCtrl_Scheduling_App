import {React, useState, useEffect} from 'react'
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import UpdateModal from '../modals/UpdateModal';

const EventList = () => {

    const [eventList, setEventList] = useState([]);
    let events = [];
    const navigate = useNavigate();

    useEffect(() =>{
        axios.get("http://localhost:8000/api/calendar")
        .then((res=>{
            console.log(res);
            console.log(res.data);
            setEventList(res.data);
        }))
        .catch((err)=>console.log(err))
    }, [])

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8000/api/calendar/${id}`)
        .then((res)=>{
            console.log(res.data);
            navigate("/calendar/month");
        })
        .catch((err)=>console.log(err))
    }

    return (
        <div className="App">
            <Card className="text-center shadow m-5" >
                <Card.Body>
                    <Card.Title>EVENTS</Card.Title>
                    <Table striped>
                        <thead>
                            <tr>
                                <th>Game Name</th>
                                <th>Start</th>
                                <th>End</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {eventList.map((event, index) => (
                                <tr>
                                    <th><Link to={`/calendar/update/${event._id}`}>{event.gameName}</Link></th>
                                    <th>{event.startTime}</th>
                                    <th>{event.endTime}</th>
                                    <th><UpdateModal id={event._id}/></th>
                                    <th><Button variant="primary" type="submit" onClick={() => handleDelete(event._id)}>Delete</Button></th>
                                </tr>
                            ))}
                        </tbody>
                    </Table>                    
                </Card.Body>
            </Card>
        </div>  )
}

export default EventList;