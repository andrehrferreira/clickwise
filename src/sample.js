import "@babel/polyfill/noConflict";

import ClickWise from "./index";

const clickwise = new ClickWise("user", "pass");

(async () => {
    //Campaigns
    let campaigns = await clickwise.campaigns();
    console.log(campaigns);

    //Coupons
    let coupons = await clickwise.coupons();
    console.log(coupons);

    //Banners
    let banners = await clickwise.banners();
    console.log(banners);

    //Report
    let report = await clickwise.report("2020-04-01", "2020-04-01", "A");
    console.log(report);

    //Deeplink
    let deeplink = await clickwise.deeplink("https://www.franciscajoias.com.br/", "245cc698");
    console.log(deeplink);
})();