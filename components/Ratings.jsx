import React from "react";
import { styled } from "@mui/material/styles";
import Rating from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#ff6d75",
  },
  "& .MuiRating-iconHover": {
    color: "#ff3d47",
  },
});

const Ratings = () => {
  if (typeof window !== "undefined") {
    const rating = JSON.parse(localStorage.getItem("ratings"));
    return (
      <>
        <span className="p-3">
          <StyledRating
            name="customized-color"
            defaultValue={Number(rating)}
            getLabelText={(value) => `${value} Heart${value !== 1 ? "s" : ""}`}
            precision={0.5}
            icon={<FavoriteIcon fontSize="inherit" />}
            emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
            onChange={(e) =>
              localStorage.setItem("ratings", JSON.stringify(e.target.value))
            }
          />
        </span>
      </>
    );
  }
};

export default Ratings;
