import React, { useState, useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { MdDone } from "react-icons/md";
import { sortBy } from "lodash";
import { Text, SmallerText } from "../styled/styledComps";

const List = ({ product, deleteItem, completeItem }) => {
  const [complete, setComplete] = useState([]);

  useEffect(() => {
    setComplete(
      sortBy(product, [
        function (o) {
          return o.name;
        },
      ])
    );
  }, [product]);
  const total = complete.reduce((acc, curr) => acc + parseFloat(curr.price), 0);

  return (
    <div>
      <h1>Current</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">
              <Text>Name</Text>
            </th>
            <th scope="col">
              <Text>Price</Text>
            </th>
            <th scope="col">
              <Text>Quantity</Text>
            </th>
            <th scope="col">
              <Text>Type</Text>
            </th>
            <th scope="col">
              <Text>Delete</Text>
            </th>
            <th scope="col">
              <Text>Complete</Text>
            </th>
          </tr>
        </thead>
        {complete.map(({ id, name, price, quantity, types }) => (
          <tbody>
            <tr key={id}>
              <td>
                <SmallerText>{name}</SmallerText>
              </td>
              <td>
              <SmallerText>{`$ ${price.toFixed(2)}`}</SmallerText>
              </td>
              <td>
                <SmallerText>{quantity}</SmallerText>
              </td>
              <td>
                <SmallerText>{types}</SmallerText>
              </td>
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
      {total && <SmallerText>Total: {"$" + total.toFixed(2)}</SmallerText>}
    </div>
  );
};

export default List;
