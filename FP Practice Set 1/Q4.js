// Write an ES6 function that takes an array of objects representing products and returns an array with the product names in all lower case letters using the map method.

const getProductNamesInLowerCase = (arr) =>{
    const toLowerCase = (el)=>{
      let lower = '';
      for(let word of el){
        if(word.charCodeAt() > 64 && word.charCodeAt() < 91){
        lower+= String.fromCharCode((word.charCodeAt()+32))
      }else{
          lower+=word;
      }
      }
      return lower;
    }
    return arr.map(({name})=>toLowerCase(name))
  }
  
  const products = [
    { name: 'Lip Balm', stock: 100 },
    { name: 'PERFUME', stock: 400 },
    { name: 'Socks', stock: 200 }
  ];
  console.log(getProductNamesInLowerCase(products));
  // Output: ["lip balm", "perfume", "socks"]