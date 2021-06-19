import React from "react";
import "./List.css";

function List(props) {
  const items = props.items;

  const listItems = items.map((item) => {
    return (
      <div className="list" key={"item.key"}>
        <p>{item.text}</p>
      </div>
    );
  });

  return <p>{listItems}</p>;
}

export default List;
