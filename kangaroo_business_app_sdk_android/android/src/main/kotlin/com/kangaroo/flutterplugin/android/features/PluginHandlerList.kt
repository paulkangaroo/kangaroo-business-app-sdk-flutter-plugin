package com.kangaroo.flutterplugin.android.features

import com.kangaroo.flutterplugin.android.base.PluginChannelHandler
import com.kangaroo.flutterplugin.android.features.userAuthentication.UserAuthenticationHandler
import com.kangaroo.flutterplugin.android.features.deleteOfferById.DeleteOfferByIdHandler
import com.kangaroo.flutterplugin.android.features.deleteRewardById.DeleteRewardByIdHandler
import com.kangaroo.flutterplugin.android.features.businessActiveOffers.BusinessActiveOffersHandler
import com.kangaroo.flutterplugin.android.features.businessActiveRewards.BusinessActiveRewardsHandler
import com.kangaroo.flutterplugin.android.features.businessInActiveOffers.BusinessInActiveOffersHandler
import com.kangaroo.flutterplugin.android.features.businessInActiveRewards.BusinessInActiveRewardsHandler
import com.kangaroo.flutterplugin.android.features.businessOfferById.BusinessOfferByIdHandler
import com.kangaroo.flutterplugin.android.features.businessRewardById.BusinessRewardByIdHandler
import com.kangaroo.flutterplugin.android.features.businessRules.BusinessRulesHandler
import com.kangaroo.flutterplugin.android.features.strings.StringsHandler
import com.kangaroo.flutterplugin.android.features.getUserDetails.GetUserDetailsHandler
import com.kangaroo.flutterplugin.android.features.updateBusinessRules.UpdateBusinessRulesHandler

val pluginHandlerList: List<PluginChannelHandler> = listOf(
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
)
