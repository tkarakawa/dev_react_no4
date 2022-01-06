import React from 'react';
import { Link } from "react-router-dom";

const FirstPage = () => {
  console.log("1画面目");
  return (
    <div>
        <Link to="/currentweather">
          currentweather
        </Link>
    </div>
  );
}

export default FirstPage;
