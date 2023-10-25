package com.kangaroo.flutterplugin.android.features

import com.kangaroo.flutterplugin.android.base.PluginChannelHandler
import com.kangaroo.flutterplugin.android.features.userAuthentication.UserAuthenticationHandler
import com.kangaroo.flutterplugin.android.features.strings.StringsHandler

val pluginHandlerList: List<PluginChannelHandler> = listOf(
    StringsHandler(),

    UserAuthenticationHandler()
)
