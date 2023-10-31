import 'dart:math';

import 'package:flutter/material.dart';
import 'package:fluttertoast/fluttertoast.dart';
import 'package:kangaroo_business_app_sdk/kangaroo_business_app_sdk.dart';
import 'package:kangaroo_business_app_sdk/strings/strings_api.dart';
import 'package:kangaroo_business_app_sdk/user_authentication/user_authentication_api.dart';

void main() {
  runApp(MyApp());
  KangarooAppSdk.initializeSdk(
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7ImJ1c2luZXNzSWQiOiIxMjUiLCJicmFuY2hJZCI6IjE2NCIsImNvYWxpdGlvbiI6IjAiLCJjb25nbG9tZXJhdGUiOiIwIn19.d67S2oT7E-HHJ8v-GhuLSkY_SEPWJVnf3n5Pl_U16KE',
    '10125648',
    'E1ahTZCex75kNOM4VDOMflwmXaCKaR6KzEJ6akYW',
    'development',
  );
}

class MyApp extends StatefulWidget {
  @override
  _MyAppState createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  @override
  void initState() {
    super.initState();
    // UserAuthenticationApi.authenticationStream.listen((authResult) {
    //   authResult.when(
    //     idle: () {},
    //     loading: () {
    //       return Fluttertoast.showToast(msg: "loading");
    //     },
    //     success: (authData) {
    //       return Fluttertoast.showToast(
    //           msg: authData?.accessToken ?? "no access token");
    //     },
    //     unauthorized: (int code, String message) {
    //       return Fluttertoast.showToast(msg: message);
    //     },
    //     error: (int code, String message) {
    //       return Fluttertoast.showToast(msg: message);
    //     },
    //   );
    // });
  }

  authenticateUser() async {
    debugPrint('authenticating...');
    final authResult = await UserAuthenticationApi.authenticateUser(
      "tahanmario4",
      "Germ@ny12",
    );

    authResult?.when(
      idle: () {},
      loading: () {
        return Fluttertoast.showToast(msg: "loading");
      },
      success: (appStrings) {
        return Fluttertoast.showToast(
            msg: appStrings?.accessToken ?? "no auth token found");
      },
      unauthorized: (int code, String message) {
        return Fluttertoast.showToast(msg: message);
      },
      error: (int code, String message) {
        return Fluttertoast.showToast(msg: message);
      },
    );
  }

  getAppStrings() async {
    debugPrint('getting app strings...');
    final appStringsResult = await StringsApi.getStrings();

    debugPrint('app strings result: $appStringsResult');
    appStringsResult?.when(
      idle: () {},
      loading: () {
        return Fluttertoast.showToast(msg: "loading");
      },
      success: (appStrings) {
        return Fluttertoast.showToast(
            msg: appStrings?.data.first.string ?? "no app strings found");
      },
      unauthorized: (int code, String message) {
        return Fluttertoast.showToast(msg: message);
      },
      error: (int code, String message) {
        return Fluttertoast.showToast(msg: message);
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: const Text('Kangaroo SDK Sandbox'),
        ),
        body: SingleChildScrollView(
          physics: const BouncingScrollPhysics(),
          child: Column(
            children: [
              MaterialButton(
                onPressed: authenticateUser,
                color: Colors.purple.shade300,
                height: 100,
                child: const Center(
                  child: Text(
                    "authenticate user",
                    style: TextStyle(color: Colors.white),
                  ),
                ),
              ),
              const SizedBox(height: 12),
              MaterialButton(
                onPressed: getAppStrings,
                color: Colors.green.shade300,
                height: 100,
                child: const Center(
                  child: Text(
                    "get app strings",
                    style: TextStyle(color: Colors.white),
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

extension RandomListItem<T> on List<T> {
  T randomItem() {
    return this[Random().nextInt(length)];
  }
}
