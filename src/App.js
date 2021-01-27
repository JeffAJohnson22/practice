import React, { useState, useRef} from "react";
import uuid from "react-uuid";
import List from "./components/List";
import CompleteList from "./components/CompleteList";
import { Button, Other, Select, SmallerText } from "./styled/styledComps";
const App = () => {
  const [input, setInputs] = useState("");
  const [amount, setAmount] = useState("");
  const [quantity, setQuantity] = useState("");
  const [alltypes, setAllTypes] = useState("");
  const [product, setProduct] = useState([]);
  const inputEl = useRef(null);
  const valueEl = useRef(null);
  const quantEl = useRef(null);
  const typeEl = useRef(null);

  const addItem = (item) => {
    const allproducts = [item, ...product];
    if (item.name || item.price !== "") {
      setProduct(allproducts);
    } else {
      alert("Needs a Price and/or Name");
    }
  };
  const completeItem = (id) => {
    const value = product.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setProduct(value);
  };

  const need = product.filter((item) => item.completed === false);
  const completedProducts = product.filter((item) => item.completed === true);

  const deleteItem = (id) => {
    setProduct(product.filter((item) => item.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem({
      id: uuid().replace(/-/g, "").substring(0, 10),
      name: input,
      price: parseFloat(amount) * quantity,
      completed: false,
      quantity,
      types: alltypes,
    });
    setInputs("");
    setAmount("");
  };

  const handleChange = (e) => {
    setInputs(inputEl.current.value);
    setAmount(valueEl.current.value);
    setQuantity(quantEl.current.value);
    setAllTypes(typeEl.current.value);
  };

  const q = new Array(11);
  for (let i = 1; i < 11; i++) {
    q[i] = i;
  }
  const types = [
    { name: "liquid" },
    { name: "solid" },
    { name: "gas" },
    { name: "plasma" },
  ];

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center", margin: 40 }}>
        <form onSubmit={handleSubmit}>
          <SmallerText>Item:</SmallerText>
          <Other
            types="text"
            ref={inputEl}
            value={input}
            placeholder="item name"
            onChange={handleChange}
          />
          <SmallerText>Prince:</SmallerText>
          <Other
            type="text"
            value={amount.replace(/[^0-9.]/g, "").trim()}
            ref={valueEl}
            placeholder="price"
            onChange={handleChange}
          />
          <SmallerText>Quantity:</SmallerText>
          <Select ref={quantEl} value={quantity} onChange={handleChange}>
            {q.map((qAmount) => (
              <option value={qAmount}>{qAmount}</option>
            ))}
          </Select>
          <SmallerText>Type:</SmallerText>
          <Select ref={typeEl} value={quantity} onChange={handleChange}>
            {types.map(({ name }) => (
              <option value={name}>{name}</option>
            ))}
          </Select>
          <Button type="submit" value="Add Item" />
        </form>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ marginRight: 40 }}>
          <List
            product={need}
            deleteItem={deleteItem}
            completeItem={completeItem}
          />
        </div>
        <div style={{ marginLeft: 40 }}>
          <CompleteList
            completeItem={completeItem}
            completedProducts={completedProducts}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
