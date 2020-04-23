import "@babel/polyfill/noConflict";

import PostAffiliatePro from "@vigiadepreco/postaffiliatepro";

export default class ClickWise {
    constructor(username, password){
        this.api = new PostAffiliatePro("https://my.pampanetwork.com/scripts/server.php", "https://my.pampanetwork.com/affiliates/login.php", username, password);
    }

    async campaigns(){
        return await this.api.campaigns();
    }

    async coupons(){
        return await this.api.promo(20, 0, 1000);
    }

    async banners(){
        return await this.api.command({
            "C": "Gpf_Rpc_Server",
            "M": "run",
            "requests": [{
                "C": "Pap_Affiliates_Promo_BannersGrid",
                "M": "getRows",
                "offset": 0, 
                "limit": 1000,
                "filters": [["type","IN","I"]],
                "columns": [["id"],["destinationurl"],["name"],["campaignid"],["campaignname"],["bannercode"],["bannerdirectlinkcode"],["bannerpreview"],["rtype"],["displaystats"],["channelcode"],["campaigndetails"]]
            }]
        });
    }

    async report(datestart, dateend, status){
        return await this.api.report(datestart, dateend, status);
    }

    async deeplink(url, campaignid){
        return await this.api.deeplink(url, campaignid);
    }
}