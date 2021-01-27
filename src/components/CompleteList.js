import React from "react";
import { FaUndo } from "react-icons/fa";
import { sortBy } from "lodash";
import { Text, SmallerText } from "../styled/styledComps";

const CompleteList = ({ completedProducts, completeItem }) => {

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
              <Text>Undo</Text>
            </th>
          </tr>
        </thead>
        {value.map(({ id, name, price, quantity }) => (
          <tbody style={{ textDecoration: "line-through" }}>
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
