import React from 'react';
//tc= text center br=border pa=padding ma=margin grow= animation bw= border-width
//after intro of robots array we introduce properties(props) to the function
//{}use destructors within the func parameters
const Card = ({name,email, id}) => {
  return(
    <div className = " tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img alt= 'robots' src = {`https://robohash.org/${id}?200*200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>

  );
}

export default Card;
