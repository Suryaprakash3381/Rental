import React from "react";
import Layout from "../../components/layouts/Layout";
import Section1 from './section1.jsx';
import Section2 from './Section2.jsx';
import '../../styles/HomeStyle.css';
import Section3 from "./Section3.jsx";
import Section4 from './Section4.jsx'
import Section5 from './Section5.jsx';

function Home() {
    return (
        <Layout> 
            <Section1 />
            <Section2 />
            <Section3 />
            <Section5 />
            <Section4 />
        </Layout>
    );
}

export default Home;