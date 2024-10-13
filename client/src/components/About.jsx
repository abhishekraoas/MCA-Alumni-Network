import React from "react";
import { Box, Typography, Container, Grid, Card, Button } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { MdStar, MdCheckCircle } from "react-icons/md";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

import {
  FaXTwitter
} from "react-icons/fa6";

// About Us Component
const AboutUs = () => {
  const navigate = useNavigate();

  // Additional content
  const additionalContent = [
    {
      title: "Our Goals",
      content:
        "We aim to create a vibrant and engaged alumni community that actively supports professional development and meaningful networking opportunities.",
      icon: <MdStar size={40} color="#007FFF" />,
    },
    {
      title: "Achievements",
      content:
        "Over the past year, we have successfully hosted multiple events, including workshops, networking sessions, and guest lectures, enhancing the alumni experience.",
      icon: <MdCheckCircle size={40} color="#007FFF" />,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <Box
        sx={{
          height: "90vh",
          backgroundImage: `url('https://plus.unsplash.com/premium_photo-1672940671025-113a634f83d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxhY2slMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
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
        <Box
          sx={{
            zIndex: 2,
            textAlign: "left",
            padding: "20px",
            marginLeft: "150px",
            maxWidth: "42%",
            marginTop: "150px",
          }}
        >
          <Typography variant="h3" sx={{ fontWeight: "bold" }}>
            MCA Alumini Network
          </Typography>
          <Typography variant="h4" >
            About Us
          </Typography>
          <Typography sx={{ mb: 20, fontSize: 18 }}>
            The MCA Alumni Network connects graduates, fostering relationships
            that promote shared success and professional growth across diverse
            fields. Through mentorship and collaboration, experienced alumni
            guide recent graduates, while celebrating alumni achievements
            inspires a supportive community, enriching both personal and
            professional development...
             {/* Buttons */}
             <Box sx={{ display: 'flex', gap: 3, mt: 2 }}>
              <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: 'orange',
                    borderRadius: 3,
                    color: '#fff',
                    '&:hover': { backgroundColor: '#e91e63' },
                  }}
                  onClick={() => navigate('/contact-us')}
                >
                  Contact Us
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: 'orange',
                    borderRadius: 3,
                    color: '#fff',
                    '&:hover': { backgroundColor: '#e91e63' },
                  }}
                  onClick={() => navigate('/register')}
                >
                  Become a Member
                </Button>
              </motion.div>
            </Box>
          </Typography>
        </Box>
        <Box
          sx={{
            position: "absolute",
            right: 100,
            top: 100,
            zIndex: 2,
            maxWidth: "500px",
          }}
        >
          <motion.img
            src="https://bighostindia.in/wp-content/uploads/2023/08/Web-Design-Services-BigHost-India-Private-Limited.png" // Replace with your image URL
            alt="Hero Image"
            style={{ width: "100%", borderRadius: "10px" }}
            animate={{ scale: [1, 1.05, 1] }} // Simple scaling animation
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </Box>

        <Box
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
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            style={{
              color: "#F5DEB3",
              transition: "color 0.3s ease",
              textDecoration: "none",
            }}
            onMouseOver={(e) => (e.currentTarget.style.color = "#393e41")}
            onMouseOut={(e) => (e.currentTarget.style.color = "#F5DEB3")}
          >
            <FaXTwitter size={40} />
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

      {/* Content Sections */}
      <Container sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6}>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Card sx={{ p: 4, boxShadow: 3, borderRadius: 2 }}>
                <Typography variant="h4" align="center" gutterBottom>
                  Our Mission
                </Typography>
                <Typography variant="body1" align="center">
                  We aim to empower connections among MCA alumni to foster
                  collaboration, mentorship, and professional growth within a
                  dynamic and supportive community.
                </Typography>
              </Card>
            </motion.div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Card sx={{ p: 4, boxShadow: 3, borderRadius: 2 }}>
                <Typography variant="h4" align="center" gutterBottom>
                  Our Values
                </Typography>
                <Typography variant="body1" align="center">
                  We believe in the power of community, integrity, and lifelong
                  learning. Our network is built on trust, respect, and shared
                  knowledge.
                </Typography>
              </Card>
            </motion.div>
          </Grid>
        </Grid>

        <Grid container spacing={4} justifyContent="center" sx={{ mt: 4 }}>
          {additionalContent.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Card
                  sx={{
                    p: 4,
                    boxShadow: 3,
                    borderRadius: 2,
                    textAlign: "center",
                  }}
                >
                  <Box sx={{ mb: 2 }}>{item.icon}</Box>
                  <Typography variant="h5" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2">{item.content}</Typography>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Call to Action Section */}
      <Container sx={{ mb: 4, textAlign: "center" }}>
        <Typography variant="h5" gutterBottom>
          Join us in our mission to strengthen alumni relations.
        </Typography>

        <Box sx={{ display: "flex", gap: 3, mt: 2, justifyContent: "center" }}>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <Button
              variant="contained"
              color="primary"
              onClick={() => navigate("/contact-us")}
              sx={{ mt: 2, borderRadius: 20 }}
            >
              Contact Us
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <Button
              variant="contained"
              color="primary"
              onClick={() => navigate("/register")}
              sx={{ mt: 2, borderRadius: 20 }}
            >
              Become a Member
            </Button>
          </motion.div>
        </Box>
      </Container>
    </div>
  );
};

export default AboutUs;
