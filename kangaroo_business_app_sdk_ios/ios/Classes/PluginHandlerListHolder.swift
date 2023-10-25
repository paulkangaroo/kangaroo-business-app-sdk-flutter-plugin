import Foundation

class PluginHandlerListHolder {
    static var pluginHandlerList: [PluginChannelHandler] =
        [
    StringsHandler(),

    UserAuthenticationHandler()
        ]
}