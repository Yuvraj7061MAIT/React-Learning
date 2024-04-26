function Gojo(){

    let myName  = 'mY nAME IS YUVRAJ sINGH';
    let fullname = () =>{
        return 'Yuvraj Singh';
    }

    return <h2 style={{'backgroundColor': 'green'}}>This is Gojo Satoru <br />
        {fullname()}
    </h2>
}

export default Gojo;