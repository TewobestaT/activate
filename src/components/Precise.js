import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import img3 from "../image-03.png";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Row, Col } from "react-flexbox-grid";
const useStyles = makeStyles((theme) => ({
  root: {
    //display: "flex",
    // placeItems: "start",
    //paddingLeft: 20,
    paddingTop: 20,
    // width: "50%",
    // height: "10%",
  },
  container: {
    //display: "flex",
    width: "100%",
    height: "10%",
  },
  imag: {
    //justifyContent: "flex-start",
  },
}));

const Precise = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <Grid
          container
          spacing={1}
          style={{
            paddingLeft: "6vw",
            border: "2px solid #397793",
            padding: "1rem",
          }}
        >
          <Grid item xs={12} style={{ display: "flex", alignItems: "center" }}>
            <img
              className={classes.imag}
              src={img3}
              alt="My Image"
              width="20%"
              height="100%"
              style={{ textAlign: "left" }}
            />
            <div
              style={{
                textAlign: "right",
                marginLeft: "10%",
                paddingTop: "5vh",
              }}
            >
              <Row>
                <Col>
                  <a style={{ marginLeft: "0%" }}>HOME</a>
                  <a style={{ marginLeft: "10%" }}>ABOUT</a>
                  <a style={{ marginLeft: "10%" }}>SERVICE</a>
                  <a style={{ marginLeft: "10%" }}>EXPERIENCE</a>
                  <a style={{ marginLeft: "10%" }}>CUSTOMERS</a>
                </Col>
                <Col>
                  <Button
                    variant="contained"
                    style={{ width:"200px", backgroundColor: "#4998B9", marginLeft: "100%", borderRadius:"10px", color:"white" }}
                  >
                    CONTACT US
                  </Button>
                </Col>
              </Row>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Precise;
