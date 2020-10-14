import React, { useState, useEffect } from 'react';
import { db } from '../settings/firebase';

export const useFetchData = (collection, dependencies) => {
  const [data, setData] = useState(null); 
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    setLoading(true);
    const fetched = [];

    try {
      const response  = await db.collection(collection).get()

      response.forEach(doc => {
        fetched.push(doc.data());
      });

      setData(fetched);
      setLoading(false);
    } catch(err) {
      console.log(err);
      setLoading(false);
    } 
  }

  useEffect(() => {
    fetchData();
  }, dependencies); 

  return [loading, data];
}

