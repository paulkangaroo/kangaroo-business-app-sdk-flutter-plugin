import 'package:kangaroo_business_app_sdk_web/base/plugin_channel_handler.dart';
import 'package:kangaroo_business_app_sdk_web/features/user_authentication/user_authentication_handler.dart';
import 'create_business_offer/create_business_offer_handler.dart';
import 'create_business_reward/create_business_reward_handler.dart';
import 'delete_offer_by_id/delete_offer_by_id_handler.dart';
import 'delete_recommendation_by_id/delete_recommendation_by_id_handler.dart';
import 'delete_reward_by_id/delete_reward_by_id_handler.dart';
import 'business_active_offers/business_active_offers_handler.dart';
import 'business_active_rewards/business_active_rewards_handler.dart';
import 'business_campaign_by_id/business_campaign_by_id_handler.dart';
import 'business_campaigns/business_campaigns_handler.dart';
import 'business_in_active_offers/business_in_active_offers_handler.dart';
import 'business_in_active_rewards/business_in_active_rewards_handler.dart';
import 'business_offer_by_id/business_offer_by_id_handler.dart';
import 'business_recommendations/business_recommendations_handler.dart';
import 'business_reward_by_id/business_reward_by_id_handler.dart';
import 'business_rules/business_rules_handler.dart';
import 'strings/strings_handler.dart';
import 'get_user_details/get_user_details_handler.dart';
import 'update_business_offer/update_business_offer_handler.dart';
import 'update_business_reward/update_business_reward_handler.dart';
import 'update_business_rules/update_business_rules_handler.dart';


List<PluginChannelHandler> pluginHandlerList = [
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
];
