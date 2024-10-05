import React from "react";
import { Container, Typography, Box, Paper, Grid, CardMedia, Button } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import imageFile from '../assets/MCA_Network.webp';
import imageFile2 from '../assets/MCA_Department.webp';
import imageFile3 from '../assets/About_Banner.webp';

const About = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      {/* Hero Banner Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <Box
          sx={{
            backgroundImage: `url('${imageFile3}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: 2,
            p: 5,
            color: '#fff',
            textAlign: 'center',
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.5)',
          }}
        >
          <Typography variant="h2" gutterBottom sx={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)', fontFamily: 'Roboto, sans-serif' }}>
            Welcome to Our MCA Program
          </Typography>
          <Typography variant="h5" gutterBottom sx={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)', fontFamily: 'Roboto, sans-serif' }}>
            Building Future Leaders in Technology
          </Typography>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="contained"
              color="primary"
              endIcon={<ArrowForward />}
              sx={{ mt: 2, boxShadow: '0px 3px 10px rgba(0, 0, 0, 0.3)', borderRadius: 20 }}
              onClick={() => navigate("/")}
            >
              Learn More
            </Button>
          </motion.div>
        </Box>
      </motion.div>

      {/* About Our Alumni Section */}
      <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
        <Paper elevation={4} sx={{ p: 4, mb: 4, mt: 4, backgroundColor: '#ffebee', borderRadius: 2 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h4" gutterBottom>
                About Our Alumni
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Our alumni network is a vibrant community of MCA graduates excelling in various professions. They are leaders in technology, business, education, and more, driving innovation and making valuable contributions to their industries and society. We take pride in their accomplishments and the positive impact they have on communities worldwide, fostering collaboration and support among fellow alumni. Together, they continue to inspire the next generation of professionals, demonstrating the power of education and networking in achieving success.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <CardMedia
                  component="img"
                  image={imageFile}
                  alt="Alumni Network"
                  sx={{ borderRadius: 2, height: '300px', width: '100%', objectFit: 'cover' }}
                />
              </motion.div>
            </Grid>
          </Grid>
        </Paper>
      </motion.div>

      {/* About MCA Department Section */}
      <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
        <Paper elevation={4} sx={{ p: 4, mb: 4, backgroundColor: '#e3f2fd', borderRadius: 2 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <CardMedia
                  component="img"
                  image={imageFile2}
                  alt="MCA Department"
                  sx={{ borderRadius: 2, height: '300px', width: '100%', objectFit: 'cover' }}
                />
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" gutterBottom>
                About MCA Department
              </Typography>
              <Typography variant="body1" color="textSecondary">
                The MCA department is committed to delivering a comprehensive education in computer applications. Our curriculum equips students with essential skills and knowledge to thrive in the dynamic tech industry. We emphasize hands-on learning, fostering a collaborative and innovative environment that encourages creativity and problem-solving. Our dedicated faculty support students in mastering the latest technologies and industry practices, ensuring they are well-prepared for successful careers. We strive to empower the next generation of tech professionals to meet the challenges of an evolving landscape.
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </motion.div>

      {/* Our Mission Section */}
      <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
        <Paper
          elevation={4}
          sx={{
            p: 4,
            mb: 4,
            backgroundImage: 'linear-gradient(45deg, #f06292, #f48fb1)',
            color: '#fff',
            textAlign: 'center',
            borderRadius: 2,
          }}
        >
          <Typography variant="h4" gutterBottom>
            Our Mission
          </Typography>
          <Typography variant="body1" gutterBottom>
            Our mission is to create a learning ecosystem that nurtures creativity, critical thinking, and leadership. We aim to develop professionals who can adapt to technological changes and become pioneers in the global tech industry.
          </Typography>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <Button
              variant="contained"
              sx={{ backgroundColor: '#fff', color: '#f06292', mt: 2, borderRadius: 20 }}
              onClick={() => navigate("/register")}
            >
              Join Us
            </Button>
          </motion.div>
        </Paper>
      </motion.div>

      {/* Core Values Section */}
      <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
        <Paper elevation={4} sx={{ p: 4, backgroundColor: '#e8f5e9', borderRadius: 2 }}>
          <Typography variant="h4" gutterBottom>
            Core Values
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1" color="textSecondary" paragraph>
                <strong>Innovation:</strong> Encouraging out-of-the-box thinking and fostering creative problem-solving skills.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1" color="textSecondary" paragraph>
                <strong>Integrity:</strong> Upholding ethical standards in all our endeavors and fostering a culture of trust.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1" color="textSecondary" paragraph>
                <strong>Collaboration:</strong> Promoting teamwork and partnerships within the academic community and industry.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1" color="textSecondary" paragraph>
                <strong>Excellence:</strong> Striving for academic and professional excellence in all aspects of education and practice.
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </motion.div>
    </Container>
  );
};

export default About;