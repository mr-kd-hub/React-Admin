import React from 'react';
import { MDBDataTableV5 } from 'mdbreact';

export default function Feedback() {
  
  const [datatable, setDatatable] = React.useState({
    //fields
  columns: [
    {
      label: 'Name',
      field: 'name',
      width: 100,
      attributes: {
        'aria-controls': 'DataTable',
        'aria-label': 'Name',
      },
    },
    {
      label: 'Email',
      field: 'email',
      width: 170,
    },
    {
      label: 'Message',
      field: 'msg',
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
      msg: 'hellooo',
      doj: 'Edinburgh'
    },
    {
      name: 'Tiger Nixon',
      email: 'System Architect',
      msg: 'hellooo',
      doj: 'Edinburgh'
    },
    {
      name: 'Tiger Nixon',
      email: 'System Architect',
      msg: 'hellooo',
      doj: 'Edinburgh'
    },
    {
      name: 'Tiger Nixon',
      email: 'System Architect',
      msg: 'hellooo',
      doj: 'Edinburgh'
    },
  ],
});

return <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={datatable} />;
}