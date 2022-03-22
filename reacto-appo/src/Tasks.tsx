

const AppTask = () => {
    const a = window.prompt("Dawaj");
    const b = window.prompt("Dawaj");


    if(a === null || b === null) return <h1>Musisz podać wartości</h1>
    return <>
    <h1>Lorem Ipsum</h1>
    <p>Dolor sit amet</p>
    <h2>{a} + {b} = {parseFloat(a) + parseFloat(b)}</h2>
        </>
}

export {AppTask}