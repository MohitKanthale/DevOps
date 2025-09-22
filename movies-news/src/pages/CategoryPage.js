import React from "react";
import { useParams } from "react-router-dom";

const categoryData = {
  action: "🔥 Explore the best Action movies!",
  thriller: "😱 Get ready for some spine-chilling Thriller movies!",
  drama: "🎭 Dive into emotional and compelling Drama stories!",
  romance: "❤️ Feel the love with these Romantic movies!",
  comedy: "😂 Laugh out loud with these hilarious Comedy movies!"
};

const CategoryPage = () => {
  const { categoryName } = useParams();
  return (
    <div className="main-content">
      <h1>{categoryData[categoryName] || "Category Not Found"}</h1>
    </div>
  );
};

export default CategoryPage;
