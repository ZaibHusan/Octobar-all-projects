import React, { useState } from 'react'
import "./Contact.css"
function Contact() {

    const [result, setResult] = React.useState("");

    const [able, setAble] = useState(false)
    const onSubmit = async (event) => {
        event.preventDefault();
           setAble(true); // disable button immediately
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "5d49b2d4-1db0-49d1-979d-5536ebb22141");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        try {
            if (data.success) {
                setResult("Form Submitted Successfully");
                event.target.reset();
                setable(true)

            } else {
                console.log("Error", data);
                setResult(data.message);
            }
        }
        catch (error) {
            console.error(error);
            setResult("Something went wrong!");
        } finally {
            setAble(false); // re-enable button after request finishes
        }
    
};
return (
    <div className="Contact">
        <div className="Cleft">
            <h2>Send us a message</h2>
            <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
            <ul>
                <li>Husanzaibllc@gmail.com</li>
                <li>+923402080896</li>
                <li>HST, PESHAWAR,KPK PAKISTAN ASIA</li>

            </ul>
        </div>
        <div className="Cright">
            <form onSubmit={onSubmit}>
                <div className="name">
                    <label htmlFor="name">Your Name</label>
                    <input placeholder='Enter Name' type="text" id='name' name="name" required />
                </div>
                <div className="phone">
                    <label htmlFor="phone">Phone Number</label>
                    <input placeholder='Enter Phone' type="text" id="phone" name="phone" required />
                </div>
                <div className="email">
                    <label htmlFor="email">Your Email</label>
                    <input placeholder='Enter Email' type="email" id="email" name="email" required />
                </div>
                <textarea placeholder='Enter your message here' className='Text' name="message" required></textarea>
                <button type="submit" disabled={able} className={`btn ${able&&"disable"}`}>Submit Now</button>
                <p>{result}</p>
            </form>

        </div>
    </div>
)
}

export default Contact