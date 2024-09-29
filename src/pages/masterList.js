import React, { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllData } from "../data/articleSlice";

const columns = [
  {
    field: "media",
    headerName: "Thumbnail",
    renderCell: (params) => <img src={params?.["row"]?.["media"]?.[0]?.["media-metadata"]?.[0]?.["url"]} alt="" />,
    width: 150,
    height: 150,
  },

  { field: "title", headerName: "Title", width: 550 },
  {
    field: "byline",
    headerName: "Written By",
    width: 300,
  },
  {
    field: "published_date",
    headerName: "Published On",
    width: 150,
  },
  {
    field: "section",
    headerName: "Section",
    width: 100,
  },
];


export default function MasterList() {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const { articleList } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchAllData('https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=LGAjaDj3YPOclIcIoBAXXKtZSo8eHfjY'))
  }, [dispatch]);

  const handleRowClick = (data) => {
    // localStorage.setItem("detail", JSON.stringify(data));
    navigate(`/details/${data?.id}`);
  };

  return (
    <>
      <h1 style={{ fontFamily: "Bravecho", fontWeight: 400 }}>NY Times Most Viewed Articles</h1 >

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
      {articleList?.fetchStatus === 'loading' && <h1> Loading Article List... </h1>}
      {articleList?.fetchStatus === 'error' && <h3> There was an error fetching data. <button onClick={() => window.location.reload(false)}> Retry </button></h3>}
    </>
  );
}


// Read me
// unit test