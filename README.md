# MobileAppArch
Mobile App Template with React Native Navigation &amp; Redux.
1.	Creating React Native Project
a.	Installing Dependencies
i.	Xcode on Mac.
ii.	Android Studio on Mac/Window.
iii.	Node Js
iv.	React Native CLI
b.	Creating Project Solution 
i.	react-native init yourprojectname
ii.	For iOS
1.	Run Xcode > Open Project > yourprojectsolution>ios>yourprojectname.xcodeproj.
2.	Make sure you have full privilege.
3.	Build your Project.
4.	Run your project from Xcode or by command line react-native run-ios on terminal.
iii.	For Android
1.	Run Android Studio > Open Project > yourprojectsolution>android>build.gradle.
2.	Make sure you have full privilege.
3.	Build your project.
4.	Run android Emulator – Tool>AVD Manager> start emulator from list.
5.	Run you project by command line react-native run-android.
2.	App Icon & Launch Screen.
a.	For iOS.
i.	For App Icon
1.	Xcode>yourproject>Images.xcassests.
2.	Click on App Icon option.
3.	Add Icon with required resolution.
ii.	For App Launch Screen.
1.	Xcode>yourproject>LaunchScreen.xib.
2.	Choose an initial device view.
3.	Edit your project launch screen. 
b.	For Android.
i.	Android Studio > yourprojectsolution>select app>right click> select image asset from menu.
ii.	Configure Image Asset.
3.	Adding React Native Navigation.
a.	iOS Installation
i.	Install react-native-navigation. Terminal- npm install react-native-navigation.
ii.	In Xcode, in Project Navigator (left pane), right-click on the Libraries > Add files to [project name]. Add ./node_modules/react-native-navigation/ios/ReactNativeNavigation.xcodeproj (screenshots)
iii.	In Xcode, in Project Navigator (left pane), click on your project (top), then click on your target row (on the "project and targets list", which is on the left column of the right pane) and select the Build Phases tab (right pane). In the Link Binary With Libraries section add libReactNativeNavigation.a (screenshots)
iv.	In Xcode, in Project Navigator (left pane), click on your project (top), then click on your project row (on the "project and targets list") and select the Build Settings tab (right pane). In the Header Search Paths section add $(SRCROOT)/../node_modules/react-native-navigation/ios. Make sure on the right to mark this new path recursive (screenshots)
v.	In Xcode, you will need to edit this file: AppDelegate.m.
vi.	Replace all of its code with this reference
vii.	Replace @"index.ios" with @"index" if you are using index.js as your entry point instead of index.ios.js and index.android.js
viii.	Add #import "RCCManager.h"
ix.	Add   [[RCCManager sharedIntance] initBridgeWithBundleURL:jsCodeLocation launchOptions:launchOptions];

b.	Android Installation
i.	Install react-native-navigation. Terminal - npm install react-native-navigation.
ii.	Add the following in android/settings.gradle
1.	include ':react-native-navigation'
2.	 project(':react-native-navigation').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-navigation/android/app/')
iii.	Update project dependencies in android/app/build.gradle.
1.	dependencies {
2.	     compile fileTree(dir: "libs", include: ["*.jar"])
3.	     compile "com.android.support:appcompat-v7:23.0.1"
4.	     compile "com.facebook.react:react-native:+"
5.	     compile project(':react-native-navigation')
6.	 }
iv.	In MainActivity.java it should extend com.reactnativenavigation.controllers.SplashActivity instead of ReactActivity.
1.	This file can be located in android/app/src/main/java/com/yourproject/.
2.	import com.reactnativenavigation.controllers.SplashActivity;
3.	 public class MainActivity extends SplashActivity {
4.	 }
v.	In MainApplication.java, add the following
1.	import com.reactnativenavigation.NavigationApplication;
2.	
3.	 public class MainApplication extends NavigationApplication {
4.	
5.	     @Override
6.	     public boolean isDebug() {
7.	         // Make sure you are using BuildConfig from your own application
8.	         return BuildConfig.DEBUG;
9.	     }
10.	
11.	     protected List<ReactPackage> getPackages() {
12.	         // Add additional packages you require here
13.	         // No need to add RnnPackage and MainReactPackage
14.	         return Arrays.<ReactPackage>asList(
15.	             // eg. new VectorIconsPackage()
16.	         );
17.	     }
18.	
19.	     @Override
20.	     public List<ReactPackage> createAdditionalReactPackages() {
21.	         return getPackages();
22.	     }
23.	if you are using index.js as your entry point instead of index.ios.js and index.android.js. Add the following:
24.	@Override
25.	public String getJSMainModuleName() {
26.	    return "index";
27.	}
4.	Adding Vector Icons.
a.	iOS Installation.
i.	npm install react-native-vector-icons –save
ii.	Browse to node_modules/react-native-vector-icons and drag the folder Fonts (or just the ones you want) to your project in Xcode.
iii.	Edit Info.plist and add a property called Fonts provided by application (or UIAppFonts if Xcode won't autocomplete/not using Xcode) and type in the files you just added.
iv.	add RNVectorIcons.xcodeproj to Libraries
v.	add libRNVectorIcons.a to Link Binary With Libraries under Build Phases
b.	Android Installation.
i.	npm install react-native-vector-icons –save
ii.	Edit android/app/build.gradle ( NOT android/build.gradle ) and add the following:
iii.	apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
5.	Adding Redux.
a.	Installing Dependencies
i.	npm install redux
ii.	npm install react-redux
iii.	npm install redux-logger
iv.	npm install redux-thunk
v.	npm install redux-persist

