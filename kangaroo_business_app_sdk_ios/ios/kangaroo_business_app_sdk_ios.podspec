#
# To learn more about a Podspec see http://guides.cocoapods.org/syntax/podspec.html.
# Run `pod lib lint kangaroo_business_app_sdk_ios.podspec` to validate before publishing.
#
Pod::Spec.new do |s|
  s.name             = 'kangaroo_business_app_sdk_ios'
  s.version          = '0.0.01'
  s.summary          = 'Kangaroo App SDK Flutter plugin iOS module.'
  s.description      = <<-DESC
Kangaroo App SDK Flutter plugin iOS module.
                       DESC
  s.homepage         = 'https://kangaroorewards.com/'
  s.license          = { :file => '../LICENSE' }
  s.author           = { 'Kangaroo Rewards' => 'support@kangaroorewards.com' }
  s.source           = { :path => '.' }
  s.source_files = 'Classes/**/*'
  s.dependency 'Flutter'

  # Public Kangaroo business SDK
  # s.dependency 'KangarooAppSdkBusiness', '~> 1.0.025'

  # Local Kangaroo business SDK
  s.preserve_paths = 'KangarooAppSdkBusiness.xcframework/**/*'
  s.xcconfig = { 'OTHER_LDFLAGS' => '-framework KangarooAppSdkBusiness' }
  s.vendored_frameworks = 'KangarooAppSdkBusiness.xcframework'

  # Flutter.framework does not contain a i386 slice.
  s.pod_target_xcconfig = { 'DEFINES_MODULE' => 'YES', 'EXCLUDED_ARCHS[sdk=iphonesimulator*]' => 'i386' }
  s.swift_version = '5.0'
end
