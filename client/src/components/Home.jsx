// import React, { useEffect, useState } from "react";
// import {
//   Container,
//   Typography,
//   Box,
//   Button,
//   Grid,
//   Card,
//   CardContent,
//   CardMedia,
// } from "@mui/material";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import {
//   FaFacebookF,
//   FaTwitter,
//   FaLinkedin,
//   FaInstagram,
//   FaYoutube,
// } from "react-icons/fa"; 
// import ImageWithCursorEffect from "./ImageWithCursorEffect";
// import Testimonials from "./Testimonial/Testimonial";

// const Home = () => {
//   const navigate = useNavigate();
//   const [textIndex, setTextIndex] = useState(0);
//   const [isTyping, setIsTyping] = useState(true);
//   const descriptionText =
//     "Empowering connections among MCA alumni to foster collaboration, mentorship, and professional growth within a dynamic and supportive community.";

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (isTyping) {
//         if (textIndex < descriptionText.length) {
//           setTextIndex((prev) => prev + 1);
//         } else {
//           setIsTyping(false);
//         }
//       } else {
//         if (textIndex > 0) {
//           setTextIndex((prev) => prev - 1);
//         } else {
//           setIsTyping(true);
//         }
//       }
//     }, 100);

//     return () => clearInterval(interval);
//   }, [textIndex, isTyping]);

//   return (
//     <div>
//       <Box
//         sx={{
//           height: { xs: "80vh", sm: "95vh" },
//           backgroundImage: `url('https://plus.unsplash.com/premium_photo-1672940671025-113a634f83d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxhY2slMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww')`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "space-between",
//           padding: { xs: "0 2%", md: "0 5%" },
//           color: "#fff",
//           position: "relative",
//         }}
//       >
//         <Box
//           sx={{
//             position: "absolute",
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,
//             backgroundColor: "rgba(0, 0, 0, 0.6)",
//           }}
//         />
//         <Box sx={{ zIndex: 2, textAlign: "left", maxWidth: { xs: "100%", sm: "60%", md: "45%" } }}>
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1.2 }}
//           >
//             <Typography
//               variant="h3"
//               gutterBottom
//               sx={{ fontWeight: "bold", letterSpacing: 1, color: "white", fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" } }}
//             >
//               Welcome to the MCA Alumni Network
//             </Typography>
//             <Typography variant="h6" gutterBottom sx={{ mb: 3 }}>
//               {descriptionText.slice(0, textIndex)}
//             </Typography>
//             <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 2, mt: 2 }}>
//               <motion.div
//                 whileHover={{ scale: 1.1 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <Button
//                   variant="contained"
//                   sx={{
//                     backgroundColor: "#f06292",
//                     borderRadius: 3,
//                     color: "#fff",
//                     "&:hover": { backgroundColor: "#e91e63" },
//                   }}
//                   onClick={() => navigate("/about-us")}
//                 >
//                   About Us
//                 </Button>
//               </motion.div>
//               <motion.div
//                 whileHover={{ scale: 1.1 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <Button
//                   variant="contained"
//                   sx={{
//                     backgroundColor: "#f06292",
//                     borderRadius: 3,
//                     color: "#fff",
//                     "&:hover": { backgroundColor: "#e91e63" },
//                   }}
//                   onClick={() => navigate("/register")}
//                 >
//                   Join Us
//                 </Button>
//               </motion.div>
//             </Box>
//           </motion.div>
//         </Box>
//         <ImageWithCursorEffect />
//         <Box
//           sx={{
//             position: "fixed",
//             top: "45%",
//             right: 20,
//             transform: "translateY(-50%)",
//             display: "flex",
//             flexDirection: "column",
//             gap: 2,
//             zIndex: 3,
//           }}
//         >
//           {/* Social Media Icons */}
//           {[
//             { icon: FaFacebookF, link: "https://facebook.com", color: "#4267B2" },
//             { icon: FaTwitter, link: "https://twitter.com", color: "#1DA1F2" },
//             { icon: FaLinkedin, link: "https://linkedin.com", color: "#0077B5" },
//             { icon: FaInstagram, link: "https://instagram.com", color: "#E1306C" },
//             { icon: FaYoutube, link: "https://youtube.com", color: "#FF0000" },
//           ].map(({ icon: Icon, link, color }, index) => (
//             <a
//               key={index}
//               href={link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="social-icon"
//               style={{
//                 color: "#F5DEB3",
//                 transition: "color 0.3s ease",
//                 textDecoration: "none",
//               }}
//               onMouseOver={(e) => (e.currentTarget.style.color = color)}
//               onMouseOut={(e) => (e.currentTarget.style.color = "#F5DEB3")}
//             >
//               <Icon size={30} />
//             </a>
//           ))}
//         </Box>
//       </Box>

