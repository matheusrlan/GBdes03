import React from "react";
import Post from "../../button/post";
import './filter.css'
import Data from './../data'

const Filter = (props) => {
    let button = props.number
    let Data_Filtered = Data.filter(element => element.address === button)
  return (
    <section className="posts">
      {Data_Filtered.map((element) => (
        <Post key={element.id} image={element.image} title={element.title} link={element.link} />
      ))}
    </section>
  );
};

export default Filter;