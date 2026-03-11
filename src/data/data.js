  const product = [
    {
      id: 1,
      name: "teclado mecamico",
      stock: 5
    },
        {
      id: 2,
      name: "auris",
      stock: 2
    },
        {
      id: 3,
      name: "teclado de membrana",
      stock: 3
    }
  ]

    const getProduct = () =>{
    return new Promise((resolve, reject) => {
      resolve(product)
    })
  }

  export {getProduct}