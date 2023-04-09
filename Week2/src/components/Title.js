import React from "react"
function Title({data2}){
    console.log("title page is rendering")
    return (
    <div>
        My Enrollment Number ID{data2.id}<h2 className="title">Name As Title {data2.title}.</h2><h2 className="description"> {data2.description}</h2>
    </div>
    )
}
export default React.memo(Title);