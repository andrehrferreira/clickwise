import "@babel/polyfill/noConflict";

import PostAffiliatePro from "@vigiadepreco/postaffiliatepro";

export default class ClickWise {
    constructor(username, password){
        this.api = new PostAffiliatePro("https://my.pampanetwork.com/scripts/server.php", "https://my.pampanetwork.com/affiliates/login.php", username, password);
    }

    async command(data){
        return await this.api.command(data);
    }

    async campaigns(offset, limit){
        return await this.api.campaigns(offset, limit);
    }

    async coupons(offset, limit){
        return await this.api.promo(20, offset, limit);
    }

    async banners(offset, limit){
        return await this.api.command({
            "C": "Gpf_Rpc_Server",
            "M": "run",
            "requests": [{
                "C": "Pap_Affiliates_Promo_BannersGrid",
                "M": "getRows",
                "offset": offset, 
                "limit": limit,
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