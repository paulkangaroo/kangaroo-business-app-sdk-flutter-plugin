import Foundation

class PluginHandlerListHolder {
    static var pluginHandlerList: [PluginChannelHandler] =
        [
    CreateBusinessOfferHandler(),

    CreateBusinessRewardHandler(),

    DeleteOfferByIdHandler(),

    DeleteRecommendationByIdHandler(),

    DeleteRewardByIdHandler(),

    BusinessActiveOffersHandler(),

    BusinessActiveRewardsHandler(),

    BusinessCampaignByIdHandler(),

    BusinessCampaignsHandler(),

    BusinessInActiveOffersHandler(),

    BusinessInActiveRewardsHandler(),

    BusinessOfferByIdHandler(),

    BusinessRecommendationsHandler(),

    BusinessRewardByIdHandler(),

    BusinessRulesHandler(),

    StringsHandler(),

    GetUserDetailsHandler(),

    UpdateBusinessOfferHandler(),

    UpdateBusinessRewardHandler(),

    UpdateBusinessRulesHandler(),

    UserAuthenticationHandler()
        ]
}