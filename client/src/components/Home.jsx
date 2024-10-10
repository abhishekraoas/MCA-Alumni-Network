
import React, { useEffect, useState } from "react";
import { Container, Typography, Box, Grid, Button, Card, CardContent, CardMedia } from "@mui/material";

import React from "react";
import { useEffect, useState } from "react";
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
} from "react-icons/fa"; // Import social media icons
import ImageWithCursorEffect from "./ImageWithCursorEffect";
import Testimonials from "./Testimonial/Testimonial";

const Home = () => {
  const navigate = useNavigate(); // Initialize navigate for redirection

  // State for typing effect
  const [textIndex, setTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const descriptionText =
    "Empowering connections among MCA alumni to foster collaboration, mentorship, and professional growth within a dynamic and supportive community.";

  useEffect(() => {
    const interval = setInterval(() => {
      if (isTyping) {
        if (textIndex < descriptionText.length) {
          setTextIndex((prev) => prev + 1);
        } else {
          setIsTyping(false);
        }
      } else {
        // Start deleting the text
        if (textIndex > 0) {
          setTextIndex((prev) => prev - 1); // Delete character
        } else {
          // Reset to typing state after deleting
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
          height: "95vh",
          backgroundImage: `url('https://plus.unsplash.com/premium_photo-1701590725824-3d0482721544?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between", // Space between description and image
          padding: "0 5%", // Add padding for better layout
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

        {/* Left Section - Description and Buttons */}
        <Box sx={{ zIndex: 2, textAlign: "left", maxWidth: "45%" }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <Typography
              variant="h2"
              gutterBottom
              sx={{ fontWeight: "bold", letterSpacing: 1, color:"white" }}
            >
              Welcome to the MCA Alumni Network
            </Typography>
            <Typography variant="h6" gutterBottom sx={{ mb: 3 }}>
              {descriptionText.slice(0, textIndex)}
            </Typography>
            
            {/* Buttons */}
            <Box sx={{ display: "flex", gap: 3, mt: 2 }}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
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


              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >

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
        {/* THhis is cursor effect changes made  */}
        <ImageWithCursorEffect />
        {/* Right Section - Hover Motion Image */}
        {/* { <motion.div
          initial={{ y: 0 }}
          animate={{ y: [-10, 0, 10, 0] }}
          transition={{ duration: 3, repeat: Infinity }} 
          whileHover={{ scale: 1.1, rotate: 3 }} 
        >
          <img
            src="https://astrorei.io/static/dedicated-dev-team-729a36b484a719fd20b200f39d614100.svg"
            alt="MCA Alumni Network"
            style={{
              maxWidth: '550px', 
              boxShadow: '0',
              marginRight: '90px',
            }}
          />
        </motion.div> } */}

        <Box

      sx={{
        position: 'fixed',
        top: '45%',
        right: 20,
        transform: 'translateY(-50%)',
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
      }}
    >
      {/* Each anchor has its own inline styles for hover effects */}
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
        style={{ color: '#F5DEB3', transition: 'color 0.3s ease', textDecoration: 'none' }}
        onMouseOver={(e) => (e.currentTarget.style.color = '#4267B2')}
        onMouseOut={(e) => (e.currentTarget.style.color = '#F5DEB3')}
      >
        <FaFacebookF size={40} />
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
        style={{ color: '#F5DEB3', transition: 'color 0.3s ease', textDecoration: 'none' }}
        onMouseOver={(e) => (e.currentTarget.style.color = '#1DA1F2')}
        onMouseOut={(e) => (e.currentTarget.style.color = '#F5DEB3')}
      >
        <FaTwitter size={40} />
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
        style={{ color: '#F5DEB3', transition: 'color 0.3s ease', textDecoration: 'none' }}
        onMouseOver={(e) => (e.currentTarget.style.color = '#0077B5')}
        onMouseOut={(e) => (e.currentTarget.style.color = '#F5DEB3')}
      >
        <FaLinkedin size={40} />
      </a>
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
        style={{ color: '#F5DEB3', transition: 'color 0.3s ease', textDecoration: 'none' }}
        onMouseOver={(e) => (e.currentTarget.style.color = '#E1306C')}
        onMouseOut={(e) => (e.currentTarget.style.color = '#F5DEB3')}
      >
        <FaInstagram size={40} />
      </a>
      <a
        href="https://youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
        style={{ color: 'wheat', transition: 'color 0.3s ease', textDecoration: 'none' }}
        onMouseOver={(e) => (e.currentTarget.style.color = '#FF0000')}
        onMouseOut={(e) => (e.currentTarget.style.color = '#F5DEB3')}
      >
        <FaYoutube size={40} />
      </a>
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
        gradient: "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9))", // Darker gradient
      },
      {
        title: "Career Development",
        description: "Access resources and mentorship to advance your career.",
        image: "https://www.tierpoint.com/wp-content/uploads/2022/05/8-IT-Professional-Career-Development-Tips-in-a-Managed-Services-World_blog.jpg",
        gradient: "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9))", // Darker gradient
      },
      {
        title: "Community Engagement",
        description: "Participate in events and give back to the community.",
        image: "https://sustainingcommunity.wordpress.com/wp-content/uploads/2011/03/community-engagement-definition-3.png",
        gradient: "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9))", // Darker gradient
      },
    ].map((feature, index) => (
      <Grid item xs={12} sm={6} md={4} key={index}>
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
          <Card
            sx={{
              position: 'relative',
              overflow: 'hidden',
              height: '250px', 
              transition: 'transform 0.2s ease-in-out',
              boxShadow: 3,
              borderRadius: 5, 

          sx={{
            position: "fixed",
            top: "45%",
            right: 20,
            transform: "translateY(-50%)",
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          {/* Each anchor has its own inline styles for hover effects */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            style={{
              color: "#F5DEB3",
              transition: "color 0.3s ease",
              textDecoration: "none",

            }}
            onMouseOver={(e) => (e.currentTarget.style.color = "#4267B2")}
            onMouseOut={(e) => (e.currentTarget.style.color = "#F5DEB3")}
          >
            <FaFacebookF size={40} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            style={{
              color: "#F5DEB3",
              transition: "color 0.3s ease",
              textDecoration: "none",
            }}
            onMouseOver={(e) => (e.currentTarget.style.color = "#1DA1F2")}
            onMouseOut={(e) => (e.currentTarget.style.color = "#F5DEB3")}
          >
            <FaTwitter size={40} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            style={{
              color: "#F5DEB3",
              transition: "color 0.3s ease",
              textDecoration: "none",
            }}
            onMouseOver={(e) => (e.currentTarget.style.color = "#0077B5")}
            onMouseOut={(e) => (e.currentTarget.style.color = "#F5DEB3")}
          >
            <FaLinkedin size={40} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            style={{
              color: "#F5DEB3",
              transition: "color 0.3s ease",
              textDecoration: "none",
            }}
            onMouseOver={(e) => (e.currentTarget.style.color = "#E1306C")}
            onMouseOut={(e) => (e.currentTarget.style.color = "#F5DEB3")}
          >
            <FaInstagram size={40} />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            style={{
              color: "wheat",
              transition: "color 0.3s ease",
              textDecoration: "none",
            }}
            onMouseOver={(e) => (e.currentTarget.style.color = "#FF0000")}
            onMouseOut={(e) => (e.currentTarget.style.color = "#F5DEB3")}
          >
            <FaYoutube size={40} />
          </a>
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
              description:
                "Connect with alumni and expand your professional network.",
              image:
                "https://blog.goinglobal.com/wp-content/uploads/2023/11/networking-job-search-goinglobal.jpg",
              gradient:
                "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9))", // Darker gradient
            },
            {
              title: "Career Development",
              description:
                "Access resources and mentorship to advance your career.",
              image:
                "https://www.tierpoint.com/wp-content/uploads/2022/05/8-IT-Professional-Career-Development-Tips-in-a-Managed-Services-World_blog.jpg",
              gradient:
                "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9))", // Darker gradient
            },
            {
              title: "Community Engagement",
              description:
                "Participate in events and give back to the community.",
              image:
                "https://sustainingcommunity.wordpress.com/wp-content/uploads/2011/03/community-engagement-definition-3.png",
              gradient:
                "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9))", // Darker gradient
            },
          ].map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Card
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                    height: "250px",
                    transition: "transform 0.2s ease-in-out",
                    boxShadow: 3,
                    borderRadius: 5,
                  }}
                >
                  {/* Background Image with Gradient Overlay */}
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
                      "&:hover": {
                        transform: "scale(1.5)",
                      },
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
                  {/* Text Hovering over the Image */}
                  <CardContent
                    sx={{
                      position: "relative",
                      zIndex: 3,
                      color: "#fff",
                      textAlign: "center",
                      top: "50%",
                      transform: "translateY(-50%)",
                      transition:
                        "transform 0.3s ease-in-out, font-size 0.3s ease-in-out",
                    }}
                  >
                    {/* Title with hover effect */}
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: "bold",
                        transition: "font-size 0.3s ease-in-out",
                        "&:hover": {
                          fontSize: "2rem",
                        },
                      }}
                    >
                      {feature.title}
                    </Typography>
                    {/* Description with hover effect */}
                    <Typography
                      variant="body2"
                      sx={{
                        mt: 1,
                        fontSize: "1rem",
                        transition: "font-size 0.3s ease-in-out",
                        "&:hover": {
                          fontSize: "1.3rem",
                        },
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