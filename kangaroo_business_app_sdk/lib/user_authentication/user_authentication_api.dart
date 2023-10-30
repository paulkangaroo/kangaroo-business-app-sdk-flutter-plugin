import 'package:kangaroo_business_app_sdk_platform_interface/platform_interface/base_platform_interface.dart';
import 'package:kangaroo_business_app_sdk_platform_interface/platform_interface/features/user_authentication/user_authentication.dart';

export 'package:kangaroo_business_app_sdk_platform_interface/platform_interface/base_platform_interface.dart'
    show Result;
export 'package:kangaroo_business_app_sdk_platform_interface/platform_interface/features/user_authentication/user_authentication.dart'
    show UserAuthenticationModel;

class UserAuthenticationApi {
  static Future<Result<UserAuthenticationModel>?> authenticateUser(
      String username, String password) {
    return UserAuthenticationApiInterface.instance.authenticateUser(
      username,
      password,
    );
  }

  static Stream<Result<UserAuthenticationModel>> get authenticationStream {
    return UserAuthenticationApiInterface.instance.authenticationStream;
  }
}