//       {/* Features Section */}
//       <Container sx={{ mt: 8, mb: 4 }}>
//         <Typography variant="h4" align="center" gutterBottom sx={{ mb: 4 }}>
//           Our Features
//         </Typography>
//         <Grid container spacing={4}>
//           {[
//             {
//               title: "Networking Opportunities",
//               description:
//                 "Connect with alumni and expand your professional network.",
//               image:
//                 "https://blog.goinglobal.com/wp-content/uploads/2023/11/networking-job-search-goinglobal.jpg",
//               gradient:
//                 "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9))",
//             },
//             {
//               title: "Career Development",
//               description:
//                 "Access resources and mentorship to advance your career.",
//               image:
//                 "https://www.tierpoint.com/wp-content/uploads/2022/05/8-IT-Professional-Career-Development-Tips-in-a-Managed-Services-World_blog.jpg",
//               gradient:
//                 "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9))",
//             },
//             {
//               title: "Community Engagement",
//               description:
//                 "Participate in events and give back to the community.",
//               image:
//                 "https://sustainingcommunity.wordpress.com/wp-content/uploads/2011/03/community-engagement-definition-3.png",
//               gradient:
//                 "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9))",
//             },
//           ].map((feature, index) => (
//             <Grid item xs={12} sm={6} md={4} key={index}>
//               <motion.div
//                 whileHover={{ scale: 1.05 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <Card
//                   sx={{
//                     position: "relative",
//                     overflow: "hidden",
//                     height: "250px",
//                     transition: "transform 0.2s ease-in-out",
//                     boxShadow: 3,
//                     borderRadius: 5,
//                   }}
//                 >
//                   <CardMedia
//                     component="img"
//                     image={feature.image}
//                     alt={feature.title}
//                     sx={{
//                       position: "absolute",
//                       top: 0,
//                       left: 0,
//                       width: "100%",
//                       height: "100%",
//                       zIndex: 1,
//                       objectFit: "cover",
//                       transition: "transform 0.2s ease-in-out",
//                       borderRadius: 3,
//                       "&:hover": {
//                         transform: "scale(1.5)",
//                       },
//                     }}
//                   />
//                   <Box
//                     sx={{
//                       position: "absolute",
//                       top: 0,
//                       left: 0,
//                       width: "100%",
//                       height: "100%",
//                       background: feature.gradient,
//                       zIndex: 2,
//                       borderRadius: 5,
//                     }}
//                   />
//                   <CardContent
//                     sx={{
//                       position: "relative",
//                       zIndex: 3,
//                       color: "#fff",
//                       textAlign: "center",
//                       top: "50%",
//                       transform: "translateY(-50%)",
//                       transition:
//                         "transform 0.3s ease-in-out, font-size 0.3s ease-in-out",
//                     }}
//                   >
//                     <Typography
//                       variant="h5"
//                       sx={{
//                         fontWeight: "bold",
//                         transition: "font-size 0.3s ease-in-out",
//                         "&:hover": {
//                           fontSize: "2rem",
//                         },
//                       }}
//                     >
//                       {feature.title}
//                     </Typography>
//                     <Typography
//                       variant="body2"
//                       sx={{
//                         mt: 1,
//                         fontSize: { xs: "0.8rem", md: "1rem" },
//                         transition: "font-size 0.3s ease-in-out",
//                         "&:hover": {
//                           fontSize: "1.3rem",
//                         },
//                       }}
//                     >
//                       {feature.description}
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//       <Testimonials />
//     </div>
//   );
// };

// export default Home;

import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Box,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa"; 
import ImageWithCursorEffect from "./ImageWithCursorEffect";
import Testimonials from "./Testimonial/Testimonial";
import gsap from 'gsap'


