package com.eigtba.app;

import android.app.*;import android.os.*;import android.graphics.Color;import android.webkit.*;

public class MainActivity extends Activity {
 WebView web;
 @Override public void onCreate(Bundle b){super.onCreate(b); web=new WebView(this); web.setBackgroundColor(Color.rgb(255,247,250)); WebSettings s=web.getSettings(); s.setJavaScriptEnabled(true); s.setDomStorageEnabled(true); s.setMediaPlaybackRequiresUserGesture(false); s.setAllowFileAccess(true); s.setAllowContentAccess(true); web.setWebChromeClient(new WebChromeClient()); web.loadUrl("file:///android_asset/index.html"); setContentView(web);}
 @Override public void onBackPressed(){if(web.canGoBack()) web.goBack(); else super.onBackPressed();}
}
