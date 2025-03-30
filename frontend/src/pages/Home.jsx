import './CSS/Home.css'

import {HomeImage} from '../components/HomeImage'
import {ImageSlider} from '../components/Imageslider'
import {Joinwithus} from '../components/Joinwithus'


export const Home = () => {
return (
<>
<HomeImage/>
<br />
<ImageSlider/>
<br />
<Joinwithus/>
</>
);
};