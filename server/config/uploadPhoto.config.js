const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
require('dotenv').config(); // Load environment variables
const fs = require('fs');

// ✅ Validate Cloudinary Configuration
if (!process.env.CLOUD_NAME || !process.env.CLOUD_API_KEY || !process.env.CLOUD_API_SECRET) {
  console.error('❌ Cloudinary configuration error: Missing API credentials.');
  throw new Error('Cloudinary API credentials are missing. Please check your .env file.');
}

// ✅ Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

console.log('✅ Cloudinary successfully configured!');

// ✅ Uploading Image to Cloudinary
const uploadPhotoOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) {
      throw new Error('❌ No file path provided for upload.');
    }

    // ✅ Upload Photo
    const result = await cloudinary.uploader.upload(localFilePath, {
      resource_type: 'image',
      folder: 'alumniPhotos', // Save inside this Cloudinary folder
    });

    console.log('✅ Photo uploaded successfully:', result.secure_url);

    // ✅ Delete the local file after upload (optional)
    if (fs.existsSync(localFilePath)) {
      fs.unlinkSync(localFilePath);
    }

    return result.secure_url; // Return uploaded image URL
  } catch (error) {
    console.error('❌ Error uploading photo to Cloudinary:', error.message);

    // ✅ Ensure file deletion doesn't crash the app
    if (fs.existsSync(localFilePath)) {
      fs.unlinkSync(localFilePath);
    }

    throw new Error('Failed to upload image to Cloudinary');
  }
};

// ✅ Configure Multer Storage for Cloudinary
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'alumniPhotos',
    allowed_formats: ['png', 'jpg', 'jpeg'], // ✅ Fix: Use 'allowed_formats' instead of 'format'
    transformation: [{ width: 300, height: 300, crop: 'fill' }], // Resize images
  },
});

module.exports = {
  storage,
  cloudinary,
  uploadPhotoOnCloudinary,
};
