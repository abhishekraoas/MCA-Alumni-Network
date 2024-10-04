import React from "react";
import { Container, Typography, Box, Grid, Button, Card, CardContent, CardMedia } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook for redirection

const Home = () => {
  const navigate = useNavigate(); // Initialize navigate for redirection

  return (
    <div>
      {/* Hero Section */}
      <Box
        sx={{
          height: '100vh',
          backgroundImage: `url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.6)' }} />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <Typography variant="h2" gutterBottom sx={{ fontWeight: 'bold', letterSpacing: 1 }}>
            Welcome to the MCA Alumni Network
          </Typography>
          <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
            Connecting Leaders and Innovators
          </Typography>
          <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
            <Button
              variant="contained"
              sx={{
                mt: 2,
                backgroundColor: '#f06292',
                color: '#fff',
                '&:hover': { backgroundColor: '#e91e63' }, // Hover effect
              }}
              onClick={() => navigate('/register')} // Redirect on click
            >
              Join Us
            </Button>
          </motion.div>
        </motion.div>
      </Box>

      {/* Features Section */}
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
            }}
          >
            {/* Background Image with Gradient Overlay */}
            <CardMedia
              component="img"
              image={feature.image}
              alt={feature.title}
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 1,
                objectFit: 'cover',
                transition: 'transform 0.2s ease-in-out', 
                borderRadius: 3,
                '&:hover': {
                  transform: 'scale(1.5)', 
                },
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: feature.gradient, 
                zIndex: 2,
                borderRadius: 5, 
              }}
            />
            {/* Text Hovering over the Image */}
            <CardContent
              sx={{
                position: 'relative',
                zIndex: 3,
                color: '#fff',
                textAlign: 'center',
                top: '50%',
                transform: 'translateY(-50%)',
                transition: 'transform 0.3s ease-in-out, font-size 0.3s ease-in-out',
              }}
            >
              {/* Title with hover effect */}
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 'bold',
                  transition: 'font-size 0.3s ease-in-out',
                  '&:hover': {
                    fontSize: '2rem', 
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
                  fontSize: '1rem', 
                  transition: 'font-size 0.3s ease-in-out',
                  '&:hover': {
                    fontSize: '1.3rem', 
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



      {/* Testimonials Section */}
      <Container sx={{ mt: 8, mb: 4 }}>
        <Typography variant="h4" align="center" gutterBottom sx={{ mb: 4 }}>
          What Our Alumni Say
        </Typography>
        <Grid container spacing={4}>
          {[
            {
              quote: "The MCA program was pivotal for my career, providing invaluable connections.",
              name: "Alumni Name",
              color: "#e1bee7"
            },
            {
              quote: "I gained the skills and confidence needed to excel in the tech industry.",
              name: "Alumni Name",
              color: "#c5cae9"
            },
            {
              quote: "The alumni network has been a great resource for mentorship and support.",
              name: "Alumni Name",
              color: "#bbdefb"
            }
          ].map((testimonial, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                <Card sx={{ padding: 2, backgroundColor: testimonial.color, boxShadow: 2 }}>
                  <Typography variant="body1" align="center">
                    "{testimonial.quote}"
                  </Typography>
                  <Typography variant="subtitle2" align="right" sx={{ marginTop: 2 }}>
                    - {testimonial.name}
                  </Typography>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Call to Action Section */}
      <Box
        sx={{
          backgroundColor: '#f8bbd0',
          padding: 4,
          textAlign: 'center',
          mt: 8,
        }}
      >
        <Typography variant="h5" gutterBottom>
          Ready to Connect?
        </Typography>
        <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#f06292',
              color: '#fff',
              '&:hover': { backgroundColor: '#e91e63' }, // Hover effect
            }}
            onClick={() => navigate('/register')} // Redirect on click
          >
            Join the Network
          </Button>
        </motion.div>
      </Box>
    </div>
  );
};

export default Home;










