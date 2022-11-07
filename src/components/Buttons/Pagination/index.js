import React from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/material';
import { colors } from '../../../colors';
const Paginations = () => {
   const { textGreen, textBlack, textWhite } = colors
   return (
      <Box>
         <Stack spacing={2}>
            <Pagination sx={{
               "& .MuiPaginationItem-root": {
                  width: "36px",
                  height: "36px",
                  borderRadius: "10px",
                  backgroundColor: `${textWhite}`,
                  border: "none",
                  fontFamily: "Montserrat, sans-serif",
                  color: `${textBlack}`,
                  fontSize: '16px',
                  fontWeight: "600",

               },
               "& .MuiPaginationItem-root.Mui-selected": {
                  backgroundColor: `${textGreen}`,
                  color: `${textWhite}`
               }
            }}
               count={10}
               shape="rounded"
               variant="outlined"
               hideNextButton={false}
               hidePrevButton={false}
            />
         </Stack>
      </Box>
   )
}
export default Paginations