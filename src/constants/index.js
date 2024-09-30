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

export default columns

export const FETCH_URL = 'https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key='