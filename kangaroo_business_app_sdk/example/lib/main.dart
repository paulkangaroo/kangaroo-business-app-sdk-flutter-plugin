import 'dart:math';

import 'package:flutter/material.dart';
import 'package:fluttertoast/fluttertoast.dart';
import 'package:kangaroo_business_app_sdk/kangaroo_business_app_sdk.dart';
import 'package:kangaroo_business_app_sdk/user_authentication/user_authentication_api.dart'
    as UserAuthenticationApi;

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
    UserAuthenticationApi.UserAuthenticationApi.authenticationStream
        .listen((authResult) {
      authResult.when(
        idle: () {},
        loading: () => Fluttertoast.showToast(msg: "loading"),
        success: (authData) => Fluttertoast.showToast(
            msg: authData?.accessToken ?? "no access token"),
        unauthorized: (int code, String message) =>
            Fluttertoast.showToast(msg: message),
        error: (int code, String message) =>
            Fluttertoast.showToast(msg: message),
      );
    });
  }

  authenticateUser() {
    debugPrint('authenticating...');
    UserAuthenticationApi.UserAuthenticationApi.authenticateUser(
      "support@kangaroorewards.com",
      "1111",
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
          physics: BouncingScrollPhysics(),
          child: Column(
            children: [
              MaterialButton(
                onPressed: authenticateUser,
                color: Colors.purple.shade300,
                height: 100,
                child: Center(
                  child: Text(
                    'authenticate user',
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
