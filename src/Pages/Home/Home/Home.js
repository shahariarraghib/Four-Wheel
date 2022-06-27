import React from 'react';
import ShowCardProducts from '../ShowCardProducts/ShowCardProducts';
import ShowOrdersUsersProducts from '../ShowOrdersUsersProducts/ShowOrdersUsersProducts';

import TopBanner from '../TopBanner/TopBanner';
import TopBannerComponent from '../TopBannerComponent/TopBannerComponent';
import WhyChooseUS from '../WhyChooseUs/WhyChooseUS';

const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <TopBannerComponent></TopBannerComponent>
            <ShowCardProducts></ShowCardProducts>
            <WhyChooseUS></WhyChooseUS>
            <ShowOrdersUsersProducts></ShowOrdersUsersProducts>
        </div>
    );
};

export default Home;