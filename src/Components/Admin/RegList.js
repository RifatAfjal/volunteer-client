import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const RegList = () => {
  const [usersData, setUsersData] = useState([])
  useEffect(() => {
    fetch("https://shrouded-fortress-55515.herokuapp.com/volunteers")
    .then(res => res.json())
    .then(data => {
        setUsersData(data)
    })
   },[]);

   const handleDeleteVolunteer = (id) => {
    fetch(`https://shrouded-fortress-55515.herokuapp.com/deleteVolunteer/${id}`,{
      method: "DELETE"
    })
    .then( res => res.json())
    .then( result => {
        window.location.reload()
    })
   }
    return (
        <>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email ID</th>
                  <th>Date</th>
                  <th>Volunteer list</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  usersData.map( userData => {
                    return(
                      <tr key={`${userData._id}`}>
                        <td>{userData.name}</td>
                        <td>{userData.email}</td>
                        <td>{userData.date}</td>
                        <td>{userData.title}</td>
                        <td className="text-center text-danger">
                          <FontAwesomeIcon 
                            style={{cursor:"pointer"}} 
                            onClick={()=>handleDeleteVolunteer(`${userData._id}`)} 
                            icon={faTrashAlt} />
                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </Table>
        </>
    );
};

export default RegList;