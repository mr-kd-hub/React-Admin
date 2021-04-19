import React from 'react';
import { MDBDataTableV5 } from 'mdbreact';

export default function Usersdetail() {
  const [datatable, setDatatable] = React.useState({
      //fields
    columns: [
      {
        label: 'Name',
        field: 'name',
        width: 150,
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Name',
        },
      },
      {
        label: 'Email',
        field: 'email',
        width: 270,
      },
      {
        label: 'Date Of Join',
        field: 'doj',
        width: 200,
      }
    ], 
    //data
    rows: [
      {
        name: 'Tiger Nixon',
        email: 'System Architect',
        doj: 'Edinburgh'
      },
      {
        name: 'Tiger Nixon',
        email: 'System Architect',
        doj: 'Edinburgh'
      },
      {
        name: 'Tiger Nixon',
        email: 'System Architect',
        doj: 'Edinburgh'
      },
      {
        name: 'Tiger Nixon',
        email: 'System Architect',
        doj: 'Edinburgh'
      },
    ],
  });

  return <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={datatable} />;
}