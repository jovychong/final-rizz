function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;
    var guests = document.getElementById("guests").value;

    // Add your data validation logic here
    if (!name || !email || !date || !time || !guests) {
        return false;
    }

    return true; // Return true if all data is valid
}

function generatePDF(name, email, date, time, guests) {
    const pdfContent = [
        { text: 'Reservation Details', style: 'header' },
        { text: `Name: ${name}`, style: 'content' },
        { text: `Email: ${email}`, style: 'content' },
        { text: `Date: ${date}`, style: 'content' },
        { text: `Time: ${time}`, style: 'content' },
        { text: `Number of Guests: ${guests}`, style: 'content' },
    ];

    // Define the PDF document definition
    const docDefinition = {
        content: pdfContent,
        styles: {
            header: { fontSize: 18, bold: true, margin: [0, 10, 0, 5] },
            content: { fontSize: 14, margin: [0, 0, 0, 5] }
        }
    };

    // Generate the PDF and download it
    pdfMake.createPdf(docDefinition).download("Reservation_Details.pdf");
}



document.getElementById("booking-form").addEventListener("submit", function (event) {
    event.preventDefault();

    // Validate the form data before generating the PDF
    if (validateForm()) {
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var date = document.getElementById("date").value;
        var time = document.getElementById("time").value;
        var guests = document.getElementById("guests").value;

        // Generate the PDF
        generatePDF(name, email, date, time, guests);

        // Open the confirmation page
        window.open('../confirmation_page/bk_confirmation.html', '_blank');

        document.getElementById("booking-form").reset();
    }
});

        // localStorage.setItem("name", name);
        // localStorage.setItem("email", email);
        // localStorage.setItem("date", date);
        // localStorage.setItem("time", time);
        // localStorage.setItem("guests", guests);

        // const getname = localStorage.getItem("name");
        // const getemail = localStorage.getItem("email");
        // const getdate = localStorage.getItem("date");
        // const gettime = localStorage.getItem("time");
        // const getguests = localStorage.getItem("guests");

        // document.getElementById("booking-form").innerHTML = getname;
        // document.getElementById("booking-form").innerHTML = getemail;
        // document.getElementById("booking-form").innerHTML = getdate;
        // document.getElementById("booking-form").innerHTML = gettime;
        // document.getElementById("booking-form").innerHTML = getguests;

        // document.getElementById("booking-form").reset()