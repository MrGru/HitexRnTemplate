package com.hitexrntemplate;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.reactnativenavigation.NavigationApplication;
import com.reactnativenavigation.react.NavigationReactNativeHost;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends NavigationApplication {

  @Override
  protected ReactNativeHost createReactNativeHost() {
      return new NavigationReactNativeHost(this) {
          @Override
          protected String getJSMainModuleName() {
              return "index";
          }
      };
  }

  @Override
  public boolean isDebug() {
    return BuildConfig.DEBUG;
  }

  @Override
  public List<ReactPackage> createAdditionalReactPackages() {
    return Arrays.<ReactPackage>asList(
    // eg. new VectorIconsPackage()
    );
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
