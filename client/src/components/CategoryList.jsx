import React from "react";
import PropTypes from "prop-types";

export const CategoryList = ({ data }) => {
  const hasCategories = () =>
    data &&
    data.response &&
    data.response.categoryData;

  if (!hasCategories()) {
    return <noscript />;
  }

  const {
    response: {
      categoryData
    }
  } = data;

  return (
    <div>
      <h4 className="pink">Category data</h4>
      <div style={{ margin: "30px" }}>
        {categoryData.map(category => {
          return (
            <p key={category.id}>
              <b>{category.primaryName} - {category.type}</b>
              <br />
              {category.secondaryName}
            </p>
          );
        })}
      </div>
    </div>
  );
};

CategoryList.propTypes = {
  data: PropTypes.object.isRequired
};

export default CategoryList;
