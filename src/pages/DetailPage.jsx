import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { selectDetails } from "../store/details/details-selectors";
import { clearDetails, loadPostById } from "../store/details/details-actions";
import { Loader } from "../components/Loader";
import { DetailCard } from "../components/DetailCard";
import {NotFound} from "./NotFound"

export const DetailPage = () => {
  const { id } = useParams();
  
  const dispatch = useDispatch();
  const { currentPost, error, status } = useSelector(selectDetails);

  useEffect(() => {
    dispatch(loadPostById(id));

    return () => {
      dispatch(clearDetails())
    }
  }, [id, dispatch]);

  return (
    <>
      {status === "loading" && <Loader />}
      {error && <NotFound />}
      {currentPost && <DetailCard {...currentPost} />}
    </>
  );
};
