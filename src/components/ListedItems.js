import React, { useState, useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { MdDone } from "react-icons/md";
import { sortBy, reduce, groupBy } from "lodash";

const ListedItems = ({ product, deleteItem, completeItem }) => {
    // const [edit, setEdit] = useState({
  //   id: null,
  //   name: "",
  //   price: null,
  // });
  const [complete, setComplete] = useState([]);

  return (
    <div>
    <h1>Products</h1>
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col">Quantity</th>
          <th scope="col">Type</th>
          <th scope="col">Delete</th>
          <th scope="col">Complete</th>
        </tr>
      </thead>
      {complete.map(({ id, name, price, quantity, types }) => (
        <tbody>
          <tr key={id}>
            <td>{name}</td>
            <td>{"$" + price}</td>
            <td>{quantity}</td>
            <td>{types}</td>
            {/* <FaEdit onClick={() => setEdit(id, name, price)} /> */}
            <td>
              <MdDelete onClick={() => deleteItem(id)} />
            </td>
            <td>
              <MdDone onClick={() => completeItem(id)} />
            </td>
          </tr>
        </tbody>
      ))}
    </table>
  </div>
  )
}

export default ListedItems
