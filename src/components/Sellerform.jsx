import { Box, Container, Grid, TextField } from "@mui/material";

export default function Sellerform(){
    return(
        <>  <Container   maxWidth='xs'>
            <div >
                Seller registration
            </div>
            <Box alignItems={"center"}>
                <Grid spacing={3} container>
                    <Grid item xs={6}>
                        <TextField/>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField/>
                    </Grid>
                </Grid>

            </Box>
            </Container>
        </>
    )
}