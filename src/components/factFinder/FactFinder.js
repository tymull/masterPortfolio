import { useState } from "react";
import Button from "../button/Button";

export default function FactFinder(props) {
    const [fact, setFact] = useState("");
    
    function handleClick(event) {
        event.preventDefault();
        const url = "https://uselessfacts.jsph.pl/random.json?language=en";
        fetch(url)
            .then((response) => {
                return response.json();
            }).then((json) => {
                console.log(json);
                setFact(json.text);
                console.log(json.text);
            });
    }
    return (
        <div>
            <p>
                Need a break? Here's some fun facts not about me!
            </p>
            {/* <div class="form-group"> */}
                {/* <button type="submit" class="btn btn-primary" onClick={handleClick}>Enlighten Me</button> */}
            <Button onClick={handleClick}
                text={"Enlighten Me"}
                className="project-button"
                // href="https://google.com"
                // newTab={true}
                theme={props.theme}
            />
            {/* </div> */}
            <p>{fact}</p>
        </div>
    );
}