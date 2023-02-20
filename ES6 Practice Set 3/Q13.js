// Create a function which takes in the given object and returns another object only with the properties postalCode and city in it.

const getAddress = ({postalCode,city}) => ({postalCode,city})

const userData = {
    name: 'Jane Doy',
    postalCode: '12134',
    city: 'Germany',
  }
  
  console.log(getAddress(userData));
  // {postalCode: '12134', city: 'Germany'}