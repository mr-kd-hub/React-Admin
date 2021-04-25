import React, { useEffect } from "react";
import { MDBDataTableV5 } from "mdbreact";
import axios from "axios";

export default function Usersdetail() {
  const [datatable, setDatatable] = React.useState();
  useEffect(() => {
    axios
      .get("http://localhost:9000/api/feedback")
      .then((res) => {
        setDatatable(res.data.feedback);
      })
      .catch((err) => {});
  }, []);

  return (
    <>
     <h3 class="container">Feedback</h3>
    
      <table class="table">
        <thead class="thead-dark">
          <tr>

            <th scope="col">Fullname</th>
            <th scope="col">Email</th>
            <th scope="col" width="400">Message</th>
            <th scope="col">Date Of Join</th>
          </tr>
        </thead>
        <tbody>
          {
            datatable &&
            datatable.map((data, index) => {
            return (
              <>
                <tr>
                  <th scope="row">{data.name}</th>
                  <td>{data.email}</td>
                  <td>{data.message}</td>
                  <td>{data.date}</td>
                </tr>
              </>
            )
          })}
        </tbody>
      </table>
    </>
  );
}