const Home = () => {
  const navigate = useNavigate();
  const [textIndex, setTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const descriptionText =
    "Empowering connections among MCA alumni to foster collaboration, mentorship, and professional growth within a dynamic and supportive community.";

    useEffect(() => {
      const ctx = gsap.context(() => {
        // Ensure initial styles are set to scale 1 and opacity 1
       
  
        // Timeline for animation
        const tl = gsap.timeline();
        tl.fromTo('.homeGsap',
          {
            scale: 0, // Starting position (from)
            opacity: 0, // Starting opacity (from)
          },
          {
            scale: 1, // Ending position (to)
            opacity: 1, // Ending opacity (to)
            duration: 1, // Animation duration
            ease: "expo.inOut", // Easing function
            stagger: 0.3, 
           
          }
        );
      });

     
  
      // Cleanup GSAP context
      return () => {
        ctx.revert();
      };
    }, []); 



  useEffect(() => {
    const interval = setInterval(() => {
      if (isTyping) {
        if (textIndex < descriptionText.length) {
          setTextIndex((prev) => prev + 1);
        } else {
          setIsTyping(false);
        }
      } else {
        if (textIndex > 0) {
          setTextIndex((prev) => prev - 1);
        } else {
          setIsTyping(true);
        }
      }
    }, 100);

    return () => clearInterval(interval);
  }, [textIndex, isTyping]);

  return (
    <div>
      {/* Hero Section */}
      <Box
        sx={{
          height: { xs: "80vh", sm: "95vh" },
          backgroundImage: `url('https://plus.unsplash.com/premium_photo-1672940671025-113a634f83d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxhY2slMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: { xs: "0 2%", md: "0 5%" },
          color: "#fff",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
          }}
        />
        
        {/* Left Section - Text and Buttons */}
        <Box sx={{ zIndex: 2, textAlign: "left", maxWidth: { xs: "100%", sm: "60%", md: "45%" } }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <Typography
              variant="h3"
              gutterBottom
              sx={{
                fontWeight: "bold",
                letterSpacing: 1,
                color: "white",
                fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" }
              }}
            >
              Welcome to the MCA Alumni Network
            </Typography>
            <Typography variant="h6" gutterBottom sx={{ mb: 3, fontSize: { xs: "0.9rem", md: "1rem" } }}>
              {descriptionText.slice(0, textIndex)}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 2, mt: 2 }}>
              <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#f06292",
                    borderRadius: 3,
                    color: "#fff",
                    "&:hover": { backgroundColor: "#e91e63" },
                  }}
                  onClick={() => navigate("/about-us")}
                >
                  About Us
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#f06292",
                    borderRadius: 3,
                    color: "#fff",
                    "&:hover": { backgroundColor: "#e91e63" },
                  }}
                  onClick={() => navigate("/register")}
                >
                  Join Us
                </Button>
              </motion.div>
            </Box>
          </motion.div>
        </Box>
        
        {/* Cursor Effect Component */}
        <ImageWithCursorEffect />

        {/* Social Media Icons */}
        <Box
          sx={{
            position: "fixed",
            top: "45%",
            right: 20,
            transform: "translateY(-50%)",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            zIndex: 3,
          }}
        >
          {[ 
            { icon: FaFacebookF, link: "https://facebook.com", color: "#4267B2" },
            { icon: FaTwitter, link: "https://twitter.com", color: "#1DA1F2" },
            { icon: FaLinkedin, link: "https://linkedin.com", color: "#0077B5" },
            { icon: FaInstagram, link: "https://instagram.com", color: "#E1306C" },
            { icon: FaYoutube, link: "https://youtube.com", color: "#FF0000" }
          ].map(({ icon: Icon, link, color }, index) => (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#F5DEB3",
                transition: "color 0.3s ease",
                textDecoration: "none",
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = color)}
              onMouseOut={(e) => (e.currentTarget.style.color = "#F5DEB3")}
            >
              <Icon size={30} />
            </a>
          ))}
        </Box>
      </Box>

      {/* Features Section */}
      <Container sx={{ mt: 8, mb: 4 }}>
        <Typography variant="h4" align="center" gutterBottom sx={{ mb: 4 }}>
          Our Features
        </Typography>
        <Grid container spacing={4}>
          {[
            {
              title: "Networking Opportunities",
              description: "Connect with alumni and expand your professional network.",
              image: "https://blog.goinglobal.com/wp-content/uploads/2023/11/networking-job-search-goinglobal.jpg",
              gradient: "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9))",
            },
            {
              title: "Career Development",
              description: "Access resources and mentorship to advance your career.",
              image: "https://www.tierpoint.com/wp-content/uploads/2022/05/8-IT-Professional-Career-Development-Tips-in-a-Managed-Services-World_blog.jpg",
              gradient: "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9))",
            },
            {
              title: "Community Engagement",
              description: "Participate in events and give back to the community.",
              image: "https://sustainingcommunity.wordpress.com/wp-content/uploads/2011/03/community-engagement-definition-3.png",
              gradient: "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9))",
            },
          ].map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                <Card
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                    height: { xs: "200px", sm: "250px", md: "300px" },
                    transition: "transform 0.2s ease-in-out",
                    boxShadow: 3,
                    borderRadius: 5,
                  }}
                >
                  <CardMedia
                    component="img"
                    image={feature.image}
                    alt={feature.title}
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      zIndex: 1,
                      objectFit: "cover",
                      transition: "transform 0.2s ease-in-out",
                      borderRadius: 3,
                      "&:hover": { transform: "scale(1.5)" },
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      background: feature.gradient,
                      zIndex: 2,
                      borderRadius: 5,
                    }}
                  />
                  <CardContent
                    sx={{
                      position: "relative",
                      zIndex: 3,
                      color: "#fff",
                      textAlign: "center",
                      top: "50%",
                      transform: "translateY(-50%)",
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: "bold",
                        "&:hover": { fontSize: "1.5rem" },
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        mt: 1,
                        fontSize: { xs: "0.8rem", md: "1rem" },
                      }}
                    >
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Testimonials />
    </div>
  );
};

export default Home;

