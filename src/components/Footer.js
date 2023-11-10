import * as React from "react";
// import '../styles/Footer.css';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <div>
      <div className="main1">

       
          <Container maxWidth="lg">
            <Grid container spacing={5}>
              <Grid item xs={10} sm={3}>
                <Typography variant="h6" color="text.primary" gutterBottom>
                  About Us
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  We are Greenhousenursery, dedicated to providing the best Plant's to our
                  customers.
                </Typography>
              </Grid>

              <Grid item xs={10} sm={3}>
                <Typography variant="h6" color="text.primary" gutterBottom>
                  <ul>
                    <li><a href="../components/HomePage.js" className="Contact">Home</a></li>
                    <li><a href="../components/About.js" className="Contact">About</a></li>
                    <li><a href="../components/MenuPage.js" className="Contact">Menu</a></li>
                    <li><a href="../components/Cart.js" className="Contact">Cart</a></li>
                    <li><a href="../components/ContacctPage.js" className="Contact">Contact</a></li>
                  </ul>
                </Typography>
              </Grid>

              <Grid item xs={10} sm={3}>
                <Typography variant="h6" color="text.primary" gutterBottom>
                  Contact Us
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Unit No:1015/1016, 9'th Floor, Vasavi MPM Grand, Ameerpet, Hyderabad, Telagana.
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Email: greenhousenursery@gmail.com
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Phone: +91 99876 54321
                </Typography>
              </Grid>

              <Grid item xs={10} sm={3}>
                <Typography variant="h6" color="text.primary" gutterBottom>
                  Follow Us
                </Typography>
                <Link href="https://www.facebook.com/">
                  <Facebook />
                </Link>
                <Link href="https://www.youtube.com/" >
                  <YouTube />
                </Link>
                <Link
                  href="https://www.instagram.com/"
                // color="inherit"
                // sx={{ pl: 1, pr: 1 }}
                >
                  <Instagram />
                </Link>
                <Link href="https://www.twitter.com/" >
                  <Twitter />
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Typography variant="body2" color="text.secondary" align="center">
                {"Copyright © "}
                <Link href="">
                  Your Website
                </Link>

              </Typography>
            </Box>

          </Container>
      </div>
    </div>
  );
}