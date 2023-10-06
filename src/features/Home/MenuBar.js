// import React, { useState } from "react";
// import CancelIcon from "@material-ui/icons/Cancel";
// import Typography from "@material-ui/core/Typography";

// import { makeStyles } from "@material-ui/core/styles";
// import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
// import { Link } from "@material-ui/core";
// const useStyles = makeStyles((theme) => ({
//   root: {
//     background: "#fff",
//     minHeight: "100vh",
//     display: "flex",
//     position: "fixed",
//     top: 0,
//     left: 0,
//     right: 0,
//     zIndex: 999,
//     flexDirection: "column",
//     // justifyContent: "center",
//     // marginTop: "5vw",
//     alignItems: "center",
//   },
//   menu: {
//     fontSize: "2rem",
//     paddingRight: "1rem",
//     textAlign: "center",
//   },
//   menuWrapper: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   container: {
//     paddingTop: "5vw",
//   },
//   cancel: {
//     marginTop: "5vw",
//     width: "5vw",
//     height: "5vw",
//   },
//   link:{
//     color:"#b2abab"
//   }
// }));
// const MenuBar = (props) => {
//   const { setOpenMenu, openMenu } = props;
//   const [openAbout, setOpenAbout] = useState(false);
//   const classes = useStyles();
//   return (
//     <div className={classes.root}>
//       {openMenu && (
//         <CancelIcon
//           color="primary"
//           onClick={() => setOpenMenu(false)}
//           className={classes.cancel}
//         />
//       )}
//       <div className={classes.container}>
//         <Typography className={classes.menu}>Home</Typography>

//         <div className={classes.menuWrapper}>
//           <Link color="black" onClick={() => setOpenAbout(true)} underline="none">
//             <Typography className={classes.menu}>About</Typography>
//             <ArrowForwardIosIcon />
//             <div className={classes.link}>
//             {openAbout && <Typography>Introduction</Typography>}
//             {openAbout && <Typography>Who We Are</Typography>}
//             {openAbout && <Typography>Mission & Vision</Typography>}
//             {openAbout && <Typography>Core Values</Typography>}
//             {openAbout && <Typography>Team</Typography>}
//             </div>
//           </Link>
//         </div>
//         <div className={classes.menuWrapper}>
//           <Typography className={classes.menu}>Areas of Work</Typography>
//           <ArrowForwardIosIcon />
//         </div>
//         <div className={classes.menuWrapper}>
//           <Typography className={classes.menu}>Capabilities</Typography>
//           <ArrowForwardIosIcon />
//         </div>
//         <div className={classes.menuWrapper}>
//           <Typography className={classes.menu}>Resources</Typography>
//           <ArrowForwardIosIcon />
//         </div>
//         <div className={classes.menuWrapper}>
//           <Typography className={classes.menu}>Carrers</Typography>
//           <ArrowForwardIosIcon />
//         </div>
//         <Typography className={classes.menu}>Events</Typography>
//       </div>
//     </div>
//   );
// };

// export default MenuBar;
