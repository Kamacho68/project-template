import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;
const hostname = 'localhost';
const messageMedium = [{ value: "Email", label: "Email" }, { value: "Push", label: "Push" }]

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public')); // To serve static files like CSS

app.get('/', (req, res) => {
    res.render('pages/index', { response: null, formData: {}, messageMedium: messageMedium, selectedMediumOptions: [] });
});

app.post('/submit', (req, res) => {
    console.log(`req.body: ${JSON.stringify(req.body)}`);
    const { input1, input2, date1, date2 } = req.body;
    // Capture the selected options from the form data
    const selectedMediumOptions = req.body.messageMedium || [];

    // Handle the form data as needed
    console.log('Form data received:');
    console.log('Input 1:', input1);
    console.log('Input 2:', input2);
    console.log('Date 1:', date1);
    console.log('Date 2:', date2);

    // You can perform additional processing or database operations here

    // Simulate a delay or perform asynchronous tasks
    setTimeout(() => {
        // Render the response page with the response message and form data
        const responseMessage = 'Form submitted successfully!';
        res.render('pages/index', { response: responseMessage, formData: { input1, input2, date1, date2 }, messageMedium: messageMedium, selectedMediumOptions: selectedMediumOptions });
    }, 1000);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server started on http://${hostname}:${PORT}`);
});
