const products = [
    {
      id: 1,
      title: 'MATE TORPEDO',
      price: '3000',
      category: 'mates',
      description: 'MATE IDEAL PARA REUNIONES',
      image: '../public/img/mate-1.jpg',
    },
    {
      id: 2,
      title: 'MATE CAMIONERO',
      price: '4000',
      category: 'mates',
      description: 'MATE IDEAL PARA VIAJES',
      image: '../public/img/mate-8.jpg',
    },
    {
      id: 3,
      title: 'TERMO STANLEY VERDE',
      price: '30000',
      category: 'termos',
      description: 'termo verde de un litro',
      image: '../public/img/mate-2.jpg',
    },
    {
      id: 4,
      title: 'TERMO STANLEY NEGRO',
      price: '30000',
      category: 'termos',
      description: 'termo negro de un litro',
      image: '../public/img/mate-3.jpg',
    },
  ];
  
  export const getProducts = new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
  
  export const getProduct = (id) => {
    return products.find((prod) => prod.id == id);
  };
  
  export const getCategory = (category) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filterPrdos = products.filter(
          (product) => product.category === category
        );
        resolve(filterPrdos);
      }, 1000);
    });
  };