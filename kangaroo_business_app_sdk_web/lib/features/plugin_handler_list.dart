import 'package:kangaroo_business_app_sdk_web/base/plugin_channel_handler.dart';
import 'package:kangaroo_business_app_sdk_web/features/user_authentication/user_authentication_handler.dart';
import 'strings/strings_handler.dart';


List<PluginChannelHandler> pluginHandlerList = [
  StringsHandler(),

  UserAuthenticationHandler()
];
