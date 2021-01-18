import React from 'react';
import Card from './Card';
// to avoid dry we use a loop
//key = {i} is used to give each card child a unique number
const CardList = ({robots}) => {
  return (
    <div>
      {
        robots.map((user,i) =>{
          return (
            <Card
              key = {i}
              id = {robots[i].id}
              name ={robots[i].name}
              email={robots[i].email} />
            );
          })
      }
    </div>

  );
}

export default CardList;
