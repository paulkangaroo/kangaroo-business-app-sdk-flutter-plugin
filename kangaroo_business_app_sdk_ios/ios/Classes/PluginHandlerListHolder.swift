import Foundation

class PluginHandlerListHolder {
    static var pluginHandlerList: [PluginChannelHandler] =
        [
    DeleteOfferByIdHandler(),

    DeleteRewardByIdHandler(),

    BusinessActiveOffersHandler(),

    BusinessActiveRewardsHandler(),

    BusinessInActiveOffersHandler(),

    BusinessInActiveRewardsHandler(),

    BusinessOfferByIdHandler(),

    BusinessRewardByIdHandler(),

    BusinessRulesHandler(),

    StringsHandler(),

    GetUserDetailsHandler(),

    UpdateBusinessRulesHandler(),

    UserAuthenticationHandler()
        ]
}