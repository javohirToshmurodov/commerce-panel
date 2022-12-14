import { images } from "../images"

const { imageAirpods, imageGalaxy, imageIphone, imageSamsung } = images
export const products = [
   {
      id: 1,
      title: "Смартфон Samsung Galaxy A11s",
      price: "7 300 000",
      discount: "2 435 000",
      combo: "x24",
      image: imageSamsung,
      type: 'моноблок (классический)',
      internet: '2G, 3G, 4G (LTE), 5G',
      system: "Samsung",
      badges: {
         gift: true,
         reload: false,
         percentage: true
      }
   },
   {
      id: 2,
      title: "Смартфон Apple iphone 12 pro",
      price: "8 300 000",
      discount: "2 435 000",
      type: 'моноблок (классический)',
      internet: '2G, 3G, 4G (LTE), 5G',
      combo: "x24",
      image: imageIphone,
      gift: false,
      reload: true,
      percentage: false,
      system: "IOS 13"
   },
   {
      id: 3,
      title: "Наушники Apple Airpods",
      price: "4 200 000",
      discount: "1 435 000",
      combo: "x24",
      image: imageAirpods,
      type: 'моноблок (классический)',
      internet: '2G, 3G, 4G (LTE), 5G',
      gift: false,
      reload: true,
      percentage: false,
      system: "IOS 2.2"
   },
   {
      id: 4,
      title: "Samsung Galaxy Z Folder",
      price: "8 320 000",
      discount: "2 785 000",
      combo: "x24",
      type: 'моноблок (классический)',
      internet: '2G, 3G, 4G (LTE), 5G',
      image: imageGalaxy,
      gift: true,
      reload: false,
      percentage: true,
      system: "Samsung"
   },
   {
      id: 5,
      title: "Смартфон Apple iphone 12 pro",
      price: "8 300 000",
      discount: "2 435 000",
      combo: "x24",
      image: imageIphone,
      type: 'моноблок (классический)',
      internet: '2G, 3G, 4G (LTE), 5G',
      gift: false,
      reload: true,
      percentage: false,
      system: "IOS 14"
   },
   {
      id: 6,
      title: "Смартфон Samsung Galaxy A11s",
      price: "7 300 000",
      discount: "2 435 000",
      combo: "x24",
      image: imageSamsung,
      gift: false,
      reload: true,
      percentage: false,
      type: 'моноблок (классический)',
      internet: '2G, 3G, 4G (LTE), 5G',
      system: "Samsung"
   },
   {
      id: 7,
      title: "Смартфон Apple iphone 12 pro",
      price: "8 300 000",
      discount: "2 435 000",
      combo: "x24",
      image: imageIphone,
      gift: false,
      reload: true,
      percentage: false,
      type: 'моноблок (классический)',
      internet: '2G, 3G, 4G (LTE), 5G',
      system: "IOS 14"
   },
   {
      id: 8,
      title: "Наушники Apple Airpods",
      price: "4 200 000",
      discount: "1 435 000",
      combo: "x24",
      image: imageAirpods,
      gift: true,
      reload: false,
      percentage: false,
      type: 'моноблок (классический)',
      internet: '2G, 3G, 4G (LTE), 5G',
      system: "IOS 2.2"
   },
   {
      id: 9,
      title: "Samsung Galaxy Z Folder",
      price: "8 320 000",
      discount: "2 785 000",
      combo: "x24",
      image: imageGalaxy,
      gift: false,
      reload: true,
      type: 'моноблок (классический)',
      internet: '2G, 3G, 4G (LTE), 5G',
      percentage: true,
      system: "samsung"
   },
   {
      id: 10,
      title: "Смартфон Apple iphone 12 pro",
      price: "8 300 000",
      discount: "2 435 000",
      combo: "x24",
      type: 'моноблок (классический)',
      internet: '2G, 3G, 4G (LTE), 5G',
      image: imageIphone,
      gift: true,
      reload: false,
      percentage: true,
      system: "IOS 14"
   },
]