import React, { useEffect, useState } from 'react'
import Table from '../components/Table';
import { request } from '../utils/http-server';
import { usersData } from '../utils/queries';

function Users() {
  const [users, setUsers] = useState([]);
  const colsTitle = [
    { name: 'Name', body: 'name' },
    { name: 'Branch', body: 'branch' },
  ]

  useEffect(() => {
    request(usersData)
    .then(res => res.json())
    .then(({ data }) => {
      let newList = []

      data?.allUsers?.forEach((user) => {
        newList.push({
          id: user?.id,
          name: user?.name,
          branch: user?.Branch?.name
        })
      })

      setUsers(newList)
    })
  }, []);

  return (
    <Table data={users} link="users" colsTitle={colsTitle} />
  )
}

export default Users