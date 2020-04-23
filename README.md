# @vigiadepreco/clickwise

API integration with ClickWise

## Install

```bash
$ yarn add @vigiadepreco/clickwise --save
```

## Usage

```js
import Clickwise from "@vigiadepreco/clickwise";

const clickwise = new Clickwise("user", "pass");

(async () => {
    //Campaigns
    let campaigns = await clickwise.campaigns(0, 100);
    console.log(campaigns);

    //Coupons
    let coupons = await clickwise.coupons(0, 100);
    console.log(coupons);

    //Banners
    let banners = await clickwise.banners(0, 100);
    console.log(banners);

    //Report
    let report = await clickwise.report("2020-04-01", "2020-04-01", "A");
    console.log(report);

    //Deeplink
    let deeplink = await clickwise.deeplink("https://www.franciscajoias.com.br/", "245cc698");
    console.log(deeplink);
})();
```