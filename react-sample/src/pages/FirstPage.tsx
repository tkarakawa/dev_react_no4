import React from 'react';
import { Link } from "react-router-dom";

const FirstPage = () => {
  return (
    <div>
        <Link to="/currentweather">
          currentweather
        </Link>
    </div>
  );
}

export default FirstPage;
