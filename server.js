const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to serve static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Set up multer for file uploads
const storage = multer.diskStorage({
    destination: './public/uploads/',
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.post('/signup', upload.single('resume'), (req, res) => {
    // Handling the form submission and resume file upload
    
    const { name, email, phone , location} = req.body;
    const resume = req.file ? req.file.filename : null;

    console.log(`Name: ${name}, Email: ${email}, Phone: ${phone},Location: ${location}, Resume: ${resume}`);

    // Redirect to success page
    res.redirect('/success');
});

app.get('/success', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/success.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
