import React from "react";
const Tracker = () => {
    const [width, setwidth] = React.useState(window.innerWidth)
    const [height, setheight] = React.useState(window.innerHeight)


    React.useEffect(() => {
        window.addEventListener("resize", function () {
            setwidth(window.innerWidth)
            setheight(window.innerHeight)

        })
    }, [])

    return (
        <div className="content">
            <p>Windows width : {width}</p>
            <hr className="line"></hr>
            <p>Windows height : {height}</p>
        </div>
    )
}
export default Tracker;