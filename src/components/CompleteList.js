import React, { useState } from "react";
import { FaUndo } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdDone } from "react-icons/md";
import { sortBy } from "lodash";

const CompleteList = ({ completedProducts, completeItem }) => {
  const [edit, setEdit] = useState({
    id: null,
    name: "",
    price: null,
  });
  const value = sortBy(completedProducts, [
    function (o) {
      return o.name;
    },
  ]);

  return (
    <div>
      <h1>Complete</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Undo</th>
          </tr>
        </thead>
        {value.map(({ id, name, price, quantity }) => (
            <tbody style={{  textDecoration:'line-through'}}>
              <tr key={id}>
                <td>{name}</td>
                <td>{"$" + price}</td>
                <td>{quantity}</td>
                <td>
                  <FaUndo onClick={() => completeItem(id)} />
                </td>
              </tr>
            </tbody>
        ))}
      </table>
    </div>
  );
};

export default CompleteList;
