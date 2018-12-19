import React from 'react';
/*global google*/
import axios from 'axios'

class GoogleMap extends React.Component {
  constructor(props) {
    super(props);
    this.target = React.createRef();
  }
  componentDidMount(){
   this.setMap()
  }
  componentDidUpdate(prevProps){
    if (prevProps.address !== this.props.address){
        this.setMap()
    }
  }
  setMap(){
    const node = this.target.current
    this.getGeocode().then((response)=>{
      const {results} = response.data;
      const {geometry:{location}} = results[0];
      const latLng = new google.maps.LatLng(location.lat, location.lng);
      this.map = new google.maps.Map(node);
      this.map.setCenter(latLng);
      this.map.setZoom(16);
      this.marker = new google.maps.Marker({
        map:this.map,
        position:latLng
      })
    })
  }
  getGeocode(){
    const address = encodeURIComponent(this.props.address);
    const requestUri = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${API_KEY}`
    return axios.get(requestUri)
  }
  render() {
    // tell React that we want to associate the <input> ref
    // with the `textInput` that we created in the constructor
    return (
      <div className='container' ref={this.target}>123</div>
    );
  }
}

export default GoogleMap;
