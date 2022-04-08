const SLEEP_TIME = 200;
function sleep(fn) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(fn());
    }, SLEEP_TIME);
  });
}

const dataService = {
  prepareProductsData() {
    return [
      {
        id: 'potato',
        title: 'Картошка',
        price: 49.99,
        image: '/products/1.jpg',
      },
      {
        id: 'carrot',
        title: 'Морковка',
        price: 55.00,
        image: '/products/carrot.jpg',
      },
      {
        id: 'cabbage',
        title: 'Капуста',
        price: 28.50,
        image: '/products/cabbage.jpg',
      }
    ];
  },
};

function getProductsList() {
  return sleep(dataService.prepareProductsData);
}
export { getProductsList }
