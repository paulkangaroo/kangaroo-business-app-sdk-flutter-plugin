package com.kangaroo.flutterplugin.android

import android.content.Context
import io.flutter.plugin.common.EventChannel
import io.flutter.plugin.common.MethodCall
import kangaroorewards.appsdk.core.KangarooSdk

class KangarooAppSdk {
    var sink: EventChannel.EventSink? = null

    companion object {
        fun initializeSdk(call: MethodCall, context: Context): Unit? {
            KangarooSdk(context).initialize(
                applicationKey = call.argument<String?>("applicationKey") ?: "",
                clientId = call.argument<String?>("clientId") ?: "",
                clientSecret = call.argument<String?>("clientSecret") ?: "",
                environment = call.argument<String?>("environment") ?: "",
            )
            return null
        }

        fun getSession(call: MethodCall, context: Context): String? {
            return KangarooSdk(context).getSession()
        }

        fun killSession(call: MethodCall, context: Context): Unit? {
            KangarooSdk(context).killSession()
            return null
        }

        fun setPreferredLanguage(call: MethodCall, context: Context): Unit? {
            val language = call.argument<String?>("preferredLanguage") ?: ""
            println("preferred language android: $language")
            KangarooSdk(context).setPreferredLanguage(language)
            return null;
        }

        fun getPreferredLanguage(call: MethodCall, context: Context): String? {
            return KangarooSdk(context).getPreferredLanguage()
        }

    }
}
