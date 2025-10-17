import React, { useEffect } from 'react';

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/1')
      .then(res => res.json())
      .then(data => setProduct(data));
  }, []);