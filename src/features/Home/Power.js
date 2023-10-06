import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { image } from "../../data/power";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "center",
    boxShadow: "rgba(0,0,0,1)",
    background: "#31455C",

    [theme.breakpoints.down("xs")]: { paddingBottom: "12vw" },
  },

  imageContainer: {
    position: "relative",
    height: "10vw",
    width: "100%",
    objectFit: "scale-down",
   // transition: "0.3s all ease-in-out",
    // border: "0.1px #f7f2f2 solid",
    padding: "1vw",
    color: "white",

    // "&:hover": {
    //   boxShadow: "1px 8px 2px 1px rgba(0, 0, 0, .2);",
    // },
    [theme.breakpoints.down("xs")]: {
      height: "25vw",
    },
  },
  container: {
    //padding: "80px",
    display: "center",
    padding: "1vw 1vw",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      paddingTop: 0,
    },
    [theme.breakpoints.down("xs")]: {
      display: "center",
      paddingRight: "7vw",
    },
  },
  title: {
    fontWeight: "600",
    fontSize: "3vw",
    color: "#63686A",
    [theme.breakpoints.down("md")]: {
      paddingTop: "2vw",
    },

    [theme.breakpoints.down("xs")]: {
      fontSize: "6vw",
    },
  },
}));

