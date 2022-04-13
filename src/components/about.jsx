import "./about.css";

const About = () => {

    const exercise = () => {
        console.log("test");

        const ages = [13,45,74,12,78,23,56,33,72,62,46,18,3,93,10];

        let total = 0
        for(let i=0; i< ages.length; i++) {
            let num = ages[i];
            total += num;
        }
        console.log("the sum is:", total);

    };



    return (
        <div className="about-page">
            <h2>A Meal Prep Plan for individuals who want to eat fresh and live a healthy lifestyle.</h2>
            <img src="/imgs/meals-about.jpeg" alt="meal banner" />
            <h5>Created by: Aaron Erebholo</h5>
            <button className="btn btn-dark" onClick={exercise}>Magic</button>
        </div>
    );
};

export default About;