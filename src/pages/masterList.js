import React, { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllData } from "../data/articleSlice";
import Skeleton from '@mui/material/Skeleton';
import columns, { FETCH_URL } from "../constants";
import { Box } from "@mui/material";

function Loading() {
  return <Box display="flex"
    justifyContent="center"
    flexDirection="column"
    alignItems="center">
    <h2>Loading article list...</h2>
    <Skeleton variant="rectangular" animation="wave" width={'90%'} height={500} />
  </Box>
}

export default function MasterList() {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const { articleList } = useSelector((state) => state);
  useEffect(() => {
    dispatch(fetchAllData(`${FETCH_URL}${process.env.REACT_APP_API_SECRET_KEY}`))
  }, [dispatch]);

  const handleRowClick = (data) => {
    navigate(`/details/${data?.id}`);
  };

  return (
    <>
      <h1>NY Times Most Viewed Articles</h1 >

      {articleList?.fetchStatus === 'success' &&
        <DataGrid
          rows={articleList?.data?.results}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[10, 50, 100]}
          onRowClick={handleRowClick}
          rowHeight={90}
        />
      }
      {articleList?.fetchStatus === 'loading' && <Loading />}
      {articleList?.fetchStatus === 'error' && <h3> There was an error fetching data. <button onClick={() => window.location.reload(false)}> Retry </button></h3>}
    </>
  );
}


// Read me
// unit test