const Power = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography
        style={{
          fontFamily: "Freestyle Script",
          fontSize: "60px",
          color: "#4998B9",
        }}
      >
        Makes Happen
      </Typography>
      <Typography
        style={{ fontWeight: "bold", color: "white", fontSize: "50px" }}
      >
        OUR SERVICE
      </Typography>
      <br />
      <Container className={classes.container}>
        <Grid
          container
          spacing={1}
          justify="center"
          style={{
            alignItems: "center",
            paddingBottom: "10px",
            width: "1300px",
            gridGap: "20px",
          }}
        >
          <div
            style={{
              width: "300px",
              height: "350px",
              //  borderRadius: "50%",
              // border: "2px solid #4A99BB",
              background: "#0F2135",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              paddingBottom: "20px",
            }}
          >
            <img
              src="/image/image-08.png"
              className={classes.imageContainer}
            ></img>
            <Typography
              style={{ color: "white", fontWeight: "500", fontSize: "20px" }}
            >
              Branding & Creative
            </Typography>
            <div style={{ width: "80%" }}>
              <Typography
                style={{
                  color: "white",
                  fontWeight: "500",
                  textAlign: "justify",
                  fontSize: "15px",
                }}
              >
                Creative branding tactics are marketing strategies that
                demonstrate how an individual, company or organization can
                provide for their customers through everyday, innovative
                methods.
              </Typography>
            </div>
          </div>

          <div
            style={{
              width: "300px",
              height: "350px",
              //  borderRadius: "50%",
              // border: "2px solid #4A99BB",
              background: "#0F2135",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              paddingBottom: "20px",
            }}
          >
            <img
              src="/image/image-08.png"
              className={classes.imageContainer}
            ></img>
            <Typography
              style={{ color: "white", fontWeight: "500", fontSize: "20px" }}
            >
              Web & APP. Development
            </Typography>
            <div style={{ width: "80%" }}>
              <Typography
                style={{
                  color: "white",
                  fontWeight: "500",
                  textAlign: "justify",
                  fontSize: "15px",
                }}
              >
                The creation of application programs that reside on remote
                servers and are delivered to the user's device over the
                internet.
              </Typography>
            </div>
          </div>

          <div
            style={{
              width: "300px",
              height: "350px",
              //  borderRadius: "50%",
              // border: "2px solid #4A99BB",
              background: "#0F2135",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              paddingBottom: "20px",
            }}
          >
            <img
              src="/image/image-08.png"
              className={classes.imageContainer}
            ></img>
            <Typography
              style={{ color: "white", fontWeight: "500", fontSize: "20px" }}
            >
              Motion Graphics & Animation
            </Typography>
            <div style={{ width: "80%" }}>
              <Typography
                style={{
                  color: "white",
                  fontWeight: "500",
                  textAlign: "justify",
                  fontSize: "15px",
                }}
              >
                Works with animation, audio, and visual effects to create moving
                content and graphics for various media, such as television, the
                internet, and film.
              </Typography>
            </div>
          </div>

          <div
            style={{
              width: "300px",
              height: "350px",
              //  borderRadius: "50%",
              // border: "2px solid #4A99BB",
              background: "#0F2135",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              paddingBottom: "20px",
            }}
          >
            <img
              src="/image/image-08.png"
              className={classes.imageContainer}
            ></img>
            <Typography
              style={{ color: "white", fontWeight: "500", fontSize: "20px" }}
            >
              IT Solution
            </Typography>
            <div style={{ width: "80%" }}>
              <Typography
                style={{
                  color: "white",
                  fontWeight: "500",
                  textAlign: "justify",
                  fontSize: "15px",
                }}
              >
                Provide a range of produstc to support businesses from an IT and
                a non-IT perspective: the software development lifecycle (SDLC)
                project management.
              </Typography>
            </div>
          </div>

          <div
            style={{
              width: "300px",
              height: "350px",
              //  borderRadius: "50%",
              // border: "2px solid #4A99BB",
              background: "#0F2135",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              paddingBottom: "20px",
            }}
          >
            <img
              src="/image/image-08.png"
              className={classes.imageContainer}
            ></img>
            <Typography
              style={{ color: "white", fontWeight: "500", fontSize: "20px" }}
            >
              Public Relation
            </Typography>
            <div style={{ width: "80%" }}>
              <Typography
                style={{
                  color: "white",
                  fontWeight: "500",
                  textAlign: "justify",
                  fontSize: "15px",
                }}
              >
                The set of techniques and strategies related to managing how
                information about an individual or company is disseminated to
                the public, and especially the media.
              </Typography>
            </div>
          </div>

          <div
            style={{
              width: "300px",
              height: "350px",
              //  borderRadius: "50%",
              // border: "2px solid #4A99BB",
              background: "#0F2135",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              paddingBottom: "20px",
            }}
          >
            <img
              src="/image/image-08.png"
              className={classes.imageContainer}
            ></img>
            <Typography
              style={{ color: "white", fontWeight: "500", fontSize: "20px" }}
            >
              Event Solution
            </Typography>
            <div style={{ width: "80%" }}>
              <Typography
                style={{
                  color: "white",
                  fontWeight: "500",
                  textAlign: "justify",
                  fontSize: "15px",
                }}
              >
                We are a full-service event production company that specializes
                in planning corporate events (both in-person and virtual) with
                an experienced, dedicated, and innovative team.
              </Typography>
            </div>
          </div>

          <div
            style={{
              width: "300px",
              height: "350px",
              //  borderRadius: "50%",
              // border: "2px solid #4A99BB",
              background: "#0F2135",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              paddingBottom: "20px",
            }}
          >
            <img
              src="/image/image-08.png"
              className={classes.imageContainer}
            ></img>
            <Typography
              style={{ color: "white", fontWeight: "500", fontSize: "20px" }}
            >
              Marketing
            </Typography>
            <div style={{ width: "80%" }}>
              <Typography
                style={{
                  color: "white",
                  fontWeight: "500",
                  textAlign: "justify",
                  fontSize: "15px",
                }}
              >
                Activities a company undertakes to promote the buying or selling
                of a product or service. Marketing includes advetising, selling,
                and delivering products to consumers or other businesses.
              </Typography>
            </div>
          </div>

          <div
            style={{
              width: "300px",
              height: "350px",
              //  borderRadius: "50%",
              // border: "2px solid #4A99BB",
              background: "#0F2135",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              paddingBottom: "20px",
            }}
          >
            <img
              src="/image/image-08.png"
              className={classes.imageContainer}
            ></img>
            <Typography
              style={{ color: "white", fontWeight: "500", fontSize: "20px" }}
            >
              Communication & Promotion
            </Typography>
            <div style={{ width: "80%" }}>
              <Typography
                style={{
                  color: "white",
                  fontWeight: "500",
                  textAlign: "justify",
                  fontSize: "15px",
                }}
              >
                Consists of advertising, public relations, personal selling,
                sales promotions, direct sales, and digitak marketing used to
                contact with consumers, establish relationships with customers,
                and persuade customers.
              </Typography>
            </div>
          </div>

          {/* <Grid item xs={12} style={{ display: "center" }}>
            <img
              src="/image/image9.png"
              width="300"
              height="100"
              style={{ border: "0.1px #f6f7f6 solid" }}
            />
          </Grid> */}
        </Grid>
      </Container>
    </div>
  );
};

export default Power;
