import { icons } from "../../images";
import Checkout from "../../pages/Checkout";
import CheckoutDetails from "../../pages/CheckoutDetails";
import Main from "../../pages/Main";
import Orders from "../../pages/Orders";
import Products from "../../pages/Products";
import Reviews from "../../pages/Reviews";

const { iconBuy, iconBuy2, iconBag1, iconComment, iconComment1, iconBag, iconHome, iconHome1, iconDocument, iconDocument1 } = icons


export const menuData = [
   {
      id: 1,
      text: 'Главная',
      url: '/main',
      icon: iconHome,
      activeIcon: iconHome1,
      hidden: false,
      element: <Main />
   },
   {
      id: 2,
      text: 'Заказы',
      url: '/orders',
      icon: iconDocument,
      activeIcon: iconDocument1,
      hidden: false,
      element: <Orders />
   },
   {
      id: 3,
      text: 'Товары',
      url: '/products',
      icon: iconBag,
      activeIcon: iconBag1,
      hidden: false,
      element: <Products />
   },
   {
      id: 4,
      text: 'Отзывы',
      url: '/reviews',
      icon: iconComment,
      activeIcon: iconComment1,
      hidden: false,
      element: <Reviews />
   },
   {
      id: 5,
      text: 'Оформить заказ',
      url: '/checkout',
      icon: iconBuy2,
      activeIcon: iconBuy,
      element: <Checkout />,
      hidden: false
   },
   {
      id: 6,
      text: 'Оформить заказ',
      url: '/checkout/:id',
      icon: iconBuy2,
      activeIcon: iconBuy,
      element: <CheckoutDetails />,
      hidden: true
   },
]