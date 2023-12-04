package com.kangaroo.flutterplugin.android.features

import com.kangaroo.flutterplugin.android.base.PluginChannelHandler
import com.kangaroo.flutterplugin.android.features.userAuthentication.UserAuthenticationHandler
import com.kangaroo.flutterplugin.android.features.createBusinessOffer.CreateBusinessOfferHandler
import com.kangaroo.flutterplugin.android.features.createBusinessReward.CreateBusinessRewardHandler
import com.kangaroo.flutterplugin.android.features.deleteOfferById.DeleteOfferByIdHandler
import com.kangaroo.flutterplugin.android.features.deleteRecommendationById.DeleteRecommendationByIdHandler
import com.kangaroo.flutterplugin.android.features.deleteRewardById.DeleteRewardByIdHandler
import com.kangaroo.flutterplugin.android.features.businessActiveOffers.BusinessActiveOffersHandler
import com.kangaroo.flutterplugin.android.features.businessActiveRewards.BusinessActiveRewardsHandler
import com.kangaroo.flutterplugin.android.features.businessCampaignById.BusinessCampaignByIdHandler
import com.kangaroo.flutterplugin.android.features.businessCampaigns.BusinessCampaignsHandler
import com.kangaroo.flutterplugin.android.features.businessInActiveOffers.BusinessInActiveOffersHandler
import com.kangaroo.flutterplugin.android.features.businessInActiveRewards.BusinessInActiveRewardsHandler
import com.kangaroo.flutterplugin.android.features.businessOfferById.BusinessOfferByIdHandler
import com.kangaroo.flutterplugin.android.features.businessRecommendations.BusinessRecommendationsHandler
import com.kangaroo.flutterplugin.android.features.businessRewardById.BusinessRewardByIdHandler
import com.kangaroo.flutterplugin.android.features.businessRules.BusinessRulesHandler
import com.kangaroo.flutterplugin.android.features.strings.StringsHandler
import com.kangaroo.flutterplugin.android.features.getUserDetails.GetUserDetailsHandler
import com.kangaroo.flutterplugin.android.features.updateBusinessOffer.UpdateBusinessOfferHandler
import com.kangaroo.flutterplugin.android.features.updateBusinessReward.UpdateBusinessRewardHandler
import com.kangaroo.flutterplugin.android.features.updateBusinessRules.UpdateBusinessRulesHandler

val pluginHandlerList: List<PluginChannelHandler> = listOf(
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
)
