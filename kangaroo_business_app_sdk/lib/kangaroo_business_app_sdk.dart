import 'package:kangaroo_business_app_sdk_platform_interface/platform_interface/kangaroo_business_app_sdk_platform_interface.dart';

class KangarooAppSdk {
  static initializeSdk(
    String applicationKey,
    String clientId,
    String clientSecret,
    String environment,
  ) {
    KangarooAppSdkInterface.instance.initializeSdk(
      applicationKey: applicationKey,
      clientId: clientId,
      clientSecret: clientSecret,
      environment: environment,
    );
  }

  static Future<String?> getPreferredLanguage() {
    return KangarooAppSdkInterface.instance.getPreferredLanguage();
  }

  static setPreferredLanguage(String preferredLanguage) {
    KangarooAppSdkInterface.instance.setPreferredLanguage(preferredLanguage);
  }

  static Future<String?> getSession() {
    return KangarooAppSdkInterface.instance.getSession();
  }

  static killSession() {
    KangarooAppSdkInterface.instance.killSession();
  }
}
