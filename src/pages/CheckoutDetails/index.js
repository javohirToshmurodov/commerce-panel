import { Box, ButtonBase, Tabs } from '@mui/material'
import React, { useEffect, useState } from 'react'
import TextGrey12400 from "../../components/Typography/TextGrey12400"
import TextGreen12500 from "../../components/Typography/Textgreen12500"
import TextGreen16400 from "../../components/Typography/Textgreen16600"
import TextGrey16400 from "../../components/Typography/TextGrey16400"
import TextBlack16600 from "../../components/Typography/TextBlack16600"
import { useParams } from 'react-router-dom'
import { Product } from '../../context'
import { detailStyles } from './styles'
import { icons, images } from '../../images'
import TextBlueAdmin from '../../components/Typography/TextBlue22600'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Line from '../../components/Line'
import TextWhite13600 from '../../components/Typography/Textwhite13600'
import TextWhite17600 from '../../components/Typography/Textwhite17600'
import TextGrey11400 from '../../components/Typography/TextGrey11400'
import TextBlack16400 from "../../components/Typography/TextBlack16400"
import TextGreen16600 from "../../components/Typography/Textgreen16600"
import { colors } from '../../colors'
import GiftBadge from '../../components/Buttons/Badges/Gift'
import ReloadBadge from '../../components/Buttons/Badges/Reload'
import DiscountBadge from '../../components/Buttons/Badges/Discount'
import SuccessDiscountBadge from '../../components/Buttons/Badges/SuccessDiscount'
import AddToCartButton from '../../components/Buttons/AddToCart'
import Checkbox from '@mui/material/Checkbox';
import { btnStyles } from '../../components/Buttons/AddToCart/styles'
const CheckoutDetails = () => {
   const classes = detailStyles()
   const classnames = btnStyles()
   const { iconArrowRight, iconArrow2, iconBuy2 } = icons
   const { imageIphone } = images
   const { textGreen, textWhite } = colors
   const { id } = useParams()
   const [details, setDetails] = useState({})
   const [value, setValue] = React.useState('1');
   const { state: {
      product,
      cart,

   }, dispatch } = Product()

   // slider


   useEffect(() => {
      product?.filter((item) => {
         if (item.id == id) {
            setDetails(item)
         }
      })
   }, [id])
      // tabs

      ;
   const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


   // console.log(details);
   return (
      <Box className={classes.root}>
         <Box className={classes.container}>

            <Box display={"flex"} gap={"3px"}>
               <TextGrey12400 text={"Заявки"} />
               <img src={iconArrowRight} alt="" />
               <TextGrey12400 text={"Оформить заказ"} />
               <img src={iconArrowRight} alt="" />
               <TextGreen12500 text={`${details?.title}`} />
            </Box>

            <Box className={classes.wrapper}>
               <Box className={classes.positionCart}>
                  {
                     cart.length > 0 ? (
                        <Box className={classes.addedCart}>
                           <img src={iconBuy2} alt="" />
                           <TextWhite17600 text={'Перейти в корзину'} />
                           <Box className={classes.info}>
                              1
                           </Box>
                        </Box>
                     ) : (
                        <Box className={classes.addToCart}>
                           <img src={iconBuy2} alt="" />
                        </Box>
                     )
                  }


               </Box>
               <TextBlueAdmin text={details?.title} />
               <Box className={classes.right}>
                  <Box className={classes.slider}>
                     <Box className={classes.badges}>
                        <Box>
                           {
                              details?.gift && <GiftBadge />
                           }
                        </Box>
                        <Box>
                           {
                              details?.reload && <ReloadBadge />
                           }
                        </Box>
                        <Box>
                           {details?.percentage && <DiscountBadge />}
                        </Box>
                     </Box>
                     <Carousel className={classes.carousel}>
                        <Box>
                           <img className={classes.image} src={details.image} alt="" />
                        </Box>
                        <Box>
                           <img className={classes.image} src={details.image} alt="" />

                        </Box>
                        <Box>
                           <img className={classes.image} src={details.image} alt="" />
                        </Box>
                     </Carousel>
                  </Box>
                  <Box className={classes.rigthBlock}>
                     <TextGrey16400 text={"Цена телефона"} />
                     <Box marginTop={"6px"}>
                        <TextBlack16600 text={details.price} />
                     </Box>
                     <Box>
                        <Line />
                     </Box>
                     <TextGrey16400 text={"Общая цена (с наценкой)"} />
                     <Box justifyContent={"space-between"} display={"flex"} marginTop={"6px"}>
                        <TextBlack16600 text={details.price} />
                        <Box display={"flex"} alignItems={"center"} gap={"4px"}>
                           <Box className={classes.badge}>
                              <TextWhite13600 text={`от ${details.discount} сум`} />
                           </Box>
                           <TextGrey11400 text={details.combo} />
                        </Box>


                     </Box>
                     <Box className={classes.tabs}>
                        <ButtonBase className={classes.button1}>
                           3 мес
                        </ButtonBase>
                        <ButtonBase className={classes.button}>
                           6 мес
                        </ButtonBase>
                        <ButtonBase className={classes.button}>
                           12 мес
                        </ButtonBase>
                        <ButtonBase className={classes.button2}>
                           24 мес
                        </ButtonBase>
                     </Box>
                     <Box marginTop={"8px"} display={"flex"} justifyContent={"center"} gap={"10px"} textAlign={"center"}>
                        <TextBlack16400 text={"Наценка:"} />
                        <TextBlack16600 text={"5%"} />
                     </Box>
                     <Line />
                     <TextGrey16400 text={"Общие характеристики"} />
                     <Box marginTop={"8px"}>
                        <TextBlack16400 text={`Тип: ${details.type}`} />
                        <TextBlack16400 text={`Стандарт: ${details.internet}`} />
                        <TextBlack16400 text={`Операционная система: ${details.system}`} />
                     </Box>

                     <Box marginTop={"35px"} display={"flex"} justifyContent={"space-between"}>
                        <TextGreen16600 text={"Показать все"} />
                        <img src={iconArrow2} alt="" />
                     </Box>
                  </Box>
               </Box>
               <Box className={classes.detailsWrapper}>
                  <Box marginBottom={"20px"}>
                     <TextGreen16400 text={"Акции"} />
                  </Box>

                  <Box className={classes.row}>
                     <Box alignItems={"flex-start"} display={"flex"} gap={"16px"}>
                        <ReloadBadge />
                        <Box>
                           <TextBlack16400 text={"Обменяй свой старый айфон и получи скидку на новый"} />
                           <Box marginTop={"10px"}>
                              <TextGrey16400 text={"- 400 000 сум"} />
                           </Box>
                        </Box>
                     </Box>
                     <Box>
                        <Checkbox  {...label} defaultChecked sx={{
                           '&.Mui-checked': {
                              color: "#00C48C",
                           },
                        }} />
                     </Box>
                  </Box>
                  <Line />
                  <Box className={classes.row}>
                     <Box alignItems={"flex-start"} display={"flex"} gap={"16px"}>
                        <GiftBadge />
                        <Box>
                           <TextBlack16400 text={"Наушники в подарок"} />
                           <Box marginTop={"10px"}>
                              <TextGrey16400 text={"Apple EarPods"} />
                           </Box>
                        </Box>
                     </Box>
                     <Box>
                        <Checkbox {...label} defaultChecked sx={{
                           '&.Mui-checked': {
                              color: "#00C48C",
                           },
                        }} />

                     </Box>
                  </Box>
                  <Line />
                  <Box className={classes.row}>
                     <Box alignItems={"flex-start"} display={"flex"} gap={"16px"}>
                        <DiscountBadge />
                        <Box>
                           <TextBlack16400 text={"Скидка 20% на смартфоны"} />
                           <Box marginTop={"10px"}>
                              <TextGrey16400 text={"- 10 000 сум"} />
                           </Box>
                        </Box>
                     </Box>
                     <Box>
                        <Checkbox {...label} defaultChecked sx={{
                           '&.Mui-checked': {
                              color: "#00C48C",
                           },
                        }} />

                     </Box>
                  </Box>
                  <Line />
                  <Box className={classes.row}>
                     <Box alignItems={"flex-start"} display={"flex"} gap={"16px"}>
                        <SuccessDiscountBadge />
                        <Box>
                           <TextBlack16400 text={"Обменяй свой старый айфон и получи скидку на новый"} />
                           <Box marginTop={"10px"}>
                              <TextGrey16400 text={"- 400 000 сум"} />
                           </Box>
                        </Box>
                     </Box>
                     <Box>
                        <Checkbox {...label} defaultChecked sx={{
                           '&.Mui-checked': {
                              color: "#00C48C",

                           },
                        }} />
                     </Box>
                  </Box>
                  <Line />
               </Box>
               <ButtonBase onClick={() =>
                  dispatch({
                     type: "ADD_TO_CART",
                     payload: details
                  })
               } className={classnames.btn}>Добавить в корзину</ButtonBase>
            </Box>
         </Box>
      </Box>
   )
}

export default CheckoutDetails