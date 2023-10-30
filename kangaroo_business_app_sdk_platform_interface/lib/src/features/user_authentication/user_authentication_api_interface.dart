library sdk_wrapper_federated_platform_interface;

import 'dart:convert';

import 'package:plugin_platform_interface/plugin_platform_interface.dart';
import 'package:kangaroo_business_app_sdk_platform_interface/src/features/user_authentication/user_authentication_api_implemention.dart';

import '../../../platform_interface/base_platform_interface.dart';

import 'package:kangaroo_business_app_sdk_platform_interface/src/features/user_authentication/models/user_authentication_model.dart';
export 'package:kangaroo_business_app_sdk_platform_interface/src/features/user_authentication/models/user_authentication_model.dart';

abstract class UserAuthenticationApiInterface extends PlatformInterface {
  UserAuthenticationApiInterface() : super(token: _token);

  static final Object _token = Object();

  static UserAuthenticationApiInterface _instance =
      UserAuthenticationApiFederated();

  static UserAuthenticationApiInterface get instance => _instance;

  static set instance(UserAuthenticationApiInterface instance) {
    PlatformInterface.verifyToken(instance, _token);
    _instance = instance;
  }

  Future<Result<UserAuthenticationModel>?> authenticateUser(
    final String username,
    final String password,
  ) {
    throw UnimplementedError('authenticateUser has not been implemented.');
  }

  Stream<Result<UserAuthenticationModel>> get authenticationStream {
    throw UnimplementedError(
        'getUserAuthenticationStream has not been implemented.');
  }

  static Future<Result<UserAuthenticationModel>?> deSerializedPlatformResponse(
    Future<String?> response,
  ) async {
    final serializedResult = await response;
    if (serializedResult != null) {
      dynamic result;
      try {
        result = UserAuthenticationModel.fromJson(jsonDecode(serializedResult));
      } catch (error) {
        result = State.fromJson(jsonDecode(serializedResult));
      }
      switch (result.runtimeType) {
        case UserAuthenticationModel:
          return Success(data: result);
        case State:
          return mapState(result as State);
        default:
          return Error(
            code: -1,
            message: "Result runtime type is unknown after deserialization",
          );
      }
    } else {
      return Error(code: -1, message: "Serialized result is null");
    }
  }
}
