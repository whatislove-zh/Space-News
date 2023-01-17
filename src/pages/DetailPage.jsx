import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { selectDetails } from "../store/details/details-selectors";
import { loadPostById } from "../store/details/details-actions";
import { Loader } from "../components/Loader";
import { DetailCard } from "../components/DetailCard";

export const DetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentPost, error, status } = useSelector(selectDetails);

  useEffect(() => {
    dispatch(loadPostById(id));
  }, [id, dispatch]);

  return (
    <>
      {status === "loading" && <Loader />}
      {error && <h2>{error}</h2>}
      {currentPost && <DetailCard {...currentPost} />}
    </>
  );
};
