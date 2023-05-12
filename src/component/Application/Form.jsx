import React, { useState } from "react";
import IconLabelButtons from "./IconLabelButtons";
import { AiOutlineCheckCircle } from 'react-icons/ai'
import GradientBtn from "../Home/School/GradientBtn";
const Form = () => {
    const [submit, setSubmit] = useState(false);
    const [formData, setformData] = useState({
        "entry.1028042253": "", //name
        "entry.1757343563": "", //email
        "entry.1655780251": "", //program
        "entry.333048626": "", //school name
        "entry.1145093821": "", //url
        "entry.1188475311": "", //job
        "entry.938191713": "", //experience
        "entry.389186138": "", //reason
        "entry.845352696": "", //self-taught
        "entry.1127894448": "", //achievement
        "entry.1669074606": "" //ideal

    });


    const handleInputData = (input) => (e) => {
        const { value } = e.target;

        setformData((prevState) => ({
            ...prevState,
            [input]: value
        }));
    };

    async function handleSubmit(e) {
        e.preventDefault();
        setSubmit(true);

        let url = `https://docs.google.com/forms/u/0/d/e/1FAIpQLScnLd1ticVOFqO7cKqTH_dF9WorwNtuASNIQ5TwOR4zZ3vvng/formResponse?entry.1028042253=${formData["entry.1028042253"]}&entry.1757343563=${formData["entry.1757343563"]}&entry.1655780251=${formData["entry.1655780251"]}&entry.333048626=${formData["entry.333048626"]}&entry.1145093821=${formData["entry.1145093821"]}&entry.1188475311=${formData["entry.1188475311"]}&entry.938191713=${"entry.938191713"}&entry.389186138=${"entry.389186138"}&entry.845352696=${"entry.845352696"}&entry.1127894448=${"entry.1127894448"}&entry.1669074606=${"entry.1669074606"}`;

        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        });
    }

    return (
        <div className="FormWrapper">
            <div className="formheader">
                <h4>This is a Fake Form</h4>
            </div>

            <div className="formcontent">
                {submit ? (
                    <div className="afterForm">
                        <AiOutlineCheckCircle />
                        <h3>Your application submitted successfully</h3>
                        <div className="btn__container">
                            <GradientBtn alt='Go Back to Introduction' name="/introduction" />
                            <GradientBtn alt='Go Back to Home Page' name="/" />
                        </div>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} target="_self">
                        <fieldset>
                            <label htmlFor="entry.1028042253">Your Full Name</label>
                            <input
                                required={true}
                                type="text"
                                name="entry.1028042253"
                                onChange={handleInputData("entry.1028042253")}
                                value={formData["entry.1028042253"]}
                                autoComplete={false} />

                        </fieldset>

                        <fieldset>
                            <label htmlFor="entry.1757343563">Email</label>
                            <input
                                required={true}
                                type="text"
                                name="entry.1757343563"
                                onChange={handleInputData("entry.1757343563")}
                                value={formData["entry.1757343563"]}
                                autoComplete={false} />

                        </fieldset>

                        <fieldset>
                            <label htmlFor="entry.1655780251">Your Volunteer Program</label>
                            <input
                                required={true}
                                type="text"
                                name="entry.1655780251"
                                onChange={handleInputData("entry.1655780251")}
                                value={formData["entry.1655780251"]}
                                autoComplete={false} />

                        </fieldset>

                        <fieldset>
                            <label htmlFor="entry.333048626">Highest Degree</label>
                            <input
                                required={true}
                                type="text"
                                name="entry.333048626"
                                onChange={handleInputData("entry.333048626")}
                                value={formData["entry.333048626"]}
                                autoComplete={false} />

                        </fieldset>

                        <fieldset>
                            <label htmlFor="entry.1145093821">Resume/CV URL (or LinkedIn Profile URL)</label>
                            <input
                                required={true}
                                type="text"
                                name="entry.1145093821"
                                onChange={handleInputData("entry.1145093821")}
                                value={formData["entry.1145093821"]}
                                autoComplete={false} />

                        </fieldset>

                        <fieldset>
                            <label htmlFor="entry.1188475311">What is your current job title</label>
                            <input
                                required={true}
                                type="text"
                                name="entry.1188475311"
                                onChange={handleInputData("entry.1188475311")}
                                value={formData["entry.1188475311"]}
                                autoComplete={false} />

                        </fieldset>
                        <fieldset>
                            <label htmlFor="entry.938191713">How many years of work experience do you have?</label>
                            <input
                                required={true}
                                type="text"
                                name="entry.938191713"
                                onChange={handleInputData("entry.938191713")}
                                value={formData["entry.938191713"]}
                                autoComplete={false} />

                        </fieldset>

                        <fieldset>
                            <label htmlFor="entry.389186138">Based on your answer in last question, why are you interested in that specific software development?  What have you done to expose yourself to it so far?*
                                If you have some experience in programming before, please feel free to provide your work.</label>
                            <textarea
                                required={true}
                                type="text"
                                name="entry.389186138"
                                onChange={handleInputData("entry.389186138")}
                                value={formData["entry.389186138"]}
                                autoComplete={false} />

                        </fieldset>

                        <fieldset>
                            <label htmlFor="entry.845352696">Have you taught yourself anything before? Describe what you learned and how you approached it.
                            </label>
                            <textarea
                                required={true}
                                type="text"
                                name="entry.845352696"
                                onChange={handleInputData("entry.845352696")}
                                value={formData["entry.845352696"]}
                                autoComplete={false} />

                        </fieldset>

                        <fieldset>
                            <label htmlFor="entry.1127894448">What's the biggest achievement (or the most challenging thing) in your life? And how did you make it?</label>
                            <textarea
                                required={true}
                                type="text"
                                name="entry.1127894448"
                                onChange={handleInputData("entry.1127894448")}
                                value={formData["entry.1127894448"]}
                                autoComplete={false} />

                        </fieldset>

                        <fieldset>
                            <label htmlFor="entry.1669074606">What would your plan be in the following three years if you graduated from AppWorks School?</label>
                            <textarea
                                required={true}
                                type="text"
                                name="entry.1669074606"
                                onChange={handleInputData("entry.1669074606")}
                                value={formData["entry.1669074606"]}
                                autoComplete={false} />

                        </fieldset>
                        <IconLabelButtons />
                    </form>
                )}
            </div>
        </div>
    )

}

export default Form;