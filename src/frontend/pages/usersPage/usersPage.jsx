import React, { useEffect, useState } from "react";
import { Table } from "antd";
import axios from "axios"
function UsersPage() {
const[data, setData]= useState([])
const url='http://localhost:5000/users'
useEffect(()=>{
  axios
  .get(url,{
  })
  .then(({data}) => {
  setData(data)
  console.log(data);
});
})
function remove_user(e){
  console.log(e._id);
axios.delete(`http://localhost:5000/users/${e._id}`)
}


  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "surname",
      dataIndex: "surname",
    },
    {
      title: "email",
      dataIndex: "email",
    },
    {
      render: (text, record) => (
        <button onClick={() => remove_user(record)}>{"Remove"}</button>
      ),
    },
  ];

  return (
    <div style={{ width: "80%", margin: "auto" }}>
      {
        <Table
          dataSource={data}
          columns={columns}
        />
      }
    </div>
  );
}

export default UsersPage;