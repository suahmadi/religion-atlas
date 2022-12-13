import { Flex, position } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import List from "../components/List";
import MapChart from "../components/Map";
import PlaceDetail from "../components/PlaceDetail";
import { getPlacesData } from "./api";
import Head from "next/head";
import {clusterLayer, clusterCountLayer, unclusteredPointLayer} from '../data/layers.ts';
import { ChinaProv } from "../data/chinaProv";
import 'mapbox-gl/dist/mapbox-gl.css'
import data from "../data/my_data.json"
import Swal from 'sweetalert2'
import 'animate.css';

import swal from 'sweetalert';


import  {MapRef, Source, Layer} from 'react-map-gl';


import { useMemo } from "react";
import Map, {
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl
} from 'react-map-gl';

import Pin from "../components/pin.tsx";
import { cities }  from "../data/cities";
import { useRef } from "react";
import { features } from "process";

const Home = () => {
  const mapRef = useRef(null);

  const [places, setPlaces] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState(null);
  const [type, setType] = useState("Christianity");
  const [timePeriod, setTimePeriod] = useState("1900-1950");
  const [isLoading, setIsLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [time, setTime] = useState("0000-9999")

  const [popupInfo, setPopupInfo] = useState(null);

  let TOKEN = process.env.NEXT_PUBLIC_ENV_VARIABLE // Set your mapbox token here

  const onClick = event => {
    {event.features[0]?.properties &&
    console.log(event.features[0])
    const feature = event.features[0];
    console.log(feature)
    console.log(event.features[0]?.properties.Name_Type)
  
    if (event.features[0]?.properties.E_name) {
    swal("Religious Site Details", `Name: ${event?.features[0]?.properties.E_name} \nReligion: ${event?.features[0]?.properties.Name_Type}\nCounty: ${event?.features[0]?.properties.E_county}\nProvince: ${event?.features[0]?.properties.E_province}\nYear Built: ${event?.features[0]?.properties.Year}`, "warning", {
      closeOnClickOutside: true,
    });
    }
  }
  };

const pinStyle = {
  cursor: 'pointer',
  fill: '#d00',
  stroke: 'none'
};

const ICON = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
  C20.1,15.8,20.2,15.8,20.2,15.7z`;

  const pins = useMemo(
    () =>
      cities.map((city, index) => (
        <Marker
          key={`marker-${index}`}
          longitude={39}
          latitude={90}
          anchor="bottom"
          onClick={e => {
            // If we let the click event propagates to the map, it will immediately close the popup
            // with `closeOnClick: true`
            e.originalEvent.stopPropagation();
            setPopupInfo(city);
          }}
          
        >
  <svg height={20} viewBox="0 0 24 24" style={pinStyle}>
      <path d={ICON} />
    </svg>
        </Marker>
      )),
    []
  );

  useEffect(() => {
    // get the users current location on intial login

    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        console.log({ latitude, longitude });
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    console.log({ timePeriod });
  }, [timePeriod, time]);

  useEffect(() => {
    console.log({ type });
  }, [type, count]);


  if (count == 0) {
  Swal.fire({
    title: 'Welcome to China Religion Explorer ',
    text: "This website provides an easy way to visualize and access information about religious sites across China, on the left side you are provided with a brief history",
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  })
  setCount(1)
  }
  return (

    
    <div>
      <Flex
      justifyContent={"center"}
      alignItems={"center"}
      width={"100vw"}
      height={"100vh"}
      maxWidth={"100vw"}
      maxHeight={"100vh"}
      position={"relative"}      
    >

        <Header
          setType={setType}
          setTimePeriod={setTimePeriod}
          setTime={setTime} />


        <List
          places={filteredPlaces.length ? filteredPlaces : places}
          isLoading={isLoading}
          type={type}
          era={timePeriod}
          />
 

      <Map
        initialViewState={{
          latitude: 25.0000,
          longitude: 75,
          zoom: 3,
          bearing: 0,
          pitch: 0
        }}
        mapStyle="mapbox://styles/mapbox/dark-v9"
        style={{height:"100vh", width:"100vw", maxWidth:"100vw",
        maxHeight:"100vh" }}
        
        mapboxAccessToken={TOKEN}
        interactiveLayerIds={[clusterLayer.id]}
        onClick={onClick}
        bg={"#191a1a"}

        ref={mapRef}
      >
        <GeolocateControl  position="bottom-right" />
        {/* <FullscreenControl position="bottom-right" /> */}
        <NavigationControl position="bottom-right" />
        

        {pins}
       
        <Source
          id="religiousSites"
          type="geojson"
          data={filterGeoJSON(data, type, timePeriod, time)}
          cluster={true}
          clusterMaxZoom={14}
          clusterRadius={50}
          >
          <Layer {...clusterLayer} />
          <Layer {...clusterCountLayer} />
          <Layer {...unclusteredPointLayer} />
        </Source>
      </Map>
    
      </Flex>

      </div>
  );
};

function filterGeoJSON(geojson, type, timePeriod, time) {
  // Check if the input is a valid GeoJSON document
  if (!geojson || geojson.type !== 'FeatureCollection') {
    return null;
  }

  let year_start = time.toString().substring(0,4)
  let year_end;


  if (time.toString().substring(5,9) == "curr") {
    year_end = "2050"
  } else {
    year_end = time.toString().substring(5,9)
  }

  // Filter the GeoJSON document based on the Name_Type property
  const filteredFeatures = geojson.features.filter(feature => {
    if (type === "Christianity") {
      if (time.toString().substring(0,3) != "All") {
      return (feature.properties.Name_Type === "Catholicism" || feature.properties.Name_Type === "Protestantism") && ((feature.properties.Year < year_end && feature.properties.Year > year_start))
      } else {
        return feature.properties.Name_Type === "Catholicism" || feature.properties.Name_Type === "Protestantism"

      }
    }  else {
      if (time.toString().substring(0,3) != "All") {
    return feature.properties.Name_Type === type && (feature.properties.Year < year_end && feature.properties.Year > year_start)
      } else {
        return feature.properties.Name_Type === type 
      }
    }
  });

  // Return the filtered GeoJSON document
  return {
    type: 'FeatureCollection',
    features: filteredFeatures,
  };
}



export default Home;
