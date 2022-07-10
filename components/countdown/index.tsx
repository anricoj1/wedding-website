// react
import { useState, useEffect, Fragment } from "react";

// types
import { CountdownWidgetProps } from "types";

// icons
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const CountdownWidget = ({ destinationDate }: CountdownWidgetProps) => {
    // countdown state
    const [timeRemaining, setTimeRemaining] = useState<string | null>(null);

    // calculate date distance
    const calculateDateDiff = () => {
        // distance between now and end;
        let distance = destinationDate.getTime() - new Date().getTime();

        // calc days hours mins seconds
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeRemaining(`${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`);
    }

    // days hours etc interval
    useEffect(function handleCountdownInterval() {
        const interval = setInterval(() => {
            calculateDateDiff()
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <h3>
            <span id="date" className="font-merriweather text-sm">
                {timeRemaining ? timeRemaining : (
                    <Fragment>
                        Calculating Time <AiOutlineLoading3Quarters className="m-auto icon-spin" />
                    </Fragment>
                )}
            </span>
        </h3>
    )
}

export default CountdownWidget;