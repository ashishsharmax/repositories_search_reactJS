import React from 'react';
import './ImageList.css'
class ImageCard extends React.Component{
    constructor(props){
        super(props);
        this.state = {span: 0};
        this.imageRef = React.createRef();
    }

    componentDidMount(){
        // this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const span = Math.ceil(height / 10)
        this.setState({span: span})
    }

    render(){
        const {full_name, html_url, owner} = this.props.image;
        return(
            <div class="carda">
            <h2>Full Name: {full_name} , Owner's URL = <a href={html_url}>Link</a> , Owner's Login: {owner.login} </h2>
            </div>
            )
    }
}

export default ImageCard