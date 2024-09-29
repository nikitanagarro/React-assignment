import React, { useEffect, useState } from 'react'
import './details.css'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export default function DetailView() {
  const params = useParams();
  const { articleList } = useSelector((state) => state);
  const [article, setArticle] = useState(null)

  useEffect(() => {
    if (articleList?.data?.results) {
      const findArticle = articleList?.data?.results?.filter(items => items.id == params.id)
      setArticle(findArticle[0])      
    }
  }, [])



  return <>
    {article ? <div className='container'>
      <div className='header'>
        <figure >
          <img src={article?.media?.[0]?.['media-metadata']?.[2]?.['url']} alt="" style={{ width: '100%' }} />
          <figcaption> {article?.media?.[0]?.caption}</figcaption>
        </figure>

        <div>
          <h1 className='title'> {article?.title}</h1>
          <h5> -{article?.byline}</h5>
          <p> Section : {article?.section}</p>
          <p> Published On: {article?.published_date} </p>
          <p className='list'> Facets: </p>
          <ul className='list'>
            {article?.des_facet?.map(item => <li key={item}> {item} </li>)}
          </ul>
        </div>
      </div>
      <h2> {article?.abstract} </h2>

      <p>Keywords:  {article?.adx_keywords}</p>

      <h6> Read full article <a href={article?.url}>here</a></h6>
    </div> : <h1> Article with id {params.id} not found. </h1>}
  </>
}

