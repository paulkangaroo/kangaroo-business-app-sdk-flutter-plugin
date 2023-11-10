import 'package:kangaroo_business_app_sdk_web/base/plugin_channel_handler.dart';
import 'package:kangaroo_business_app_sdk_web/features/user_authentication/user_authentication_handler.dart';
import 'delete_offer_by_id/delete_offer_by_id_handler.dart';
import 'delete_reward_by_id/delete_reward_by_id_handler.dart';
import 'business_active_offers/business_active_offers_handler.dart';
import 'business_active_rewards/business_active_rewards_handler.dart';
import 'business_in_active_offers/business_in_active_offers_handler.dart';
import 'business_in_active_rewards/business_in_active_rewards_handler.dart';
import 'business_offer_by_id/business_offer_by_id_handler.dart';
import 'business_reward_by_id/business_reward_by_id_handler.dart';
import 'business_rules/business_rules_handler.dart';
import 'strings/strings_handler.dart';
import 'get_user_details/get_user_details_handler.dart';
import 'update_business_rules/update_business_rules_handler.dart';


List<PluginChannelHandler> pluginHandlerList = [
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
];
