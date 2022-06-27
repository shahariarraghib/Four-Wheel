import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import QualityAssurance from '../../../Images/quality.png'
import ReasonablePrice from '../../../Images/price-tag.png'
import exclusivecollection from '../../../Images/exclusive.png'
import { Container } from '@mui/system';

const TopBannerComponent = () => {
    return (
        <Container>
            <Box sx={{ flexGrow: 1, marginTop: -10 }} >
                <Grid container spacing={3}>

                    <Grid item xs={12} md={4} >
                        <Paper elevation={10} >
                            <Box sx={{ display: "flex", padding: 4, }}>
                                <Box>
                                    <img style={{ width: 60 }} src={QualityAssurance} alt="" />
                                </Box>
                                <Box >
                                    <Typography sx={{ display: "flex", justifyContent: "flex-start", paddingLeft: 2, fontWeight: "fontWeightBold", fontSize: 20, color: 'red' }} >Quality assurance</Typography>
                                    <Typography sx={{ display: "flex", justifyContent: "flex-start", paddingLeft: 2, color: 'gray', marginTop: 2 }}>High-quality cleaning agents and premium materials.</Typography>
                                </Box>
                            </Box>


                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={4} >
                        <Paper elevation={10} >
                            <Box sx={{ display: "flex", padding: 4 }}>
                                <Box>
                                    <img style={{ width: 60 }} src={ReasonablePrice} alt="" />
                                </Box>
                                <Box >
                                    <Typography sx={{ display: "flex", justifyContent: "flex-start", paddingLeft: 2, fontWeight: "fontWeightBold", fontSize: 20, color: 'red' }} >Reasonable price</Typography>
                                    <Typography sx={{ display: "flex", justifyContent: "flex-start", paddingLeft: 2, color: 'gray', marginTop: 2 }}>High-quality cleaning agents and premium materials.</Typography>
                                </Box>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={4} >
                        <Paper elevation={10} >
                            <Box sx={{ display: "flex", padding: 4 }}>
                                <Box>
                                    <img style={{ width: 60 }} src={exclusivecollection} alt="" />
                                </Box>
                                <Box >
                                    <Typography sx={{ display: "flex", justifyContent: "flex-start", paddingLeft: 2, fontWeight: "fontWeightBold", fontSize: 20, color: 'red' }} >Exclusive Collection</Typography>
                                    <Typography sx={{ display: "flex", justifyContent: "flex-start", paddingLeft: 2, color: 'gray', marginTop: 2 }}>High-quality cleaning agents and premium materials.</Typography>
                                </Box>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Box >
        </Container >
    );
};

export default TopBannerComponent;