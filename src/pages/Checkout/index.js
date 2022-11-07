import { Box, InputBase, ButtonBase, Button } from '@mui/material'
import React, { useState } from 'react'
import { PropTypes } from "prop-types"
import { checkoutStyles } from './styles'
import TextGrey12400 from "../../components/Typography/TextGrey12400"
import TextGreen12500 from "../../components/Typography/Textgreen12500"
import TextBlue22600 from "../../components/Typography/TextBlue22600"
import TextBlack16600 from '../../components/Typography/TextBlack16600'
import TextBlack15400 from '../../components/Typography/TextBlack15400'
import TextBlack15500 from '../../components/Typography/TextBlack15500'
import TextWhite13600 from '../../components/Typography/Textwhite13600'
import TextGrey11400 from '../../components/Typography/TextGrey11400'
import { colors } from '../../colors'
import { icons } from '../../images'
import { products } from '../../utils/products'
import ReloadBadge from '../../components/Buttons/Badges/Reload'
import DiscountBadge from '../../components/Buttons/Badges/Discount'
import GiftBadge from '../../components/Buttons/Badges/Gift'
import Paginations from '../../components/Buttons/Pagination'
import { Link } from 'react-router-dom'
import { Product } from '../../context'
const { textWhite, textBlueAdmin } = colors
const { iconSearch, iconArrowRight } = icons
const Checkout = () => {
   const [query, setQuery] = useState("")

   const { state: {
      product
   } } = Product()

   const classes = checkoutStyles()

   const handleChange = (e) => {
      setQuery(e)
   }
   return (
      <Box className={classes.root}>
         <Box className={classes.container} >
            <Box display={"flex"} gap={"3px"}>
               <TextGrey12400 text={"Заявки"} />
               <img src={iconArrowRight} alt="" />
               <TextGreen12500 text={" Оформить заказ"} />
            </Box>
            <Box marginTop={"30px"}>
               <TextBlue22600 text={"Оформить заказ"} />
            </Box>
            <Box className={classes.input}>
               <InputBase
                  name="textmask"
                  fullWidth
                  onChange={(e) => handleChange(e.target.value)}
                  placeholder="Поиск по названию товара"
                  inputProps={{
                     sx: {

                     },
                     style: {
                        fontFamily: "Gilroy-regular, sans-serif",
                        color: textBlueAdmin,
                        fontSize: "16px",
                        fontWeight: "400",
                        backgroundColor: textWhite,
                        padding: "16px 0 15px 20px",
                        borderRadius: "26px 0 0 26px"
                     }
                  }}
               />
               <ButtonBase className={classes.button}>
                  <img src={iconSearch} alt="" />
               </ButtonBase>
            </Box>
            <Box className={classes.wrapper}>
               <TextBlack16600 text={`Все товары (${product.length})`} />
               <Box className={classes.row}>
                  {
                     product.filter((item) => item.title.toLowerCase().includes(query)).map((e, i) => <Box key={e.id} className={classes.card}>
                        <Box className={classes.imageWrapper}>
                           <Box className={classes.badges}>
                              <Box>
                                 {
                                    e.gift && <GiftBadge />
                                 }
                              </Box>
                              <Box>
                                 {
                                    e.reload && <ReloadBadge />
                                 }
                              </Box>
                              <Box>
                                 {e.percentage && <DiscountBadge />}
                              </Box>
                           </Box>
                           <img src={e.image} alt="" />
                        </Box>
                        <Box textAlign={"left"} marginY={"6px"}>
                           <Link to={`/checkout/${e.id}`}>
                              <TextBlack15400 text={e.title.length > 16 ? `${e.title.substring(0, 16)}...` : e.title} />
                           </Link>
                        </Box>
                        <Box textAlign={"left"}>
                           <TextBlack15500 text={`${e.price} сум`} />
                        </Box>
                        <Box className={classes.footer}>
                           <Box className={classes.badge}>
                              <TextWhite13600 text={`от ${e.discount} сум`} />
                           </Box>
                           <Box>
                              <TextGrey11400 text={e.combo} />
                           </Box>
                        </Box>
                     </Box>)
                  }

                  <Box className={classes.pagination}>
                     <Paginations />
                  </Box>
               </Box>
            </Box>
         </Box>
      </Box>
   )
}

export default Checkout